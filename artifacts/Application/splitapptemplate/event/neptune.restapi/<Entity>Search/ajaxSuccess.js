BusyDialogSearching.close();
let paging = xhr.responseJSON.result.MS_PAGING;

modelpage<Entity>List.setData(paging);
splitApp.toMaster(page<Entity>List);