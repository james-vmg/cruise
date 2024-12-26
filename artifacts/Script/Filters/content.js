async function filterParams(body, fieldCatalog) {
    // The request Body will typically contain many sub-objects,
    // not all of which are objects within the main body.
    // So, we are removing any that are not part of the Meta-Data
    let referenceKeys = fieldCatalog.map((item) => item.name);

    let filtered = {};
    let type = "";

    for (let key of referenceKeys) {
        if (body.hasOwnProperty(key)) {
            type = fieldCatalog.find((item) => item.name === key).type;
            if (type === "date") {
                filtered[key] = await globals.Dates.JSToSAPDate(body[key]);
            } else if (body[key] === false) {
                filtered[key] = " ";
            } else if (body[key] === true) {
                filtered[key] = "X";
            } else {
                // Directly assign the value to filtered if it's not a date
                filtered[key] = body[key];
            }
        }
    }

    return filtered;
}
complete({ filterParams });
