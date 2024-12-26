let context = this.getParent().getBindingContext();
let object = context.getObject();
let Status = modelPanelStatus.oData.result.MS_ENTITY_STATS;

switch (object.Step) {
    case txtTranslatePackageCreated.getText():
        deletePackage(object.Info, Status);
        break;
    case txtTranslateStructureCreated.getText():
        deleteStructure(object.Info, Status);
        break;
    case txtTranslateTableTypeCreated.getText():
        deleteTableType(object.Info, Status);
        break;
    case txtTranslateDPCCreated.getText():
        DeleteABAPEntities(object.Info, Status);
        break;
    case txtTranslateAPICreated.getText():
        deleteAPI(object.Info, Status);
        break;

    default:
        sap.m.MessageToast.show(txtTranslateInderterminateFunction.getText());
        break;
}
