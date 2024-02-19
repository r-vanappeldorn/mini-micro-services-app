import { Dispatch } from "react";
import TextareaAutosize from "react-textarea-autosize";

type InputProps = {
    value: string;
    setValue: Dispatch<string>;
    label?: string;
    id: string;
    isTextarea?: boolean;
};

export default function Input({
    value,
    setValue,
    label,
    id,
    isTextarea,
}: InputProps) {
    return (
        <>
            {!label || (
                <label className="text-gray-400" htmlFor={id}>
                    {label}
                </label>
            )}
            {isTextarea ? (
                <TextareaAutosize
                    id={id}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="mb- w-full appearance-none rounded-sm border-2 border-gray-700 bg-[rgb(12,17,28)] px-3 py-2 text-sm leading-tight text-gray-200 shadow focus:border-gray-600 focus:outline-none"
                />
            ) : (
                <input
                    type="text"
                    id={id}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="mb-4 w-full appearance-none rounded-sm border-2 border-gray-700 bg-[rgb(12,17,28)] px-3 py-2 leading-tight text-gray-200 shadow focus:border-gray-600 focus:outline-none"
                />
            )}
        </>
    );
}
