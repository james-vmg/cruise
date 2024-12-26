/*
  Main Cruise Script - will call the respective function depending on the Cruise Operation
*/

try {
    // To avoid hard-coding the client, it is maintained as a global variable
    let sapclient = await globals.CruiseConfiguration.config("sapclient", "VMGSAP");
    let metaData = await globals.metaData.getMeta();
    const opts = {
        parameters: {
            "sap-client": sapclient || "800",
        },
    };

    // What has been passed in the request by Adaptive Framework?
    switch (req.query.method) {
        case "List":
            //Search
            result.data = await globals.Search.search(
                opts,
                req.body,
                metaData.fieldCatalog,
                metaData.tableName
            );
            break;
        case "Get":
            //Read
            result.data = await globals.Read.read(
                opts,
                req.body,
                metaData.fieldCatalog,
                metaData.keyStruct,
                metaData.structName
            );
            break;
        case "Save":
            //Update
            /*
            result.data = await globals.Update.update(
                opts,
                req.body,
                metaData.fieldCatalog,
                metaData.keyStruct,
                metaData.structName
            );
            */
            break;
        case "Delete":
            //Delete
            /*
            result.data = await globals.Delete.del(
                opts,
                req.body,
                metaData.keyStruct
            );
            */
            break;
        default:
            //execute code default
            break;
    }

    complete();
} catch (error) {
    log.error("Error in request: ", error.message);
    if (error.response) {
        log.error("Response Data:", error.response.data);
        log.error("Response Status:", error.response.status);
        log.error("Response Headers:", error.response.headers);
    } else if (error.request) {
        log.error("Request Data:", error.request);
    } else {
        log.error("Error Message:", error.message);
    }
    return fail();
}
