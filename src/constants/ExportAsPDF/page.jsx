import { useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ExportAsPDF = () => {
  const exportBusinessCardAsPDF = () => {
    const pdf = new jsPDF();
    const element = document.getElementById("business-card");

    const pdfWidth = 210;
    const pdfHeight = 297;
    const scale = 0.8;
    const yOffset = (pdfHeight - element.clientHeight * scale) / 2;

    // Use html2canvas to render HTML to canvas
    html2canvas(element, { scale: scale }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");

      // Add the image to the PDF
      pdf.addImage(
        imgData,
        "JPEG",
        0,
        yOffset,
        pdfWidth,
        element.clientHeight * scale
      );

      // Save the PDF
      pdf.save("business-card.pdf");
    });
  };

  useEffect(() => {
    const exportButton = document.getElementById("export-button");
    exportButton.addEventListener("click", exportBusinessCardAsPDF);

    return () => {
      exportButton.removeEventListener("click", exportBusinessCardAsPDF);
    };
  }, []);

  return null;
};

export default ExportAsPDF;
