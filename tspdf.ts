/**
 * Created by Scott on 6/12/2014.
 */

class TsPdf {
    doc: any;
    constructor (orientation?:string, units?:string, page_size?:string) {
        this.doc = new jsPDF(orientation, units, page_size);
    }

    line(x1: number, y1: number, x2: number, y2: number) {
        this.doc.line(x1, y1, x2, y2);
    }

    hline(x: number, y: number, len: number) {
        this.line(x, y, x + len, y);
    }

    vline(x: number, y: number, len: number) {
        this.line(x, y, x, y + len);
    }

    dottedHLine(x: number, y: number, len: number, dashLen: number, spaceLen: number) {
        var dx = x;
        while (dx < (x + len)) {
            this.hline(dx, y, dashLen);
            dx = dx + dashLen + spaceLen;
        }
    }

    addImage(data: string, format: string, x: number, y: number, width: number, height: number) {
        this.doc.addImage(data, format, x, y, width, height);
    }

    setFont(face: string) {
        this.doc.setFont(face);
    }

    setFontType(fontType: string) {
        this.doc.setFontType(fontType);
    }

    setFontSize(size: number) {
        this.doc.setFontSize(size);
    }

    text(x: number, y: number, text: string) {
        this.doc.text(x, y, text);
    }

    setLineWidth(width: number) {
        this.doc.setLineWidth(width);
    }

    rect(x: number, y: number, width: number, height: number) {
        this.doc.rect(x, y, width, height);
    }

    output(destination: string) {
        this.doc.output(destination);
    }

    highlight(x: number, y: number, width: number, height: number) {
        this.doc.setDrawColor(0);
        this.doc.setFillColor(242, 246, 129);
        this.doc.rect(x, y, width, height, 'F');
    }

    addPage() {
        this.doc.addPage();
    }
}