function firePurchaseOrderSearch() {
    var paging = modelpagePurchaseOrderList.oData;
    if (!paging.CURRENTPAGE) {
        paging.CURRENTPAGE = 1;
    }
    if (!paging.TAKE) {
        paging.TAKE = 100;
    }
    paging.SKIP = paging.TAKE * (paging.CURRENTPAGE - 1);
    paging = JSON.stringify(paging);

    var selParams = JSON.stringify(modelSFSelection.oData);
    var sortBy = JSON.stringify(modelMOSorting.oData);
    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", //Required
            IV_PARAMS: selParams, // Optional
            IV_SORTBY: sortBy, // Optional
            IS_PAGING: paging, // Optional
        },
    };
    BusyDialogSearching.open();
    apiPurchaseOrderSearch(options);
}
