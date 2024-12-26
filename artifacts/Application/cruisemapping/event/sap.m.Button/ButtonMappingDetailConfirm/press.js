let mappingDetail = modelDialogMappingDetail.oData;

ModelData.Update(TableMapDetailsChange, ["CRUISE_KEY", "CDSVIEW", "VIEWFIELD"], [mappingDetail.CRUISE_KEY, mappingDetail.CDSVIEW, mappingDetail.VIEWFIELD ], mappingDetail);


ModelData.Update(TableMapDetailsChange,mappingDetail);
modelTableMapDetailsChange.refresh();
DialogMappingDetail.close();