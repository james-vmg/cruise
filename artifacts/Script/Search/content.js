async function search(opts, body, fieldCatalog, tableName) {
    try {
        // Was sorting requested? by Adaptive Framework e.g.  "_order": { "EQUIPMENT": "DESC" }
        if (body._order) {
            const sortField = Object.keys(body._order)[0];
            let sortDirection = body._order[sortField].toUpperCase();

            // Convert ASC to ASCENDING and DESC to DESCENDING
            if (sortDirection === "ASC") {
                sortDirection = "ASCENDING";
            } else if (sortDirection === "DESC") {
                sortDirection = "DESCENDING";
            }

            let sort = [
                {
                    FIELDNAME: sortField,
                    DIRECTION: sortDirection,
                },
            ];

            opts.parameters.IV_SORTBY = JSON.stringify(sort);
        }

        // Was pagination requested? by Adaptive Framework e.g. "_pagination": {  "take": 50, "skip": 0 },
        if (body._pagination) {
            const { take, skip } = body._pagination;

            if (typeof take === "number" && typeof skip === "number") {
                let paging = {
                    TAKE: take,
                    SKIP: skip,
                    SERVER_PAGINATION: true,
                };
                opts.parameters.IS_PAGING = JSON.stringify(paging);
            }
        }

        // Was filtering requested? by Adaptive Framework 

        let params = Object.keys(body)
            .filter((key) => fieldCatalog.some((obj) => obj.name === key))
            .reduce((acc, key) => {
                acc[key] = body[key];
                return acc;
            }, {});
        opts.parameters.IV_PARAMS = JSON.stringify(params);

        // Send API request
        let response = await apis.Search(opts);

        return {
            count: response.data.result.MS_PAGING.TOTALRECORDS,
            result: response.data.result[tableName],   
        }; // runData };
    } catch (error) {
        log.error("Error in Search: ", error);
        return fail("Error in Search: " + error);
    }
}

complete({ search });
