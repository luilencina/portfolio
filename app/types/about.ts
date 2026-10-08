export interface AboutData {
  title: string;
  description: string[];
  image: {
    src: string;
    alt: string;
  };
  education: Education[];
}

export interface Education {
  id: string;
  title: string;
  institution: string;
  period: string;
  description?: string;
}
