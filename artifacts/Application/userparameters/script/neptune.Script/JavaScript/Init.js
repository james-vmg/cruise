sap.ui.getCore().attachInit(function(startParams) {
    setTimeout(function() {

var options = {
    parameters: {
       "sap-client": "800", // Required 
        "IV_USER": "JAMES" // Required 
    }
};

apigetUserDefaults(options);      
    }, 200);

});