let transports = xhr.responseJSON.result.MT_TRANSPORTS;
 modelTreeTableTransports.setData({
         "children": neptune.Utils.convertFlatToNested(transports, "TRKORR", "STRKORR")
     });