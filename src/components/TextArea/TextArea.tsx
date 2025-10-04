import { ChangeEvent, TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    value: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    className?: string;
}

export function TextArea({ value, placeholder, onChange, required, className, ...props }: Props) {
    return (
        <div className="group w-full">
            <textarea
                className="w-full px-[12px] py-[5px] border-none outline-0 group h-fit resize"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                {...props}
            />
            <div className="w-full flex justify-center relative">
                <div data-info="bar" className="bg-[#333] w-full h-[1px] absolute top-[2px]"></div>
                <div
                    data-info="bar"
                    className="bg-pink-500 w-0 h-[3px] group-focus-within:w-full transition-all duration-200 absolute top-[1px] z-10"
                ></div>
            </div>
        </div>
    );
}
