import React from "react"
export const PDFViewer = ({ pdf_url }: { pdf_url: string }) => {
  return (
    <div>
      <iframe src={pdf_url} width={"100%"} className="h-[500px] md:h-[700px]" />
    </div>
  )
}
