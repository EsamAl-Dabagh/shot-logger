import ExportPDF from "../components/ExportPDF";

describe("ExportPDF", () => {
  const exportPDF = new ExportPDF();

  it("has a saveFile method", () => {
    expect(exportPDF.saveFile()).toEqual("saveFile called")
  });
});