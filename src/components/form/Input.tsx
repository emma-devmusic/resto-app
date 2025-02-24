import { OctagonAlert } from "lucide-react";
import { ChangeEvent, useId } from "react";

interface InputProps {
    label: string;
    type: string;
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    name: string;
    id?: string; // Required for accessibility (aria-label, aria-labelledby)
    className?: string; // Additional CSS class for styling purposes  // Optional prop to add additional styles to the input field. Example: className="my-class"  // Optional prop to add additional styles to the input field. Example: className="my-class"  // Optional prop to add additional styles to the input field. Example: className="my-class"  // Optional prop to add additional styles to the input field. Example: className="my-class"  // Optional prop
    placeholder?: string;
    checked?: boolean; // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make
    isFloatingLabel?: boolean; // Optional prop to make the input field a floating label;
    labelClass?: string; // Optional prop to add additional styles to the label. Example: labelClass="my-label-class"  // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class"  // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class"  // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class"
    inputClass?: string; // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class"  // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class"  // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class"  // Optional prop to add additional styles to the input field. Example: inputClass="my-input-class
    requiered?: boolean;
    errorMsg?: string;
}

export const Input = ({
    id,
    label,
    type, value, onChange, name, className, placeholder, checked, isFloatingLabel = false, labelClass = '', inputClass = '', requiered, errorMsg }: InputProps) => {
    const generatedId = useId(); // Genera un ID único
    const inputId = id || generatedId; // Usa el ID proporcionado o el generado
    const customClass = className || ''; // Optional prop to add additional styles to the input field. Example: className="my-class"
    const isCheckbox = type === 'checkbox'
    inputClass += `${errorMsg ? '!border-red-600 focus-within:!border-white focus-within:ring-2 focus-within:!ring-primary' : ''}`
    labelClass += `${errorMsg ? '!text-red-600' : ''}`

    if (isFloatingLabel) return (
        <div className={`w-full ${customClass}`}>
            <label
                htmlFor={inputId}
                className={`relative block rounded-md border transition-all border-gray-200 shadow-xs focus-within:border-primary focus-within:ring-1 focus-within:ring-primary ${inputClass}`}
            >
                <input
                    aria-label={`Cuadro de entrada para colocar ${label}`}
                    id={id}
                    type={type}
                    name={name}
                    className={`peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:ring-0 focus:outline-hidden py-2.5 px-2.5 w-full ${inputClass}`}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={requiered}
                />
                <span
                    className={`pointer-events-none rounded-md px-1 absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs ${labelClass}`}
                >
                    {label}
                </span>
            </label>
            {
                errorMsg &&
                <div className="flex items-center gap-1 text-red-600 p-0 m-0 mt-1 text-[13px]">
                    <OctagonAlert className="h-3.5 w-3.5 min-w-3.5 self-baseline" />
                    <p className="[line-height:14px]">{errorMsg}</p>
                </div>
            }
        </div>
    );

    return (
        <div className={`w-full  flex gap-1 ${isCheckbox ? 'items-center flex-row-reverse justify-end [&_input]:focus:outline-transparent' : 'flex-col'} ${customClass}`}>
            {
                label &&
                <label
                    htmlFor={inputId}
                    className={`block text-sm ${isCheckbox ? 'hover:cursor-pointer hover:underline' : 'font-medium text-gray-700'} ${labelClass}`}
                >
                    {label}
                </label>
            }
            <input
                id={id}
                aria-label={`Cuadro de entrada para colocar ${label}`}
                type={type}
                name={name}
                className={` py-2.5 px-2.5 ${!isCheckbox ? 'w-full' : 'hover:cursor-pointer'} border-1 transition-all border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-sm  focus:outline-2 focus:outline-primary ${inputClass}`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                checked={checked}
                required={requiered}
            />
            {
                errorMsg &&
                <div className="flex items-center gap-1 text-red-600 p-0 m-0 mt-1 text-[13px]">
                    <OctagonAlert className="h-3.5 w-3.5 min-w-3.5 self-baseline" />
                    <p className="[line-height:14px]">{errorMsg}</p>
                </div>
            }
        </div>
    );

};
