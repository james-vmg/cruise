function fireFunctLocSearch() {
  
    var selParams = JSON.stringify(modelPanelSelection.oData);
    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": "800", // Required
            IV_PARAMS: selParams, // Optional
             IV_SERVER_PAGINATION: false,
        },
    };
    BusyDialogSearching.open();
    apiFunctLocSearch(options);
}
