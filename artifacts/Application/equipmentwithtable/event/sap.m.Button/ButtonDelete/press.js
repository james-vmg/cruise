let Yes = txtTranslateYes.getText(),
    Cancel = txtTranslateCancel.getText();
BusyDialogDeleting.open();
jQuery.sap.require("sap.m.MessageBox");
sap.m.MessageBox.confirm(txtTranslateDeleteConfirm.getText(), {
    actions: [Yes, Cancel],
    onClose: function (sAction) {
        if (sAction === Yes) {
            let equipment = modelpageEquipmentDetailChange.oData;
            var options = {
                parameters: {
                    //  "sap-client": sap.n.CRUISE.globalVariables.sapclient || "800", // Required
                    "sap-client": "800", // Required
                    IV_PARAMS: JSON.stringify(equipment.result.MS_EQUIPMENT),
                },
            };

            apiequipmentDelete(options);
        } else {
            return;
        }
    },
});
