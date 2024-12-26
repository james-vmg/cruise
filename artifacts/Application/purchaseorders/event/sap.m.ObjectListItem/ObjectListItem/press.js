
const context = oEvent.oSource.getBindingContext("MultiModelPurchaseOrderList");  

const data = context.getObject();

var options = {
    parameters: {
        "$select": "", // Optional 
        "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required 
          "IV_PARAMS": JSON.stringify({"PURCHASEORDER":data.PURCHASEORDER}) // Required 
  }
};
BusyDialogReading.open();
apiPurchaseOrderRead(options);