"use client";

import ImagePicker from "../image-picker/imagepicker.jsx";
import { submitFormData } from "@/services/events.js";
import { useForm } from "react-hook-form";
import { useFormStatus } from "react-dom";

// function Submit() {
//     const status = useFormStatus();
//     return <button type="submit" disabled={status.pending} className="bg-black py-3 px-6 font-sans font-medium text-white text-base rounded-md">Submit</button>
// }

function Form() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => submitFormData(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 mx-auto">
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <label htmlFor="title" className="font-sans font-bold text-base block mb-2">Title Event:</label>
                    <input
                        {...register("title", {
                            required: "Title event is required.", minLength:
                            {
                                value: 4,
                                message: "Title must be at least 4 characters long."
                            }
                        })}
                        type="text"
                        id="title"
                        name="title"
                        className="w-full h-12 border border-gray-300 focus:border-gray-600 outline-none rounded-md p-3"
                    />
                    {errors.title && (
                        <p role="alert" className="font-sans font-bold text-red-700 text-sm">
                            {errors.title.message}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="category" className="font-sans font-bold text-base block mb-2">Category Event:</label>
                    <input
                        {...register("category", { required: true })}
                        type="text"
                        id="category"
                        name="category"
                        className="w-full h-12 border border-gray-300 focus:border-gray-600 outline-none rounded-md p-3"
                    />
                    {errors.category?.type === "required" && (
                        <p role="alert" className="font-sans font-bold text-red-700 text-sm">Category event is required.</p>
                    )}
                </div>
                <div>
                    <label htmlFor="description" className="font-sans font-bold text-base block mb-2">Description Event:</label>
                    <input
                        {...register("description", {
                            required: "Description event is required.", minLength:
                            {
                                value: 20,
                                message: "Title must be at least 20 characters long."
                            }
                        })}
                        type="text"
                        id="description"
                        name="description"
                        className="w-full h-12 border border-gray-300 focus:border-gray-600 outline-none rounded-md p-3"
                    />
                    {errors.description && (
                        <p role="alert" className="font-sans font-bold text-red-700 text-sm">
                            {errors.description.message}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="date" className="font-sans font-bold text-base block mb-2">Date Event:</label>
                    <input
                        {...register("date", { required: true })}
                        type="date"
                        id="date"
                        name="date"
                        className="w-full h-12 border border-gray-300 focus:border-gray-600 outline-none rounded-md p-3"
                    />
                    {errors.date?.type === "required" && (
                        <p role="alert" className="font-sans font-bold text-red-700 text-sm">Date event is required.</p>
                    )}
                </div>
                <ImagePicker
                    {...register("image", { required: true })}
                    errors={errors}
                />
            </div>
            <div className="flex justify-end">
                {/* <Submit /> */}
                {isSubmitting ? null : <button type="submit" className="bg-black py-3 px-6 font-sans font-medium text-white text-base rounded-md">Submit</button>
                }
            </div>
        </form>
    );
}

export default Form;