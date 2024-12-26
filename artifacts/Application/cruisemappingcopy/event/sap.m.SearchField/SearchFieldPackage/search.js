if (!this.getValue()) {
    modelTablePackages.setData();
    DialogPackages.setTitle(txtTitlePackages.getText() + " (0)");
    return;
}

DialogPackages.setBusy(true);
var options = {
    parameters: {
        "$select": "", // Optional 
          "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            "IV_DEVCLASS": this.getValue() // Required 
    }
};

apiGetPackages(options);