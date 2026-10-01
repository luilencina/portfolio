export type ContactField = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "email" | "file";
  textarea?: boolean;
  rows?: number;
  accept?: string;
};
