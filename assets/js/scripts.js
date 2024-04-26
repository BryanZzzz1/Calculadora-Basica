$(document).ready(function(){

    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;

    const regex = /^\d+$/;

    $("#btnsumar").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();
        if(numero1 === ""){
            $("#error1").text("Ingrese un número adecuado");
            $("#error1").css("color","red");
            return;
        }
        if(!regex.test(numero1)){
            $("#error1").text("Error: ingrese un número adecuado");
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();
        if(numero2 === ""){
            $("#error2").text("Ingrese un número adecuado");
            $("#error2").css("color","red");
            return;
        }
        if(!regex.test(numero2)){
            $("#error2").text("Error: ingrese un número adecuado");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) + parseInt(numero2);
        $("#resultado").text(resultado);
        $("#resultado").css("color","blue");
        $("#resultado").css("font-size","2rem");

    });
    $("#btnrestar").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();
        if(numero1 === ""){
            $("#error1").text("Ingrese un número adecuado");
            $("#error1").css("color","red");
            return;
        }
        if(!regex.test(numero1)){
            $("#error1").text("Error: ingrese un número adecuado");
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();
        if(numero2 === ""){
            $("#error2").text("Ingrese un número adecuado");
            $("#error2").css("color","red");
            return;
        }
        if(!regex.test(numero2)){
            $("#error2").text("Error: ingrese un número adecuado");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) - parseInt(numero2);
        $("#resultado").text(resultado);
        $("#resultado").css("color","blue");
        $("#resultado").css("font-size","2rem");

    });
    $("#btndividir").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();
        if(numero1 === ""){
            $("#error1").text("Ingrese un número adecuado");
            $("#error1").css("color","red");
            return;
        }
        if(!regex.test(numero1)){
            $("#error1").text("Error: ingrese un número adecuado");
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();
        if(numero2 === ""){
            $("#error2").text("Ingrese un número adecuado");
            $("#error2").css("color","red");
            return;
        }
        if(!regex.test(numero2)){
            $("#error2").text("Error: ingrese un número adecuado");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) / parseInt(numero2);
        $("#resultado").text(resultado);
        $("#resultado").css("color","blue");
        $("#resultado").css("font-size","2rem");
        
    });
    $("#btnmulti").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();
        if(numero1 === ""){
            $("#error1").text("Ingrese un número adecuado");
            $("#error1").css("color","red");
            return;
        }
        if(!regex.test(numero1)){
            $("#error1").text("Error: ingrese un número adecuado");
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();
        if(numero2 === ""){
            $("#error2").text("Ingrese un número adecuado");
            $("#error2").css("color","red");
            return;
        }
        if(!regex.test(numero2)){
            $("#error2").text("Error: ingrese un número adecuado");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) * parseInt(numero2);
        $("#resultado").text(resultado);
        $("#resultado").css("color","blue");
        $("#resultado").css("font-size","2rem");   
    });
    $("#btnreset").click(function(){ 
        numero1 = $("#numero1").reset(); 
        numero2 = $("#numero2").reset();
        
    });

});
