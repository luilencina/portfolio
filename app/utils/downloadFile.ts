export const downloadFile = (file: string, fileName?: string): void => {
  const link = document.createElement("a");

  link.href = file;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
