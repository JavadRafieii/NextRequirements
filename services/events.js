'use server'

import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'

const API_ADDRESS_EVENTS = "http://localhost:3001/events";
const API_ADDRESS_EVENTS_DETAILS = "http://localhost:3001/events?slug=";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getEvents() {
    await delay(3000);
    const data = await fetch(API_ADDRESS_EVENTS);
    const events = await data.json();
    return events;
}

export async function getEventsDetails(slug) {
    await delay(3000);
    const data = await fetch(`${API_ADDRESS_EVENTS_DETAILS}${slug}`);
    const event = await data.json();
    return event;
}

// export async function submitFormData(formData) {
//     let slug = formData.get("title").trim().replace(/ /g, "-").toLowerCase();
//     const extension = formData.get("image")?.name.split(".").pop();
//     const fileName = extension ? `${slug}.${extension}` : null;

//     const data = {
//         slug,
//         title: formData.get("title"),
//         category: formData.get("category"),
//         description: formData.get("description"),
//         date: formData.get("date"),
//         image: fileName,
//     };

//     const response = await fetch(API_ADDRESS_EVENTS, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//         const errorText = await response.text();
//         console.error("Server response error:", errorText);
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     if (fileName) {
//         try {
//             const fs = require("fs");
//             const stream = fs.createWriteStream(`public/upload/${fileName}`);
//             const bufferImage = await formData.get("image").arrayBuffer();
//             stream.write(Buffer.from(bufferImage));
//             stream.end();
//         } catch (error) {
//             console.error("Error saving image:", error);
//             throw new Error("Saving image failed!");
//         }
//     }

//     redirect(`/events/${slug}`);
// }

export async function submitFormData({ title, category, description, date, image }) {
    await delay(3000);
    let slug = title.trim().replace(/ /g, "-").toLowerCase();
    const extension = image[0].name.split(".").pop();
    const fileName = extension ? `${slug}.${extension}` : null;

    const data = {
        slug,
        title,
        category,
        description,
        date,
        image: fileName,
    };

    const response = await fetch(API_ADDRESS_EVENTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("Server response error:", errorText);
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    if (fileName) {
        try {
            const fs = require("fs");
            const stream = fs.createWriteStream(`public/upload/${fileName}`);
            const bufferImage = await image[0].arrayBuffer();
            stream.write(Buffer.from(bufferImage));
            stream.end();
        } catch (error) {
            console.error("Error saving image:", error);
            throw new Error("Saving image failed!");
        }
    }
    revalidatePath('/events/', 'layout');
    redirect(`/events/${slug}`);
}
