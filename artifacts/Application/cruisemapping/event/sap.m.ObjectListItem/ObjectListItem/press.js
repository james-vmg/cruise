const context = oEvent.oSource.getBindingContext("MultiModelMappingHead");

const data = context.getObject();

fireMappingHeadRead(data);
fireStatusGet(data);