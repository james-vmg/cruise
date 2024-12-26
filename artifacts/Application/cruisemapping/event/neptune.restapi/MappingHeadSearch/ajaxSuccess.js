BusyDialogSearching.close();
SplitApp.toMaster(pageMappingHeadList);
let mappingHeaders = modelMultiModelMappingHead.oData.result.MT_MAPPING_H;
if (mappingHeaders.length === 1) {
    listMappingHead.getItems()[0].firePress();
}