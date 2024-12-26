async function read(opts, body, fieldCatalog, keyStruct, structName) {
    let fieldCatalogEntry = {};
    let params = {};
    keyStruct.forEach((key) => {
        if (body.hasOwnProperty(key)) {
            params[key] = body[key];
        }
    });

    // Was the Key passed in via the req object? This indicates a single read lets process that
    if (Object.keys(params).length > 0) {
        opts.parameters.IV_PARAMS = JSON.stringify(params);
        const read_response = await apis.Read(opts);
        let result = read_response.data.result[structName];
        // convert any dates from SAP into JS Date format
        for (let key in result) {
            fieldCatalogEntry = {};
            fieldCatalogEntry = fieldCatalog.find((item) => item.name === key);
            if (fieldCatalogEntry) {
                if (fieldCatalogEntry.type === "date") {
                    result[key] = await globals.Dates.SAPToJSDate(result[key]);
                }
            }
        }
        result.id = result.ID || "";
        return result;
    }
}

complete({ read });