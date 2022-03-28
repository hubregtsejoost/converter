function convertah(){
    ah=document.getElementById("Ah").value;
    ahContainsComma=ah.includes(",");
    ahContainsDot=ah.includes(".");
    if (ahContainsComma){
        ah=ah.replace(/,/g , ".");
    }
    volt=document.getElementById("volts").value;
    voltContainsComma=volt.includes(",");
    voltContainsDot=volt.includes(".");
    if (voltContainsComma){
        volt=volt.replace(/,/g , ".");
    }
    conv=ah*volt;
    conv=conv.toString();
    if ((ahContainsComma)||(voltContainsComma)){
        conv=conv.replace(/\./g , ",");
    }
    document.getElementById("watts").value=conv;
}