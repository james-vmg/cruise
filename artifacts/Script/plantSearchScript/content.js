/*
  plant CRUISE: Search Script

  This script fetches plant information from the CRUISE Rest APIs
  It is called for both the list and edit viewing, which in turn will call different APIs
  
*/

try {
    // What has been passed in the request by Adaptive Framework? TO-DO for debug testing
    //log.warn(JSON.stringify(req.body));

    // Prepare the REST call for fetching equipment with mandatory parameter
    const opts = {
        parameters: {
            "sap-client": "800",
        },
    };

    // Was an equipment passed in via the req object? This indicates a read
    if (req.body.PLANT) {
        opts.parameters.IV_PLANT = req.body.PLANT;

        try {
            // Send api request.
            const read_response = await apis.Read(opts);
            console.log(read_response.data);
            const plant = read_response.data.result.MS_PLANT;
            const runData = {
                PLANT: plant.PLANT,
                PLANTNAME: equipment.PLANTNAME,
                EQUIPMENTCATEGORY: equipment.EQUIPMENTCATEGORY,
            };

            result.data = runData;
            complete();
        } catch (error) {
            log.error("Error in request: ", error);
            return fail();
        }

        const read_response = await apis.Read(opts);
    }

    // Was sorting requested? by Adaptive Framework e.g.  "_order": { "EQUIPMENT": "DESC" }
    if (req.body._order) {
        const sortField = Object.keys(req.body._order)[0];
        let sortDirection = req.body._order[sortField].toUpperCase();

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
    if (req.body._pagination) {
        const { take, skip } = req.body._pagination;

        if (typeof take === "number" && typeof skip === "number") {
            let paging = {
                TAKE: take,
                SKIP: skip,
            };
            opts.parameters.IS_PAGING = JSON.stringify(paging);
        }
    }

    // Send API request
    //log.warn(JSON.stringify(opts));

    const response = await apis.Search(opts);

    const runData = response.data.result.MT_EQUIPMENT.map((equipment) => ({
        EQUIPMENT: equipment.EQUIPMENT,
        DESCRIPTION: equipment.DESCRIPTION,
        EQUIPMENTCATEGORY: equipment.EQUIPMENTCATEGORY,
        TECHNICALOBJECTTYPE: equipment.TECHNICALOBJECTTYPE,
        PLANT: equipment.PLANT,
        DIVISION: equipment.DIVISION,
        STORAGELOCATION: equipment.STORAGELOCATION,
        CREATEDBYUSER: equipment.CREATEDBYUSER,
        LASTCHANGEDBYUSER: equipment.LASTCHANGEDBYUSER,
        CREATIONDATE: equipment.CREATIONDATE,
        LASTCHANGEDATE: equipment.LASTCHANGEDATE,
        ASSETMANUFACTURERNAME: equipment.ASSETMANUFACTURERNAME,
        MANUFACTURERPARTTYPENAME: equipment.MANUFACTURERPARTTYPENAME,
        MANUFACTURERCOUNTRY: equipment.MANUFACTURERCOUNTRY,
        CONSTRUCTIONYEAR: equipment.CONSTRUCTIONYEAR,
        CONSTRUCTIONMONTH: equipment.CONSTRUCTIONMONTH,
        ACQUISITIONDATE: equipment.ACQUISITIONDATE,
        CURRENCY: equipment.CURRENCY,
        ACQUISITIONVALUE: equipment.ACQUISITIONVALUE,
        MAINTOBJECTINTERNALID: equipment.MAINTOBJECTINTERNALID,
        SERIALNUMBER: equipment.SERIALNUMBER,
        EQUIPUSAGEPERIODSEQUENCENUMBER: equipment.EQUIPUSAGEPERIODSEQUENCENUMBER,
        MATERIAL: equipment.MATERIAL,
        CUSTOMER: equipment.CUSTOMER,
        AUTHORIZATIONGROUP: equipment.AUTHORIZATIONGROUP,
        MANUFACTURERSERIALNUMBER: equipment.MANUFACTURERSERIALNUMBER,
        UNIQUEITEMIDENTIFIER: equipment.UNIQUEITEMIDENTIFIER,
        UNIQUEITEMIDENTIFIERSTRUCTYPE: equipment.UNIQUEITEMIDENTIFIERSTRUCTYPE,
        UNIQUEITEMIDENTIFIERRESPPLANT: equipment.UNIQUEITEMIDENTIFIERRESPPLANT,
        ASSETSYNCHRONIZATIONRULE: equipment.ASSETSYNCHRONIZATIONRULE,
        INVENTORYNUMBER: equipment.INVENTORYNUMBER,
        GROSSWEIGHT: equipment.GROSSWEIGHT,
        GROSSWEIGHTUNIT: equipment.GROSSWEIGHTUNIT,
        SIZEORDIMENSIONTEXT: equipment.SIZEORDIMENSIONTEXT,
        BATCH: equipment.BATCH,
        OPERATIONSTARTDATE: equipment.OPERATIONSTARTDATE,
        SUPPLIER: equipment.SUPPLIER,
        HASEQUIPMENTDATA: equipment.HASEQUIPMENTDATA,
        MASTERWARRANTY: equipment.MASTERWARRANTY,
    }));

    //  result.data = runData;
    result.data = { count: response.data.result.MS_PAGING.TOTALRECORDS, result: runData };
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
