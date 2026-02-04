
interface ApiClient {
    post: <T = any>(url: string, body?: any) => Promise<T>;
    get: <T = any>(url: string) => Promise<T>;
    put: <T = any>(url: string, body?: any) => Promise<T>;
    delete: <T = any>(url: string) => Promise<T>;
}

const api: ApiClient = {
    post: async (url, body) => {
        const fullUrl = url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_BACKEND_URL || 'https://calling-agent-backend-yo10.onrender.com'}${url}`;
        const response = await fetch(fullUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`API call failed: ${response.statusText}`);
        }

        return response.json();
    },
    get: async (url) => {
        const fullUrl = url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_BACKEND_URL || 'https://calling-agent-backend-yo10.onrender.com'}${url}`;
        const response = await fetch(fullUrl);

        if (!response.ok) {
            throw new Error(`API call failed: ${response.statusText}`);
        }

        return response.json();
    },
    put: async (url, body) => {
        const fullUrl = url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_BACKEND_URL || 'https://calling-agent-backend-yo10.onrender.com'}${url}`;
        const response = await fetch(fullUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`API call failed: ${response.statusText}`);
        }

        return response.json();
    },
    delete: async (url) => {
        const fullUrl = url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_BACKEND_URL || 'https://calling-agent-backend-yo10.onrender.com'}${url}`;
        const response = await fetch(fullUrl, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`API call failed: ${response.statusText}`);
        }

        return response.json();
    }
};

export default api;
