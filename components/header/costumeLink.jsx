'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

function CostumeLinks() {
    const pathname = usePathname();
    return (
        <ul className="flex items-center space-x-3 font-sans font-bold">
            <li>
                <Link className={pathname === "/" ? "text-purple-900" : undefined} href={"/"}>Home</Link>
            </li>
            <li>
                <Link className={pathname.startsWith("/events") ? "text-purple-900" : undefined} href={"/events"}>Events</Link>
            </li>
            <li>
                <Link className={pathname.startsWith("/registration") ? "text-purple-900" : undefined} href={"/registration"}>Registration</Link>
            </li>
        </ul>
    )
}

export default CostumeLinks;