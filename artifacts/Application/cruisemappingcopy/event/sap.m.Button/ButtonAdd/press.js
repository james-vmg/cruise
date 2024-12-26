let cruiseKey = modelpageMappingHeadList.oData.CRUISE_KEY;
let msMappingH = {"CRUISE_KEY": cruiseKey};
let result = {"MS_MAPPING_H": msMappingH};
let oData = {"result": result};
modelpageMappingHeadDetailCreate.setData(oData);
SplitApp.toDetail(pageMappingHeadDetailCreate);

