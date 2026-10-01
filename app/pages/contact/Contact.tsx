import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import ButtonComponent from "~/components/button/ButtonComponent";
import InputComponent from "~/components/input/InputComponent";

import { contactData } from "~/data/contact";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    setIsSending(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-20 bg-background text-text transition-colors duration-300"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-[50%] flex flex-col items-start">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text mb-8">
            {contactData.title.normal}
            <span className="text-primary">{contactData.title.highlight}</span>
          </h2>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mb-8">
            {contactData.description}
          </p>

          <div>
            <p className="mb-1 text-sm text-text/50">Email</p>

            <a
              href={`mailto:${contactData.email}`}
              className="font-medium transition-colors hover:text-primary"
            >
              {contactData.email}
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[50%]">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-text/10 bg-background/50 p-6 shadow-sm backdrop-blur-sm md:p-8"
          >
            <div className="grid gap-5">
              {contactData.form.fields.map((field) => (
                <InputComponent
                  key={field.id}
                  id={field.id}
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  rows={field.rows}
                  textarea={field.textarea}
                  required={field.required}
                />
              ))}

              {status === "success" && (
                <p className="text-sm font-medium text-green-500">
                  {contactData.form.messages.success}
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-medium text-red-500">
                  {contactData.form.messages.error}
                </p>
              )}

              <ButtonComponent
                type="submit"
                disabled={isSending}
                className="mt-2 w-full"
                label={
                  isSending
                    ? contactData.form.button.loadingLabel
                    : contactData.form.button.defaultLabel
                }
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
