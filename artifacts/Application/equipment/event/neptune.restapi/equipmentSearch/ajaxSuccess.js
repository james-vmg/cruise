BusyDialogSearching.close();
let paging = xhr.responseJSON.result.MS_PAGING;

modelpageEquipmentList.setData(paging);
splitApp.toMaster(pageEquipmentList);