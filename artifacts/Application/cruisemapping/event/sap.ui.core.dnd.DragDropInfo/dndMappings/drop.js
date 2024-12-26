var oDraggedControl = oEvent.getParameter("draggedControl");
var oDroppedControl = oEvent.getParameter("droppedControl");
var oDraggedContext = oDraggedControl.getBindingContext();
var oDroppedContext = oDroppedControl.getBindingContext();

if (!oDraggedContext && !oDroppedContext) return;

var oDraggedData = oDraggedContext.getObject();
var oDroppedData = oDroppedContext.getObject();

var indexDrag = 0;
var indexDrop = 0;

$.each(modelTableMapDetailsChange.oData, function(i, data) {
    if (data.VIEWFIELD === oDraggedData.VIEWFIELD) indexDrag = i;
    if (data.VIEWFIELD === oDroppedData.VIEWFIELD) indexDrop = i;
});

arrayMove(modelTableMapDetailsChange.oData, indexDrag, indexDrop);

setPriorities(TableMapDetailsChange);

modelTableMapDetailsChange.refresh();
