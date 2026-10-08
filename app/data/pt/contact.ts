import type { ContactField } from "~/types/contact";

export const contactData = {
  label: "Contato",
  title: {
    normal: "Vamos trabalhar",
    highlight: " juntas.",
  },
  description:
    "Tem um projeto em mente, quer conversar sobre uma oportunidade ou simplesmente dar um oi? Fique à vontade para me enviar uma mensagem.",
  email: "luizalencina@hotmail.com",
  form: {
    fields: [
      {
        id: "name",
        name: "name",
        label: "Nome",
        type: "text",
        placeholder: "Seu nome",
        required: true,
      },
      {
        id: "email",
        name: "email",
        label: "E-mail",
        type: "email",
        placeholder: "voce@exemplo.com",
        required: true,
      },
      {
        id: "subject",
        name: "subject",
        label: "Assunto",
        type: "text",
        placeholder: "Sobre o que você gostaria de conversar?",
        required: true,
      },
      {
        id: "message",
        name: "message",
        label: "Mensagem",
        placeholder: "Escreva sua mensagem aqui...",
        rows: 6,
        textarea: true,
        required: true,
      },
      {
        id: "attachment",
        name: "attachment",
        label: "Anexo",
        type: "file",
        accept: ".pdf,.doc,.docx,.png,.jpg,.jpeg",
        required: true,
      },
    ] satisfies ContactField[],
    button: {
      defaultLabel: "Enviar mensagem",
      loadingLabel: "Enviando...",
    },
    messages: {
      success: "Sua mensagem foi enviada com sucesso!",
      error: "Algo deu errado. Tente novamente.",
    },
    attachment: {
      maxSize: 5 * 1024 * 1024,
      maxSizeLabel: "5 MB",
      accept: "PDF, DOC, DOCX, PNG ou JPG",
    },
  },
} as const;
