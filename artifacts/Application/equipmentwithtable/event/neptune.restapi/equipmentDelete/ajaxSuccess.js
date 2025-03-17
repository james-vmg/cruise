BusyDialogDeleting.close();
if (xhr.responseJSON.result.MV_ERROR){
    errorHandling(xhr.responseJSON.result.MT_MESSAGES,buttonDelete);
    return;
}
sap.m.MessageToast.show(txtTranslateDeleteSuccess.getText());
fireEquipmentSearch();
App.backToPage(pageEquipmentList, "show");

