DialogTransportCreate.close();
var options = {
    parameters: {
        $select: "", // Optional
        "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
    },
};

apiGetTransports(options);
