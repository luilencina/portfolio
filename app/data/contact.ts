export type ContactField = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: "text" | "email";
  textarea?: boolean;
  rows?: number;
};

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
    ] satisfies ContactField[],

    button: {
      defaultLabel: "Send message",
      loadingLabel: "Sending...",
    },

    messages: {
      success: "Your message was sent successfully!",
      error: "Something went wrong. Please try again.",
    },
  },
} as const;
