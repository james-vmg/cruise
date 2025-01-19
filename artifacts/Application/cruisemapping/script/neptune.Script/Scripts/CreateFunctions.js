function createPackage(status) {
    let mappingHead = modelpageMappingHeadDetail.oData.result.MS_MAPPING_H;

    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_CRUISE_KEY: mappingHead.CRUISE_KEY, // Required
            IV_SUPERCLASS: "ZCL_CRUISE", // Required
            IV_CREATE_PACKAGE: true, // Required
            IV_CREATE_STRUCTURE: false, // Required
            IV_CREATE_TABLETYPE: false, // Required
            IV_CREATE_CLASS: false, // Required
            IV_SIMULATION: false, // Required
            IV_TRANSPORT: status.ABAP_TRKORR,
        },
    };
    BusyDialogCreatingGeneric.open();
    apiCreateABAPEntities(options);
}
function createStructure(status) {
    let mappingHead = modelpageMappingHeadDetail.oData.result.MS_MAPPING_H;

    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_CRUISE_KEY: mappingHead.CRUISE_KEY, // Required
            IV_SUPERCLASS: "ZCL_CRUISE", // Required
            IV_CREATE_PACKAGE: false, // Required
            IV_CREATE_STRUCTURE: true, // Required
            IV_CREATE_TABLETYPE: false, // Required
            IV_CREATE_CLASS: false, // Required
            IV_SIMULATION: false, // Required
            IV_TRANSPORT: status.ABAP_TRKORR,
        },
    };
    BusyDialogCreatingGeneric.open();
    apiCreateABAPEntities(options);
}
function createTableType(status) {
    let mappingHead = modelpageMappingHeadDetail.oData.result.MS_MAPPING_H;

    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_CRUISE_KEY: mappingHead.CRUISE_KEY, // Required
            IV_SUPERCLASS: "ZCL_CRUISE", // Required
            IV_CREATE_PACKAGE: false, // Required
            IV_CREATE_STRUCTURE: false, // Required
            IV_CREATE_TABLETYPE: true, // Required
            IV_CREATE_CLASS: false, // Required
            IV_SIMULATION: false, // Required
            IV_TRANSPORT: status.ABAP_TRKORR,
        },
    };
    BusyDialogCreatingGeneric.open();
    apiCreateABAPEntities(options);
}
function CreateDPC(status) {
    let mappingHead = modelpageMappingHeadDetail.oData.result.MS_MAPPING_H;

    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_CRUISE_KEY: mappingHead.CRUISE_KEY, // Required
            IV_SUPERCLASS: "ZCL_CRUISE", // Required
            IV_CREATE_PACKAGE: false, // Required
            IV_CREATE_STRUCTURE: false, // Required
            IV_CREATE_TABLETYPE: false, // Required
            IV_CREATE_CLASS: true, // Required
            IV_SIMULATION: false, // Required
            IV_TRANSPORT: status.ABAP_TRKORR,
        },
    };
    BusyDialogCreatingGeneric.open();
    apiCreateABAPEntities(options);
}
function createAPI(status) {
    let mappingHead = modelpageMappingHeadDetail.oData.result.MS_MAPPING_H;

    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_CRUISE_KEY: mappingHead.CRUISE_KEY, // Required
            IV_TRANSPORT: status.ABAP_TRKORR,
        },
    };

    BusyDialogCreatingGeneric.open();
    apiCreateAPI(options);
}
