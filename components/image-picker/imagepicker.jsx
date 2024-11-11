'use client'

import Image from "next/image";
import { useRef, useState } from "react";

function ImagePicker({ errors, register, onChange, required, ...props }) {

    const inputFileRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    // function handleOpenImagePicker() {
    //     console.log("handleOpenImagePicker");
    //     inputFileRef.current.click();
    // }

    function handleUploadImage(event) {
        const file = event.target.files[0];
        if (!file) return;

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            setSelectedFile(fileReader.result);
            if (onChange) {
                onChange(event);
            }
        };
    }

    return (
        <div>
            <label htmlFor="image" className="font-sans font-bold text-base block mb-2">Image Event:</label>
            <input
                type="file"
                id="image"
                name="image"
                ref={(e) => {
                    inputFileRef.current = e;
                    if (register) register(e);
                }}
                onChange={handleUploadImage}
                className="hidden"
                required={required}
                {...props}
            />
            {selectedFile ? (
                <figure className="relative w-40 h-40 border border-gray-300 bg-white rounded-md overflow-hidden">
                    <Image
                        src={selectedFile}
                        alt="Event image"
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="100%"
                    />
                </figure>
            ) : (
                <div className="relative w-40 h-40 border border-gray-300 bg-white rounded-md flex items-center justify-center">
                    No Image
                </div>
            )}
            {errors.image?.type === "required" && (
                <p role="alert" className="font-sans font-bold text-red-700 text-sm">Image event is required.</p>
            )}
            <label htmlFor="image" className="bg-black py-3 px-6 font-sans font-medium text-white text-base rounded-md cursor-pointer mt-2 block w-fit"> Choose an image</label>
            {/* <button
                onClick={handleOpenImagePicker}
                type="button"
                className="bg-black py-3 px-6 font-sans font-medium text-white text-base rounded-md"
            >
                Choose an image
            </button> */}
        </div>
    );
}

export default ImagePicker;
