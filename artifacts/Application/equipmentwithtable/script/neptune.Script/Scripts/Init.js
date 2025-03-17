// Custom Init - Happens only once when mounting the component
sap.ui.getCore().attachInit(function (startParams) {
   modelpageEquipmentList.setData({SKIP:0, TAKE:100, SERVER_PAGINATION: false});
});
