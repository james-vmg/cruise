function fireStatusGet(data) {
    let mappingHead = data || modelpageMappingHeadDetail.oData.result.MS_MAPPING_H;
    let options = {
        parameters: {
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_CRUISE_KEY: mappingHead.CRUISE_KEY
            },
        };
    
    apiStatusGet(options);
}
