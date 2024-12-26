
const selectedItem = oEvent.getParameter("selectedItem");
const context = selectedItem.getBindingContext();
const plantData = context.getObject();


sap.ZVMG.plant.plantInput.setValue(plantData.PLANT);
sap.ZVMG.plant.plantInput.setDescription(plantData.PLANTNAME);
