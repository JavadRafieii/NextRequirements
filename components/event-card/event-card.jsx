import Image from "next/image";
import Link from "next/link";

function EventCard({ slug, title, category, date, image }) {
    return (
        <div className="bg-white rounded-xl border border-gray-300 overflow-hidden">
            <figure className="relative w-full h-60">
                <Image
                    src={`/upload/${image}`}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100%"
                    priority
                />
            </figure>
            <div className="p-5">
                <span className="text-sm font-sans font-medium text-purple-900">{category}</span>
                <h4 className="font-sans font-bold text-2xl my-3">{title}</h4>
                <span className="font-sans font-medium text-base text-gray-500">{date}</span>
                <Link href={`events/${slug}`}>
                    <button className="w-full h-10 bg-black text-white rounded-lg font-sans font-bold text-base mt-5">More</button>
                </Link>
            </div>
        </div>
    );
}

export default EventCard;