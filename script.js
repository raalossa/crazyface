


console.log("Poker Face");



function showForHead () {
var forhead = document.getElementById("forhead").value;
var imageContf = document.getElementById("imageContf");
//var imagenMostFr = document.getElementById.innerHTML("imagenMostFr");

switch (forhead){

    case "1":
        imagenMostFr.src=("images/fr1.jpg");
        console.log("foto 1 seleccionada");
        break;

    case "2":
        imagenMostFr.src=("images/fr2.jpg");
        console.log("foto 2 seleccionada");
        break;

    case "3":
        imagenMostFr.src=("images/fr3.jpg");
        console.log("foto 3 seleccionada");
        break;

    case "4":
        imagenMostFr.src=("images/fr4.jpg");
        console.log("foto 2 seleccionada");
        break;

    case "5":
        imagenMostFr.src=("images/fr5.jpg");
        console.log("foto 3 seleccionada");
        break;

        default:
        imagenMostFr.src("");
        console.log("no carga imagen");
}

if(forhead ==="1" || forhead ==="2" || forhead ==="3" || forhead ==="4" || forhead ==="5"){
imageContf.style.display = "block";
} else {
    imageCont.style.display = "none";
}

}
console.log("Prueba desde js");
document.getElementById("imagenMostFr").innerHTML =imagenMostFr;



function showEyes () {
    var eyes = document.getElementById("eyes").value;
    var imageConte = document.getElementById("imageConte");
    //var imagenMostFr = document.getElementById.innerHTML("imagenMostFr");
    
    switch (eyes){
    
        case "1":
            imagenMostEy.src=("images/oj1.jpg");
            console.log("foto 1 seleccionada");
            break;
    
        case "2":
            imagenMostEy.src=("images/oj2.jpg");
            console.log("foto 2 seleccionada");
            break;
    
        case "3":
            imagenMostEy.src=("images/oj3.jpg");
            console.log("foto 3 seleccionada");
            break;
    
        case "4":
            imagenMostEy.src=("images/oj4.jpg");
            console.log("foto 2 seleccionada");
            break;
    
        case "5":
            imagenMostEy.src=("images/oj5.jpg");
            console.log("foto 3 seleccionada");
            break;
    
            default:
            imagenMostEy.src("");
            console.log("no carga imagen");
    }
    
    if(eyes ==="1" || eyes ==="2" || eyes ==="3" || eyes ==="4" || eyes ==="5"){
    imageConte.style.display = "block";
    } else {
        imageConte.style.display = "none";
    }
    
    }
    console.log("Prueba desde js Eye");
    document.getElementById("imagenMostEy").innerHTML =imagenMostEy;




    function showMouth () {
        var mouth = document.getElementById("mout").value;
        var imageContm = document.getElementById("imageConte");
        //var imagenMostFr = document.getElementById.innerHTML("imagenMostFr");
        
        switch (mouth){
        
            case "1":
                imagenMostMo.src=("images/bo1.jpg");
                console.log("foto 1 seleccionada");
                break;
        
            case "2":
                imagenMostMo.src=("images/bo2.jpg");
                console.log("foto 2 seleccionada");
                break;
        
            case "3":
                imagenMostMo.src=("images/bo3.jpg");
                console.log("foto 3 seleccionada");
                break;
        
            case "4":
                imagenMostMo.src=("images/bo4.jpg");
                console.log("foto 2 seleccionada");
                break;
        
            case "5":
                imagenMostMo.src=("images/bo5.jpg");
                console.log("foto 3 seleccionada");
                break;
        
                default:
                imagenMostMo.src("");
                console.log("no carga imagen");
        }
        
        if(mouth ==="1" || mouth ==="2" || mouth ==="3" || mouth ==="4" || mouth ==="5"){
        imageContm.style.display = "block";
        } else {
            imageContm.style.display = "none";
        }
        
        }
        console.log("Prueba desde js Eye");
        document.getElementById("imagenMostMo").innerHTML =imagenMostMo;
