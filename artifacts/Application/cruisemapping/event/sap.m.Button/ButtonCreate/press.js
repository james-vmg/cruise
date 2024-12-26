let context = this.getParent().getBindingContext();
let object = context.getObject();
let Status = modelPanelStatus.oData.result.MS_ENTITY_STATS;
createStep = object.Step;
 if (!Status.ABAP_TRKORR) {
var options = {
    parameters: {
  "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
              }
};

apiGetTransports(options).then(    
            DialogTransport.open() );
            return;
        }
switch (object.Step) {
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
