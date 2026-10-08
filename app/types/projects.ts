export interface ButtonLink {
  label: string;
  url: string;
  variant?: "filled" | "outlined";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  links?: ButtonLink[];
}
