import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

type InputComponentProps = {
  label: string;
  textarea?: boolean;
  error?: string;
} & (InputProps | TextareaProps);

export default function InputComponent({
  label,
  textarea = false,
  error,
  className = "",
  ...props
}: InputComponentProps) {
  const inputClassName = `w-full rounded-xl border border-text/10 bg-transparent px-4 py-3 text-text outline-none transition-all placeholder:text-text/30 focus:border-primary focus:ring-2 focus:ring-primary/20
    ${error ? "border-red-500" : ""}
    ${className}`;

  return (
    <div className="w-full">
      <label htmlFor={props.id} className="mb-2 block text-sm font-medium">
        {label}
      </label>

      {textarea ? (
        <textarea
          {...(props as TextareaProps)}
          className={`${inputClassName} resize-none`}
        />
      ) : (
        <input {...(props as InputProps)} className={inputClassName} />
      )}

      {error && (
        <span className="mt-1 block text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}
