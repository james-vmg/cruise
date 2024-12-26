let fieldCatalog = [];

// Function to add a field to the catalog
function addField(name, label, type) {
    fieldCatalog.push({ name: name, label: label, type: type });
}

// Helper function to determine if a field should be a date type
function isDateField(name) {
    return ['CREATIONDATE', 'LASTCHANGEDATE', 'ACQUISITIONDATE', 'OPERATIONSTARTDATE'].includes(name);
}

// Adding fields based on the ABAP types, but using only 'text' or 'date' types
[
    { name: "PLANT", label: "Plant" },
    { name: "PLANTNAME", label: "Name" },
    { name: "VALUATIONAREA", label: "Valuation Area" },
    { name: "FACTORYCALENDAR", label: "Factory Calendar"},
    { name: "ISMARKEDFORARCHIVING", label: "Marked for Archiving"}
].forEach(field => {
    addField(field.name, field.label, isDateField(field.name) ? 'date' : 'text');
});

// Set the result and complete the script
result.data = fieldCatalog;
complete();