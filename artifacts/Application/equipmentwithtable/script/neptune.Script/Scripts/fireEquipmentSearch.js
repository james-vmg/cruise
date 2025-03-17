function fireEquipmentSearch() {
    var paging = modelpageEquipmentList.oData;
    if (!paging.CURRENTPAGE) {
        paging.CURRENTPAGE = 1;
    }
    if (!paging.TAKE) {
        paging.TAKE = 100;
    }
    paging.SKIP = paging.TAKE * (paging.CURRENTPAGE - 1);
    paging = JSON.stringify(paging);
    var selParams = JSON.stringify(modelPanelSelection.oData);
    var sortBy = JSON.stringify(modelMOSorting.oData);
    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": "800", // Required
            IV_PARAMS: selParams, // Optional
            IV_SORTBY: sortBy, // Optional
            IS_PAGING: paging, // Optional
            IV_SERVER_PAGINATION: true,
        },
    };
    BusyDialogSearching.open();
    apiequipmentSearch(options);
}
