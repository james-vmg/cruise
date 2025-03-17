BusyDialogUpdating.close();
if (xhr.responseJSON.result.MV_ERROR) {
    errorHandling(xhr.responseJSON.result.MT_MESSAGES, buttonSave);
    return;
}

sap.m.MessageToast.show(txtTranslateUpdateSuccess.getText());
fireEquipmentSearch();
App.back();
