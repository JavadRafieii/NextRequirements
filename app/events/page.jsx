import EventCard from "@/components/event-card/event-card.jsx";
import { getEvents } from "@/services/events.js";
import { Suspense } from "react";
import Loading from "./loading.js";

export const metadata = {
    title: "Events",
};

async function Events() {
    const events = await getEvents();
    return (
        events.map(event => (
            <div key={event.slug}>
                <EventCard {...event} />
            </div>
        ))
    )
}

function EventsPage() {
    return (
        <section>
            <h1 className="font-sans font-bold text-5xl text-center mb-10">Events Page</h1>
            <Suspense fallback={<Loading />}>
                <div className="grid grid-cols-3 gap-5">
                    <Events />
                </div>
            </Suspense>
        </section>
    );
}

export default EventsPage;