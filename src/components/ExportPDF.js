import jsPDF from 'jspdf';

class ExportPDF {

  constructor(exporter = jsPDF) {
    this.exporter = exporter;
  }

  saveFile = (takes) => {
    const allTakes = takes;

    this.createPDF();
  }

  createPDF = () => {
    let doc = new this.exporter("landscape", "mm", "a4");
  }

}

export default ExportPDF;