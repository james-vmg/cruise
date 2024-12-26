let TRKORR = this.getText();
let Status = modelPanelStatus.oData.result.MS_ENTITY_STATS;
Status.ABAP_TRKORR = TRKORR;
switch (createStep) {
    case txtTranslatePackageCreated.getText():
            createPackage(Status);
        break;
    case txtTranslateStructureCreated.getText():
        createStructure(Status);
        break;
    case txtTranslateTableTypeCreated.getText():
        createTableType(Status);
        break;
    case txtTranslateDPCCreated.getText():
        CreateDPC(Status);
        break;
    case txtTranslateAPICreated.getText():
        createAPI(Status);
        break;

    default:
        sap.m.MessageToast.show(txtTranslateInderterminateFunction.getText());
        break;
}