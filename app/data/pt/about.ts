import type { AboutData } from "~/types/about";

import aboutImage from "~/assets/images/gengar.gif";

export const aboutData: AboutData = {
  title: "Sobre mim",
  description: [
    "Sou uma desenvolvedora de software dedicada e curiosa, que gosta de criar produtos capazes de resolver problemas reais. Trabalho principalmente com desenvolvimento front-end, mas também transito pelo back-end quando necessário. O que mais me motiva é transformar requisitos complexos em soluções claras, funcionais e intuitivas.",
    "Ao longo da minha carreira, trabalhei com tecnologias como React, JavaScript, HTML e CSS, desenvolvendo interfaces, integrando APIs e aprimorando fluxos de aplicações. Valorizo a qualidade e a manutenção do código, assim como a experiência de quem usa o produto. Estou sempre buscando maneiras de melhorar tanto o produto quanto o processo de desenvolvimento. Aprendo rápido, assumo a responsabilidade pelo meu trabalho e valorizo o trabalho em equipe e a comunicação clara. Acredito que os melhores resultados vêm da colaboração, da organização e do senso de responsabilidade compartilhada.",
    "Estou em constante evolução profissional e busco oportunidades para crescer, contribuir de forma significativa e gerar impacto junto às pessoas com quem trabalho.",
  ],
  image: {
    src: aboutImage,
    alt: "Luiza trabalhando com desenvolvimento de software",
  },
  education: [
    {
      id: "graduation",
      title: "Bacharelado em Engenharia de Software",
      institution: "PUCRS – Porto Alegre, RS, Brasil",
      period: "2019 - 2025",
      // Descrição opcional da formação.
    },
    {
      id: "specialization",
      title: "Curso de inglês",
      institution: "TopWay",
      period: "2026 – Atual",
      // Descrição opcional.
    },
  ],
};
