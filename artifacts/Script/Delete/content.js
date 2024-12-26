async function del(opts, body, keyStruct) {
    let params = {};
    keyStruct.forEach((key) => {
        if (body.data.hasOwnProperty(key)) {
            params[key] = body.data[key];
        }
    });

    if (Object.keys(params).length > 0) {
        opts.parameters.IV_PARAMS = JSON.stringify(params);
        const read_response = await apis.Delete(opts);
        log.info(read_response.data.result);

        return {}; 
    }
}

complete({ del });