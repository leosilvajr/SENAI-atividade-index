//efeito de esconder formulário de cadastro
$(document).ready(function(){
    
    //Sem o jquery
    //document.getElementById("botao-cadastrar").click() 
    
    //Com jquery
    $("#botao-cadastrar").click( function (){

        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();
    }); 
});