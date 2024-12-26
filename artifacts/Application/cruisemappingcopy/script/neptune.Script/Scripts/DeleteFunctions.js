 function deleteAPI(APIName) {
    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_NAME: APIName, // Required
        },
    };

    apiDeleteAPI(options);
}
function DeleteABAPEntities(DPCName) {
    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_CLASS_NAME: DPCName, // Required
            IV_DELETE_CLASS: true
        },
    };

    apiDeleteABAPEntities(options);
}
function deleteStructure(StructName) {
    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_STRUCT_NAME: StructName, // Required
            IV_DELETE_STRUCTURE: true
        },
    };

    apiDeleteABAPEntities(options);
}
function deleteTableType(TableTypeName) {
    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_TABLETYPE_NAME: TableTypeName, // Required
            IV_DELETE_TABLETYPE: true
        },
    };

    apiDeleteABAPEntities(options);
}
function deletePackage(PackageName) {
    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_PACKAGE_NAME: PackageName, // Required
            IV_DELETE_PACKAGE: true,
            IV_TRANSPORT: modelPanelStatus.oData.result.MS_ENTITY_STATS.BAP_TRKORR
        },
    };

    apiDeleteABAPEntities(options);
}