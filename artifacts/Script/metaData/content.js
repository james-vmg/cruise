const getMeta = async function () {
    let fieldCatalog = [],
        structName = "",
        tableName = "",
        keyStruct = [];

    let sapclient = await globals.CruiseConfiguration.config("sapclient", "VMGSAP");
    const opts = {
        parameters: {
            "sap-client": sapclient || "800",
        },
    };



    try {
        // The API returns just a simple array of objects, each with a NAME, TYPE and LABEL
        const response = await apis.MetaData(opts);

        // The API returns the keys in upper case (because it is provided by ABAP)
        // The Adaptive Framework requires that these be lower case
        fieldCatalog = response.data.result.MT_METADATA.map((item) => {
            let newItem = {};
            for (let key in item) {
                if (item.hasOwnProperty(key)) {
                    newItem[key.toLowerCase()] = item[key];
                }
            }
            return newItem;
        });
        structName = response.data.result.MV_STRUCT_NAME;
        tableName = response.data.result.MV_TABLE_NAME;
        keyStruct = JSON.parse(response.data.result.MV_KEY_STRUCT);

        // Set the result and complete the script
        return { "fieldCatalog": fieldCatalog, "tableName": tableName, "structName": structName, "keyStruct": keyStruct }; 
    } catch (error) {
        log.error("Error in MetaData: ", error);
        //   return fail();
    }
};
complete({ getMeta });