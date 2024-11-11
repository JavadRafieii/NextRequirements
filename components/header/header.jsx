import CostumeLinks from "./costumeLink";

export default function Header() {
    return (
        <header className="container border-b border-gray-300 py-5 mb-5">
            <nav>
                <CostumeLinks />
            </nav>
        </header>
    );
}