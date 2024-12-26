function convertBooleanFieldsToString(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (typeof obj[key] === 'boolean') {
                obj[key] = obj[key] ? "X" : " ";
            }
        }
    }
    return obj;
}
function formatDate(params) {
  if (typeof params.data == "undefined") { return }
  return params.value.substr(6, 2) + "-" + params.value.substr(4, 2) + "-" + params.value.substr(0, 4);
  //. }
}