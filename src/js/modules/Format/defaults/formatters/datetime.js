export default function(cell, formatterParams, onRendered){
	var DT = window.DateTime || luxon.DateTime;
	var inputFormat = formatterParams.inputFormat || undefined
	var	outputFormat = formatterParams.outputFormat || "dd/MM/yyyy HH:mm:ss";
	var	invalid = typeof formatterParams.invalidPlaceholder !== "undefined" ? formatterParams.invalidPlaceholder : "";
	var value = cell.getValue();

	if(typeof DT != "undefined"){
		if (inputFormat == undefined){
			var newDatetime = (window.DateTime || luxon.DateTime).fromISO(value);
		}
		else {
			var newDatetime = (window.DateTime || luxon.DateTime).fromFormat(value, inputFormat);
		}
		

		if(newDatetime.isValid){

			if(formatterParams.timezone){
				newDatetime = newDatetime.shiftTimezone(formatterParams.timezone);
			}

			return newDatetime.toFormat(outputFormat);
		}else{

			if(invalid === true){
				return value;
			}else if(typeof invalid === "function"){
				return invalid(value);
			}else{
				return invalid;
			}
		}
	}else{
		console.error("Format Error - 'datetime' formatter is dependant on luxon.js");
	}
};