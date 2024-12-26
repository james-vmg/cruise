function convertStatusToTable(statusStruc) {
  ModelData.Delete(TableStatus);
    let tableRec = { lastCreated: false, firstNotCreated: false };
    tableRec.Icon = "sap-icon://key";
    tableRec.Step = txtTranslateKeyCreated.getText();
    tableRec.Status = statusStruc.CRUISE_KEY_CREATED;
    tableRec.Info = statusStruc.CRUISE_KEY;
    tableRec.ButtonsVisible = false;
    ModelData.Add(TableStatus, JSON.parse(JSON.stringify(tableRec)));
    tableRec.Icon = "sap-icon://header";
    tableRec.Step = txtTranslateMappingHeaderCreated.getText();
    tableRec.Status = statusStruc.CRUISE_HEADER_CREATED;
    tableRec.Info = statusStruc.CDSVIEW_SOURCE;
    tableRec.ButtonsVisible = false;
    ModelData.Add(TableStatus, JSON.parse(JSON.stringify(tableRec)));
    tableRec.hideButons = 
    tableRec.Icon = "sap-icon://detail-view";
    tableRec.Step = txtTranslateMappingDetailsCreated.getText();
    tableRec.Status = statusStruc.CRUISE_DETAILS_CREATED;
    tableRec.Info = statusStruc.NUMBER_OF_DETAILS;
    tableRec.ButtonsVisible = false;
    ModelData.Add(TableStatus, JSON.parse(JSON.stringify(tableRec)));
    tableRec.Icon = "sap-icon://fa-solid/gift";
    tableRec.Step = txtTranslatePackageCreated.getText();
    tableRec.Status = statusStruc.PACKAGE_CREATED;
    tableRec.Info = statusStruc.PACKAGE_NAME;
    tableRec.ButtonsVisible = true;
    ModelData.Add(TableStatus, JSON.parse(JSON.stringify(tableRec)));
    tableRec.Icon = "sap-icon://create-form";
    tableRec.Step = txtTranslateStructureCreated.getText();
    tableRec.Status = statusStruc.STRUCTURE_CREATED;
    tableRec.Info = statusStruc.STRUCT_NAME;
    tableRec.ButtonsVisible = true;
    ModelData.Add(TableStatus, JSON.parse(JSON.stringify(tableRec)));
    tableRec.Icon = "sap-icon://fa-solid/table";
    tableRec.Step = txtTranslateTableTypeCreated.getText();
    tableRec.Status = statusStruc.TABLE_TYPE_CREATED;
    tableRec.Info = statusStruc.TABLE_TYPE_NAME;
    tableRec.ButtonsVisible = true;
    ModelData.Add(TableStatus, JSON.parse(JSON.stringify(tableRec)));
    tableRec.Icon = "sap-icon://fa-solid/code";
    tableRec.Step = txtTranslateDPCCreated.getText();
    tableRec.Status = statusStruc.DPC_CREATED;
    tableRec.Info = statusStruc.DPC_NAME;
    tableRec.ButtonsVisible = true;
    ModelData.Add(TableStatus, JSON.parse(JSON.stringify(tableRec)));
    tableRec.Icon = "sap-icon://tnt/API";
    tableRec.Step = txtTranslateAPICreated.getText();
    tableRec.Status = statusStruc.SAP_API_CREATED;
    tableRec.Info = statusStruc.SAP_API_NAME;
    tableRec.ButtonsVisible = true;
    ModelData.Add(TableStatus, JSON.parse(JSON.stringify(tableRec)));

    let statusRecs = modelTableStatus.oData;
    for (i = 0; i < statusRecs.length; i++) {
        if (!statusRecs[i].Status) {
            statusRecs[i].firstNotCreated = true;
            break;
        }
    }
    for (i = statusRecs.length - 1; i > 0; i--) {
        if (statusRecs[i].Status) {
            statusRecs[i].lastCreated = true;
            break;
        }
    }
}
