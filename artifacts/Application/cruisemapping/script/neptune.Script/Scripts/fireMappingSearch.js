function fireMappingHeadSearch() {
    var mappingKeyData = modelpageMappingHeadList.oData; 
    var selParams = JSON.stringify({"CRUISE_KEY":mappingKeyData.CRUISE_KEY});
    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", //Required
            IV_PARAMS: selParams, // Optional
    //        IV_SORTBY: sortBy, // Optional
    //        IS_PAGING: paging, // Optional
        },
    };
    BusyDialogSearching.open();
    apiMappingHeadSearch(options);
}
