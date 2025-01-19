 function deleteAPI(APIName, Status) {
    
    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_NAME: APIName, // Required
            IV_TRANSPORT: Status.ABAP_TRKORR
        },
    };
    BusyDialogDeletingGeneric.open();
    apiDeleteAPI(options);
}
function DeleteABAPEntities(DPCName, Status) {
    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_CLASS_NAME: DPCName, // Required
            IV_DELETE_CLASS: true, 
            IV_TRANSPORT: Status.ABAP_TRKORR
        },
    };
    BusyDialogDeletingGeneric.open();
    apiDeleteABAPEntities(options);
}
function deleteStructure(StructName, Status) {
   let options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_STRUCT_NAME: StructName, // Required
            IV_DELETE_STRUCTURE: true, 
            IV_TRANSPORT: Status.ABAP_TRKORR
        },
    };
    BusyDialogDeletingGeneric.open();
    apiDeleteABAPEntities(options);
}
function deleteTableType(TableTypeName, Status) {
    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_TABLETYPE_NAME: TableTypeName, // Required
            IV_DELETE_TABLETYPE: true,
            IV_TRANSPORT: Status.ABAP_TRKORR
        },
    };
    BusyDialogDeletingGeneric.open();
    apiDeleteABAPEntities(options);
}
function deletePackage(PackageName, Status) {
    var options = {
        parameters: {
            $select: "", // Optional
            "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
            IV_PACKAGE_NAME: PackageName, // Required
            IV_DELETE_PACKAGE: true,
            IV_TRANSPORT: Status.ABAP_TRKORR
        },
    };
    BusyDialogDeletingGeneric.open();
    apiDeleteABAPEntities(options);
}