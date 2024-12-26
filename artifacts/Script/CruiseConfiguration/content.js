/* Cruise -  Global Script to Lookup Config Values */

const config = async function (VariableName, AdditionalKey) {
    const entity = await entities.globalvariables.findOne({
        VariableName: VariableName,
        AdditionalKey: AdditionalKey,
    });

    if (entity.VariableValue) {
        return entity.VariableValue;
    } else {
        console.warn("Cruise variable: " + VariableName + " not found");
        return;
    }
};

complete({ config });
