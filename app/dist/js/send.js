var request;
var arrLangs = [];

$(document).on("click", "#addLang", function(){
    //pegar o idioma no select
    let langAdd = $("#selectLang").val();
    //testar se foi selecionado um valor válido
    if(langAdd == "Selecione..."){
        alert("Favor selecione um idioma.")
        return 0
    }
    //retirar ele das opções do select
    $('#selectLang option[value="'+ langAdd +'"]').remove();
    //adicionar div com o form do idioma
    var divLang = '<div><hr class="my-4"><h4 class="mb-3">'+getLang(langAdd)+'</h4><div class="form-floating"><textarea class="form-control" placeholder="Digite a Pergunta" id="pergunta-'+langAdd+'"></textarea><label for="pergunta-'+langAdd+'">Pergunta</label></div><br /><div class="form-floating"><textarea class="form-control" placeholder="Digite a Resposta da Pergunta" id="resposta-'+langAdd+'"></textarea><label for="resposta-'+langAdd+'">Resposta</label></div><br><a class="btn btn-primary" href="#" role="button" id="btn-'+langAdd+'">Salvar</a> </div>'
    $("#arrLangs").append(divLang);
    console.log('adicionando novo idioma '+ langAdd)
});

$(document).on("click", "#btn-en", function(){
    //desabilitar button e inputs
    let objQ = {
        text: $("#pergunta-en").val(),
        answer: $("#resposta-en").val(),
        language: "en"
    };
    $("#pergunta-en").attr("disabled","disabled");
    $("#resposta-en").attr("disabled","disabled");
    $("#btn-en").addClass("disabled");
    $("#btn-en").attr("aria-disabled","true");
    //salvar no array as informações
    arrLangs.push(objQ);
    //mostrar as info no resumo
    addInfos(objQ);
});
$(document).on("click", "#btn-pt", function(){
    //desabilitar button e inputs
    let objQ = {
        text: $("#pergunta-pt").val(),
        answer: $("#resposta-pt").val(),
        language: "pt"
    };
    $("#pergunta-pt").attr("disabled","disabled");
    $("#resposta-pt").attr("disabled","disabled");
    $("#btn-pt").addClass("disabled");
    $("#btn-pt").attr("aria-disabled","true");
    //salvar no array as informações
    arrLangs.push(objQ);
    //mostrar as info no resumo
    addInfos(objQ);
});
$(document).on("click", "#btn-pt-br", function(){
    //desabilitar button e inputs
    let objQ = {
        text: $("#pergunta-pt-br").val(),
        answer: $("#resposta-pt-br").val(),
        language: "pt-br"
    };
    $("#pergunta-pt-br").attr("disabled","disabled");
    $("#resposta-pt-br").attr("disabled","disabled");
    $("#btn-pt-br").addClass("disabled");
    $("#btn-pt-br").attr("aria-disabled","true");
    //salvar no array as informações
    arrLangs.push(objQ);
    //mostrar as info no resumo
    addInfos(objQ);
});

$(document).on("click", "#sentQuestions", function(){
    var formData = {
        difficulty: $("#selectDifficulty").val(),
    };
    request = $.ajax({
        type: "POST",
        url: "/app/api/ask/",
        ///ask/:uuid/addQuest
        ///ask,
        data: formData,
        dataType: "json",
        encode: true,
    });
    request.done(function (response, textStatus, jqXHR){
        console.log(response)
        //pegar o uuid da ask para inserir as quest
        var uuid = response.uuid;
        //percorrer o array e fazer o envio das quest
        arrLangs.forEach(quest=>{
            request = $.ajax({
                type: "POST",
                url: "/app/api/ask/"+uuid+"/addQuest",
                data: quest,
                dataType: "json",
                encode: true,
            });
            request.done(function (response2, textStatus2, jqXHR2){
                console.log(response2)
            });
        })
    });
    console.log(arrLangs)
});

function addInfos(obj){
    let listador = '<li class="list-group-item d-flex justify-content-between lh-sm"><div><h6 class="my-0">'+obj.language+'</h6><small class="text-muted">'+obj.text+'</small></div><span class="text-muted">Remover</span></li>';
    $("#listLang").append(listador);
    //atualizar o numero de langs
    $("#numberLang").text(arrLangs.length);
    if(arrLangs.length>0){
        $("#sentQuestions").removeAttr("disabled");
        $("#sentQuestions").attr("aria-disabled","false");
    }
}

function getLang(lang){
    if(lang == "en"){
        return "English"
    }
    if(lang == "pt"){
        return "Português Portugal"
    }
    return "Português Brasil"
}