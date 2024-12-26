BusyDialogDeleting.close();
BusyDialogUpdating.close();
if (xhr.responseJSON.result.MV_ERROR){
    errorHandling(xhr.responseJSON.result.MT_MESSAGES,buttonDelete);
    return;
}
sap.m.MessageToast.show(txtTranslateDeleteSuccess.getText());
firePurchaseOrderSearch();
splitApp.backDetailToPage(pageStart);