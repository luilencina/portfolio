export const downloadFile = async (
  file: string,
  fileName: string,
): Promise<void> => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  const isSafari =
    /Safari/.test(navigator.userAgent) &&
    !/Chrome|CriOS|FxiOS|EdgiOS/.test(navigator.userAgent);

  if (isIOS || isSafari) {
    window.open(file, "_blank");
    return;
  }

  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Failed to download file: ${response.status}`);
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
  } catch (error) {
    console.error("Error downloading file:", error);

    window.open(file, "_blank");
  }
};
