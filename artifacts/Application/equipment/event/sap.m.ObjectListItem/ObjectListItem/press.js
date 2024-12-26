
const context = oEvent.oSource.getBindingContext("MultiModelEquipmentList");  

const data = context.getObject();

var options = {
    parameters: {
        "$select": "", // Optional 
        "sap-client": "800",
          "IV_PARAMS": JSON.stringify({"EQUIPMENT":data.EQUIPMENT}) // Required 
  }
};
BusyDialogReading.open();
apiequipmentRead(options);