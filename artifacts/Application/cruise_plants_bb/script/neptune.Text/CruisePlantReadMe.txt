# CRUISE: Plant Building Block
Include this Building Block in your app to have an offline ready SAP Plant Master data available in drop-downs.

Included is this building block is:
> Cruise API 
> Data Multimodel
> Two Sample UIs

## Requirements
This building block assumes you have installed the Cruise Plant model

## What does the building block provide?
When building UI5 apps and you need to choose a SAP plant, you can use this building block 
to have a value help on an sap.m.input field or sap.m.select field included.

## Process to use the building block
In your custom application right-click on the Resources node and select Building Block.
Select this building block, it will include a CruisePlant folder which contains all the code you need.

Next is to place either the sap.m.input or the sap.m.select sample into your app structure.
Note that the two SampleUIs are deactivated and need to be copied or activated. 
Follow the instructions below based on what you require in your App.


### Input Field implementation (sap.m.input)
In the valuHelpRequest event of your input, add the following code:

sap.CRUISE.plant.plantInput = this;
CruiseSelectDialogPlants.open();

### Select field implementation (sap.m.select)
Bind the Model Path of your Select to CruisePlants>/result/MT_PLANT, 
