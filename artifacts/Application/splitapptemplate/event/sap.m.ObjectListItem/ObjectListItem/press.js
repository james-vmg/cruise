
const context = oEvent.oSource.getBindingContext("MultiModel<Entity>List");  

const data = context.getObject();

var options = {
    parameters: {
        "$select": "", // Optional 
        "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required 
          "IV_PARAMS": JSON.stringify({"<Entity>":data.<Entity>}) // Required 
  }
};
BusyDialogReading.open();
api<Entity>Read(options);