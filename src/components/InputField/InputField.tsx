import { ChangeEvent, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    className?: string;
    type: string;
}

export function InputField({ value, placeholder, onChange, required, className, type, ...props }: Props) {
    return (
        <div className="group w-full">
            <input
                className="w-full px-[12px] py-[5px] border-none outline-0 group"
                value={value}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                {...props}
            />
            <div className="w-full flex justify-center relative">
                <div data-info="bar" className="bg-[var(--foreground)] w-full h-[1px] absolute top-[2px]"></div>
                <div
                    data-info="bar"
                    className="bg-blue-500 w-0 h-[3px] group-focus-within:w-full transition-all duration-200 absolute top-[1px] z-10"
                ></div>
            </div>
        </div>
    );
}
