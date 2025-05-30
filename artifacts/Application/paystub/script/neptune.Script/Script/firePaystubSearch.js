function firePaystubSearch() {
    var paging = modelpagePaystubList.oData;
    if (!paging.CURRENTPAGE) {
        paging.CURRENTPAGE = 1;
    }
    if (!paging.TAKE) {
        paging.TAKE = 20;
    }
    paging.SKIP = paging.TAKE * (paging.CURRENTPAGE - 1);
    paging = JSON.stringify(paging);

    var selParams = JSON.stringify(modelPanelSelection.oData);
    var sortBy = JSON.stringify(modelMOSorting.oData);
    var options = {
        parameters: {
            $select: "",
            "SAP-CLIENT": "800",
            IV_PARAMS: selParams, // Optional
            IV_SORTBY: sortBy, // Optional
            IS_PAGING: paging, // Optional
        },
    };
    BusyDialogSearching.open();
    apipaystubSearch(options);

}
