import { AgentInputItem, Runner, InputGuardrailTripwireTriggered } from "@openai/agents";
import { deniseMaiAgent } from "@/agents/chatbot";
const conversation: AgentInputItem[] = [];

export async function POST(req: Request) {
    const { message } = await req.json();

    // Wrap user input as AgentInputItem
    const userInput: AgentInputItem = {
        type: "message",
        role: "user",
        content: [{ type: "input_text", text: message }]
    };
    conversation.push(userInput);

    const runner = new Runner();

    try {
        const response = await runner.run(deniseMaiAgent, conversation, { stream: true });

        const encoder = new TextEncoder();

        return new Response(
            new ReadableStream({
                async start(controller) {
                    try {
                        const nodeStream = response.toTextStream({ compatibleWithNodeStreams: true });
                        let msg = ""
                        for await (const chunk of nodeStream) {
                            const token = Buffer.from(chunk)
                            msg += token.toString()
                            controller.enqueue(encoder.encode(chunk));
                        }
                        conversation.push({
                            type: 'message',
                            role: 'assistant',
                            status: 'completed',
                            content: [
                                {
                                    type: 'output_text',
                                    text: msg
                                }
                            ]
                        })
                        controller.close();
                    } catch (e: any) {
                        // Check if it's a guardrail trigger (either by class or by message content)
                        const isGuardrail = e instanceof InputGuardrailTripwireTriggered ||
                            (e?.message && e.message.includes("Input guardrail triggered")) ||
                            (e?.cause?.message && e.cause.message.includes("Input guardrail triggered")) ||
                            (typeof e?.cause === 'string' && e.cause.includes("Input guardrail triggered"));

                        if (isGuardrail) {
                            const politeMessage = "I’m focused on helping realtors automate their operations with RealtyGenie. How can I assist you with your real estate business?";
                            controller.enqueue(encoder.encode(politeMessage));
                            controller.close();
                            return;
                        }

                        console.error("Stream error:", e);
                        controller.error(e);
                    }
                }
            }),
            {
                headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-cache" }
            }
        );
    } catch (e: any) {
        // Check if it's a guardrail trigger (either by class or by message content)
        const isGuardrail = e instanceof InputGuardrailTripwireTriggered ||
            (e?.message && e.message.includes("Input guardrail triggered")) ||
            (e?.cause?.message && e.cause.message.includes("Input guardrail triggered")) ||
            (typeof e?.cause === 'string' && e.cause.includes("Input guardrail triggered"));

        if (isGuardrail) {
            return new Response(
                "I’m focused on helping realtors automate their operations with RealtyGenie. How can I assist you with your real estate business?",
                { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } }
            );
        }
        console.error("Chat error:", e);
        return new Response("An error occurred.", { status: 500 });
    }
}