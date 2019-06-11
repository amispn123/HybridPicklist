({
	filterHelper : function(component, event, inputKeyword) {
		var allOptions = component.get("v.AllOptions");
        var availaleOption = [];
        console.log('====='+allOptions.length);
        if(allOptions.length == 0){
            console.log('-----');
            allOptions = component.get("v.Options");
            component.set("v.AllOptions", allOptions);
        }
        console.log(inputKeyword+'===component=='+allOptions);
        if(inputKeyword != null || inputKeyword != ''){
            console.log('--in if---');
            var upepercaseKeywrd = inputKeyword.toUpperCase();
            console.log('--upepercaseKeywrd--');
            allOptions.forEach(function(item){
               	var uippercaseValue =  item.value.toUpperCase();
                var uippercaseLabel =  item.label.toUpperCase();
                if((uippercaseValue.indexOf(upepercaseKeywrd) != -1) ||  (uippercaseLabel.indexOf(upepercaseKeywrd) != -1)){
                    console.log('--in if 2--'+item);
                    availaleOption.push(item);
                }
            });
        }else{
            availaleOption = allOptions;
        }
         console.log('--final--'+availaleOption);
        $A.util.removeClass(component.find("mySpinner"), "slds-show");
        component.set("v.Options", availaleOption);
	}
})