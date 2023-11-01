import { useEffect } from "react";
import jsPDF from "jspdf";

const ExportAsPDF = () => {
  const exportBusinessCardAsPDF = () => {
    const pdf = new jsPDF();
    const element = document.getElementById("business-card");

    pdf.html(element, {
      callback: function (pdf) {
        pdf.save("business-card.pdf");
      },
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
