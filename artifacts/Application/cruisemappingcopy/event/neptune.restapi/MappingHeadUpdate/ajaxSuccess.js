BusyDialogUpdating.close();
if (xhr.responseJSON.result.MV_ERROR){
    errorHandling(xhr.responseJSON.result.MT_MESSAGES,buttonSave);
    return;
}

sap.m.MessageToast.show(txtTranslateUpdateSuccess.getText());
fireMappingHeadRead(modelpageMappingHeadDetail.oData.result.MS_MAPPING_H);

let mappingHead = modelpageMappingHeadDetail.oData.result.MS_MAPPING_H
fireStatusGet(mappingHead);