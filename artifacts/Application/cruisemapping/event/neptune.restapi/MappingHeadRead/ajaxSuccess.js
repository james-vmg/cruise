BusyDialogReading.close();

let rowData = modelpageMappingHeadDetail.oData.result.MT_MAPPING_D; 

// Single Field Sort
rowData.sort((a,b) => Number(a.PRIORITY) - Number(b.PRIORITY));

modelTableMapDetailsChange.setData(rowData);
var oSorter = new sap.ui.model.Sorter("PRIORITY", false, false);
var binding = TableMapDetailsChange.getBinding("items");
binding.sort(oSorter);



SplitApp.toDetail(pageMappingHeadDetail);

