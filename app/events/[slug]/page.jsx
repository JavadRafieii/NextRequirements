import { getEventsDetails } from "@/services/events";
import Image from "next/image";

export const metadata = {
    title: "Events Details",
};

async function EventsDetailsPage({ params }) {
    const { slug } = await params;
    const event = await getEventsDetails(slug);
    const { id, title, category, description, date, image } = event[0];

    return (
        <section>
            <h1 className="font-sans font-bold text-5xl text-center mb-10">Events Details Page</h1>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <span className="text-xl font-sans font-medium text-purple-900">{category}</span>
                    <h4 className="font-sans font-bold text-3xl my-3">{title}</h4>
                    <span className="font-sans font-medium text-base text-gray-500">{date}</span>
                    <p className="font-sans text-base font-light text-gray-400 mt-10">{description}</p>
                </div>
                <div>
                    <figure className="relative w-full h-80 rounded-xl overflow-hidden">
                        <Image
                            src={`/upload/${image}`}
                            alt={""}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="100%"
                            priority
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default EventsDetailsPage;