/**
* Created by Scott on 6/12/2014.
*/
var TsPdf = (function () {
    function TsPdf(orientation, units, page_size) {
        this.doc = new jsPDF(orientation, units, page_size);
    }
    TsPdf.prototype.line = function (x1, y1, x2, y2) {
        this.doc.line(x1, y1, x2, y2);
    };

    TsPdf.prototype.hline = function (x, y, len) {
        this.line(x, y, x + len, y);
    };

    TsPdf.prototype.vline = function (x, y, len) {
        this.line(x, y, x, y + len);
    };

    TsPdf.prototype.dottedHLine = function (x, y, len, dashLen, spaceLen) {
        var dx = x;
        while (dx < (x + len)) {
            this.hline(dx, y, dashLen);
            dx = dx + dashLen + spaceLen;
        }
    };

    TsPdf.prototype.addImage = function (data, format, x, y, width, height) {
        this.doc.addImage(data, format, x, y, width, height);
    };

    TsPdf.prototype.setFont = function (face) {
        this.doc.setFont(face);
    };

    TsPdf.prototype.setFontType = function (fontType) {
        this.doc.setFontType(fontType);
    };

    TsPdf.prototype.setFontSize = function (size) {
        this.doc.setFontSize(size);
    };

    TsPdf.prototype.text = function (x, y, text) {
        this.doc.text(x, y, text);
    };

    TsPdf.prototype.setLineWidth = function (width) {
        this.doc.setLineWidth(width);
    };

    TsPdf.prototype.rect = function (x, y, width, height) {
        this.doc.rect(x, y, width, height);
    };

    TsPdf.prototype.output = function (destination) {
        this.doc.output(destination);
    };

    TsPdf.prototype.highlight = function (x, y, width, height) {
        this.doc.setDrawColor(0);
        this.doc.setFillColor(242, 246, 129);
        this.doc.rect(x, y, width, height, 'F');
    };

    TsPdf.prototype.addPage = function () {
        this.doc.addPage();
    };
    return TsPdf;
})();
//# sourceMappingURL=tspdf.js.map
