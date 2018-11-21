import ExportPDF from "../components/ExportPDF";

describe("ExportPDF", () => {

  const mockExporter = jest.fn();
  const exportPDF = new ExportPDF(mockExporter);

  describe("saveFile", () => {
    it("calls createPDF function", () => {
      exportPDF.saveFile();
      expect(mockExporter).toHaveBeenCalled();
    });
  });
});