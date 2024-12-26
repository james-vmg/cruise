let transports = xhr.responseJSON.result.MT_TRANSPORTS;
 modelTreeTableTransports.setData({
         "children": _convertFlatToNested(transports, "TRKORR", "STRKORR")
     });