
const context = oEvent.oSource.getBindingContext("EmployeeMultiModel");  

const data = context.getObject();

var options = {
    parameters: {
        "$select": "", // Optional 
        "sap-client": "800",
          "IV_PARAMS": JSON.stringify({"EMPLOYEENUMBER":data.EMPLOYEENUMBER}) // Required 
  }
};
BusyDialogReading.open();
apiemployeeRead(options);