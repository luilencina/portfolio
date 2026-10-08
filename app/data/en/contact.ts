import type { ContactField } from "~/types/contact";

export const contactData = {
  label: "Contact",
  title: {
    normal: "Let's work",
    highlight: " together.",
  },
  description:
    "Have a project in mind, want to talk about an opportunity, or simply want to say hello? Feel free to send me a message.",
  email: "luizalencina@hotmail.com",
  form: {
    fields: [
      {
        id: "name",
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Your name",
        required: true,
      },
      {
        id: "email",
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "you@example.com",
        required: true,
      },
      {
        id: "subject",
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "What would you like to talk about?",
        required: true,
      },
      {
        id: "message",
        name: "message",
        label: "Message",
        placeholder: "Write your message here...",
        rows: 6,
        textarea: true,
        required: true,
      },
      {
        id: "attachment",
        name: "attachment",
        label: "Attachment",
        type: "file",
        accept: ".pdf,.doc,.docx,.png,.jpg,.jpeg",
        required: true,
      },
    ] satisfies ContactField[],

    button: {
      defaultLabel: "Send message",
      loadingLabel: "Sending...",
    },
    messages: {
      success: "Your message was sent successfully!",
      error: "Something went wrong. Please try again.",
    },
    attachment: {
      maxSize: 5 * 1024 * 1024,
      maxSizeLabel: "5 MB",
      accept: "PDF, DOC, DOCX, PNG ou JPG",
    },
  },
} as const;
