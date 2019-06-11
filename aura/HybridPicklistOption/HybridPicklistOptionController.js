({
    selectRecord : function(component, event, helper) {
        // get the selected record from list  
        var getSelectValue = component.get("v.value");
        // call the event   
        var compEvent = component.getEvent("selectOptionEvent");
        // set the Selected sObject Record to the event attribute.  
        compEvent.setParams({"selectedOption" : getSelectValue });  
        // fire the event  
        compEvent.fire();
    },
    
})