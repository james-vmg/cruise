const selectedItem = oEvent.getParameter("selectedItem");
const context = selectedItem.getBindingContext();
const plantData = context.getObject();

sap.CRUISE.plant.plantInput.setValue(plantData.PLANT);
sap.CRUISE.plant.plantInput.setDescription(plantData.PLANTNAME);