BusyDialogCreating.close();
BusyDialogUpdating.close();
if (xhr.responseJSON.result.MV_ERROR){
    errorHandling(xhr.responseJSON.result.MT_MESSAGES,buttonSaveCreate);
    return;
}
sap.m.MessageToast.show(txtTranslateCreateSuccess.getText());
fireEquipmentSearch();
splitApp.toDetail(pageEquipmentDetail);
