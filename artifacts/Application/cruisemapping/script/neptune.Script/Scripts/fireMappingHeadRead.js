function fireMappingHeadRead(data) {
    let mappingHead = data || modelpageMappingHeadDetail.oData.result.MS_MAPPING_H;
    let options = {
        parameters: {
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_PARAMS: JSON.stringify({
            CRUISE_KEY: mappingHead.CRUISE_KEY,
            CDSVIEW: mappingHead.CDSVIEW,
            }),
        },
    };
    BusyDialogReading.open();
    apiMappingHeadRead(options);
}
