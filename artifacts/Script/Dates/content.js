async function JSToSAPDate(ijsDate) {
    let jsDate = new Date(ijsDate);
    try {
        if (!(jsDate instanceof Date) || isNaN(jsDate)) {
            throw new Error("Invalid Date object");
        }

        const year = jsDate.getFullYear();
        const month = String(jsDate.getMonth() + 1).padStart(2, '0');
        const day = String(jsDate.getDate()).padStart(2, '0');
        
        return `${year}${month}${day}`;
    } catch (error) {
        console.error("Error converting date:", error.message);
        return null;
    }
}
async function SAPToJSDate(sapDate) {
    try {
        // Validate the input format
        if (typeof sapDate !== 'string' || !/^\d{8}$/.test(sapDate)) {
            throw new Error("Invalid SAP date format. Expected YYYYMMDD.");
        }

        const year = parseInt(sapDate.substring(0, 4), 10);
        const month = parseInt(sapDate.substring(4, 6), 10) - 1; // Month is zero-indexed in JS
        const day = parseInt(sapDate.substring(6, 8), 10);
        
        const date = new Date(year, month, day);

        if (isNaN(date.getTime())) {
            throw new Error("Invalid date values derived from SAP date string.");
        }

        return date;
    } catch (error) {
        console.error("Error converting SAP date:", error.message);
        return null;
    }
}

complete({ JSToSAPDate, SAPToJSDate});

