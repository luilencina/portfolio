import type { ButtonVariant } from "~/components/button/ButtonComponent";

export interface IntroductionButton {
  label: string;
  type: ButtonVariant;
  href?: string;
}

export interface IntroductionData {
  greeting: string;
  name: string;
  title: string;
  description: {
    firstLine: string;
    secondLine: string;
  };
  buttons: IntroductionButton[];
}
