let messages = modelMMUpdateResponse.oData.result.MT_MESSAGES;
let error = messages.find((obj) => obj.TYPE === "E");

if (error) {
    sap.m.MessageToast.show(error.MESSAGE);
} else {
    sap.m.MessageToast.show(txtTranslateUpdateSuccess.getText());
}
