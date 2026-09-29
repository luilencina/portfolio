export const downloadFile = (file: string, fileName: string) => {
  const link = document.createElement("a");

  link.href = file;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
