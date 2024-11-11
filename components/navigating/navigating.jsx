"use client"

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function Navigating() {
    const router = useRouter();
    const pathname = usePathname();

    function handleGoBack() {
        router.back();
    }

    let content = null;

    if (pathname === "/") {
        content = null;
    } else {
        content = <button onClick={handleGoBack} className="mb-10 font-sans font-bold text-sm">Return to previous page</button>
    }

    return content
}

export default Navigating;