import Form from "@/components/form/form";

export const metadata = {
    title: "Registration",
};

function EventRegistrationPage() {
    return (
        <section>
            <h1 className="font-sans font-bold text-5xl text-center mb-10">Event Registration Page</h1>
            <Form />
        </section>
    );
}

export default EventRegistrationPage