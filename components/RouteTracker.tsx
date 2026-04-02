"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function RouteTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.crmTracker) {
      const currentUrl =
        window.location.origin +
        pathname +
        (searchParams.toString() ? `?${searchParams.toString()}` : "");

      window.crmTracker.track("page_view", { url: currentUrl });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function RouteTracker() {
  return (
    <Suspense fallback={null}>
      <RouteTrackerInner />
    </Suspense>
  );
}
