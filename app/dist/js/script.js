var request;
var langPadrao = 1;
var userLang;
$(document).ready(function () {
    if(langPadrao){
        userLang = (navigator.language || navigator.userLanguage).toLowerCase();
    }
    //carregar pergunta no idioma escolhido
    newQuest();
});
var btnValue = 0;
$(document).on("click", "#btnresposta", function(){
    btnValue = !btnValue;
    if(btnValue){
        //mostrar resposta
        $("#answer").show();
        $("#btnresposta").text("Próxima Pergunta")
    } else {
        //proxima pergunta
        newQuest();
    }
});

$(document).on("click", "#btnEN", function(){
    langPadrao = 0;
    userLang = "en";
    //carregar pergunta no idioma escolhido
    newQuest();
});
$(document).on("click", "#btnPTBR", function(){
    langPadrao = 0;
    userLang = "pt-br";
    //carregar pergunta no idioma escolhido
    newQuest();
});

function newQuest(){
    $("#quest").addClass("placeholder");
    request = $.ajax({
        type: "get",
        url: "/app/api/ask/random",
        dataType: "json"
    });
    request.done(function (response, textStatus, jqXHR){
        if(response){
            let quest = response.questions.find(function(pergunta){
                return pergunta.language === userLang
            });
            if(!quest){
                //se por algum acaso não tiver o idioma selecionado, busco por padrão o primeiro idioma inserido
                quest = response.questions[0];
                console.log('Pergunta sem idioma principal')
            }
            
            $("#quest").text(quest.text);
            $("#quest").removeClass("placeholder");
            $("#answer").hide();
            $("#answer").text("R. " + quest.answer);
            $("#btnresposta").text("Visualizar Resposta")
        } else {
            console.log('erro na req!')
        }
    });
}