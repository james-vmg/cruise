async function update(opts, body, fieldCatalog, keyStruct, structName) {
    let keyField = keyStruct[0];
    let response = {};
    let mainRec = await globals.Filters.filterParams(body, fieldCatalog);
    opts.parameters = { IV_PARAMS: JSON.stringify(mainRec) };
    try {
        // Send api request.
        if (typeof mainRec[keyField] !== "undefined") { 
            log.info("Updating:")
            response = await apis.Update(opts);
        } else {
            log.info("Creating")
            
            response = await apis.Create(opts);
        }
        // Log response data
        const equipment = response.data.result[structName];

        return equipment; 
    } catch (error) {
        log.error("Error in request: ", error);
        return fail("Error in request: "+ error);
    }
}

complete({ update });