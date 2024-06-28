export const useDownload = () => {
  const handleDownload = (url: string, fileName: string) => {
    const fileExt =
      url[url.length - 5] === "."
        ? url.slice(url.length - 4, url.length)
        : url.slice(url.length - 3, url.length)
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement("a")
        link.href = url
        link.download = `${fileName}.${fileExt}` || `download-file.${fileExt}`
        document.body.appendChild(link)

        link.click()

        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      })
      .catch((error) => {
        console.error("Error fetching the file:", error)
      })
  }
  return handleDownload
}
