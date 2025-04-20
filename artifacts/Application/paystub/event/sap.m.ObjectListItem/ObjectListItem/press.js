
const context = oEvent.oSource.getBindingContext("PaystubMultiModel");  

const data = context.getObject();

var options = {
    parameters: {
        "$select": "", // Optional 
        "sap-client": "800",
          "IV_PARAMS": JSON.stringify({"STARTDATE":data.STARTDATE}) // Required 
  }
};
BusyDialogReading.open();
apipaystubRead(options);