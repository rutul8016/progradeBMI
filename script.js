function calculateBMI(){
    let weight = document.getElementById("inwt").value
    let height = document.getElementById("inht").value
    let val = 0;
    let cat = "";
    if(document.getElementById("sysm").checked == true){
        val = weight / (height * height);
    }
    else if(document.getElementById("sysi").checked == true){
        val = 703 * weight / (height * height);
    }
    else{
        alert("You must choose a unit system")
        return;
    }
    if(val<=18.4){
        cat = "Underweight"
    }
    else if(val<=24.9){
        cat = "Normal weight"
    }
    else if(val<=29.9){
        cat = "Overweight"
    }
    else if(val<=34.9){
        cat = "Obesity (Class 1)"
    }
    else if(val<=39.9){
        cat = "Obesity (Class 2)"
    }
    else{
        cat = "Obesity (Class 3)"
    }

    document.getElementById("val").value = val
    document.getElementById("cat").value = cat
}

function metricprompt(){
    document.getElementById("inwt").placeholder = "weight in kg"
        document.getElementById("inht").placeholder = "height in m"
}

function imperialprompt(){
    document.getElementById("inwt").placeholder = "weight in pounds"
        document.getElementById("inht").placeholder = "height in inches"
}
