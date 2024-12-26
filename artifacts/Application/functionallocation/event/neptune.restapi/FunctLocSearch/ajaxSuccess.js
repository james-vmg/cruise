BusyDialogSearching.close();
let FunctLocs = xhr.responseJSON.result.MT_FUNCTIONALLOCATION;
let treeData = _convertFlatToNested(FunctLocs, "FUNCTIONALLOCATION","SUPERIORFUNCTIONALLOCATION");
modelTreeTableFunctLoc.setData({"children":treeData});