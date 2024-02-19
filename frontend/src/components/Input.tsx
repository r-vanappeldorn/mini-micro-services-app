import { Dispatch } from "react";

type InputProps = {
    value: string;
    setValue: Dispatch<string>;
    label: string;
    id: string;
};

export default function Input({ value, setValue, label, id }: InputProps) {
    return (
        <>
            <label className="text-gray-400" htmlFor={id}>
                {label}
            </label>
            <input
                type="text"
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="mb-4 w-full appearance-none rounded-sm border-2 border-gray-700 bg-[rgb(12,17,28)] px-3 py-2 leading-tight text-gray-200 shadow focus:border-gray-600 focus:outline-none"
            />
        </>
    );
}
