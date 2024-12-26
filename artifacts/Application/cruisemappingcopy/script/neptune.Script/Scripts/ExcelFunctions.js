function excelUploadFunction(e, uploader) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        //    document.getElementById("oFileUploader").value = '';
        // uploader.value = '';
        workbook = XLSX.read(e.target.result, {
            cellDates: true,
        });
        if (workbook.SheetNames.length > 1) {
            var workSheets = [];
            workbook.SheetNames.forEach((sheet) => workSheets.push({ sheetName: sheet }));
            modeloSelectDialogSheets.setData(workSheets);
            oSelectDialogSheets.open();
        } else {
            parseExcelSheet(workbook.SheetNames[0]);
        }
    };
    reader.readAsArrayBuffer(file);
}

function parseExcelSheet(sheetName) {
    let mappingHead = modelpageMappingHeadDetail.oData.result.MS_MAPPING_H;
    tabData = JSON.parse(
        JSON.stringify(
            XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
                blankrows: false,
                defVal: "",
            })
        )
    );

    skipRefresh = true;
    if (tabData.length > 0) {
        //     tabHeader = getHeaderRow(workbook.Sheets[sheetName])
        tabData.forEach((e) => delete e.__rowNum__);
        tabData.forEach((item) => {
            item.CRUISE_KEY = mappingHead.CRUISE_KEY;
            item.CDSVIEW = mappingHead.CDSVIEW;
            item.KEYFLAG = item.KEYFLAG != null;
            item.SORT = item.SORT != null;
            item.EDITABLE = item.EDITABLE != null;
            item.FILTER = item.FILTER != null;
            item.VIEWFIELD = item.VIEWFIELD.toUpperCase();
            item.TABNAME = item.TABNAME.toUpperCase();
            item.FIELDNAME = item.FIELDNAME.toUpperCase();
        });
        modelTableMapDetailsPredisplay.setData(tabData);
        DialogUploadExcel.close();
        DialogPredisplayExcelData.open();
    } else {
        sap.m.MessageToast.show("Selected sheet does not contain any data !");
    }
}

function getHeaderRow(sheet) {
    var headers = [];
    var range = XLSX.utils.decode_range(sheet["!ref"]);
    var C,
        R = range.s.r; /* start in the first row */
    /* walk every column in the range */
    for (C = range.s.c; C <= range.e.c; ++C) {
        var cell =
            sheet[XLSX.utils.encode_cell({ c: C, r: R })]; /* find the cell in the first row */

        var hdr = "UNKNOWN " + C; // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);

        headers.push(hdr);
    }
    return headers;
}
