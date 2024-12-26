var binding = TreeTransport.getBinding("rows");
var filter = new sap.ui.model.Filter("AS4TEXT", "Contains", this.getValue());
binding.filter([filter]);
TreeTransport.expandToLevel(99);
