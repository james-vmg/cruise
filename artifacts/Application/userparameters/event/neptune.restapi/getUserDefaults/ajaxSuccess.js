modelSimpleFormDefaults.setData(xhr.responseJSON.result.MS_DEFAULTS);
modelSimpleFormDefaults.oData.TZONE = xhr.responseJSON.result.MS_LOGONDATA.TZONE;
modelSimpleFormDefaults.refresh();
