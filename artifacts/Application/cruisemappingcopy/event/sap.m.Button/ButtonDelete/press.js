let context = this.getParent().getBindingContext();
let object = context.getObject();

switch (object.Step) {
    case txtTranslatePackageCreated.getText():
        deletePackage(object.Info);
        break;
    case txtTranslateStructureCreated.getText():
        deleteStructure(object.Info);
        break;
    case txtTranslateTableTypeCreated.getText():
        deleteTableType(object.Info);
        break;
    case txtTranslateDPCCreated.getText():
        DeleteABAPEntities(object.Info);
        break;
    case txtTranslateAPICreated.getText():
        deleteAPI(object.Info);
        break;

    default:
        sap.m.MessageToast.show(txtTranslateInderterminateFunction.getText());
        break;
}
