try {
    
    let metaData = await globals.metaData.getMeta(req);
    // Set the result and complete the script
    result.data = metaData.fieldCatalog;
    complete();
} catch (error) {
    log.error("Error in Connector: ", error);
    return fail();
}