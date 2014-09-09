/**
 * Funciones Genericas
 * 
 */
jQuery(function($) {
    
    //pequeño script para manejar las cosas visibles por los diferentes Perfiles.
    $(".profile1Visible, .profile2Visible, .profile3Visible ").hide();
    $.each($(".userProfileIds"), function() {
        var value = $(this).html();
        $(".profile" + (value) + "Visible").show();
    });

    //instruccion para darle formato a los campos de moneda.
    //$(".currencyFormat").currency();
    
    //Funcion para borrar los mensajes de errores o notificaciones 
    //despues de unos segundos al cargar la pagina
    $('.timedFadeAway').slideDown("slow").delay(4000).slideUp('slow');
    $(".timedFadeAway").each(function(index) {
        var closetick = $('<button class="close closeTick" data-dismiss="alert" type="button">x</button>');
        $(this).find("li").append(closetick);
    });
    $('.timedFadeAway li').on('click', '.closeTick', function(){
       $(this).parent().parent().hide();
    });
    //Final de la funcion de los mensajes de error.
    
});

/* Funcion para agarrar los datos de un row con todo y nombres y colocarlo en un JSon */
function grabJsonFromRow(rowSelected, callback) {
    var table = rowSelected.closest("table");
    var arrayNombre = new Array();
    var arrayValor = new Array();

    table.find("thead tr th").each(function(index) {
        var div = $(this).find("div.DataTables_sort_wrapper").remove("span");
        arrayNombre[index] = div.text();
    });
    rowSelected.find("td").each(function(index) {
        arrayValor[index] = $(this).html();
    });

    var edited = "{";
    for (var i = 0; i < arrayNombre.length; i++) {
        edited += '"' + arrayNombre[i] + '":"' + arrayValor[i] + '",';
    }
    edited = edited.slice(0, -1);
    edited += "}";
    var json = JSON.parse(edited);

    var fn = window[callback];
    fn(json);
}



/* <<<<<<<<<<<<<<<<<<AJAX Options para combos>>>>>>>>>>>>>>>>>>>>>>*/
/**
 *  Funcion especial para Traer Combos del SalesAjaxAction.
 * @param {type} sourceSelectIdStr
 * @param {type} targetSelectIdStr
 * @param {type} methodAjax
 * @returns {undefined}
 */
function salesProfileAjaxCombo(sourceSelectIdStr, targetSelectIdStr, methodAjax) {
    var idSelected = $("#" + sourceSelectIdStr + " option:selected").val();
    var jsonObj = getAjaxCombo("Sales", targetSelectIdStr, methodAjax, idSelected);
}
function adminProfileAjaxCombo(sourceSelectIdStr, targetSelectIdStr, methodAjax) {
    var idSelected = $("#" + sourceSelectIdStr + " option:selected").val();
    var jsonObj = getAjaxCombo("Admin", targetSelectIdStr, methodAjax, idSelected);
}
function managerProfileAjaxCombo(sourceSelectIdStr, targetSelectIdStr, methodAjax) {
    var idSelected = $("#" + sourceSelectIdStr + " option:selected").val();
    var jsonObj = getAjaxCombo("Manager", targetSelectIdStr, methodAjax, idSelected);
}

function salesProfileAjaxComboDoubleParams(firstId, secondId, targetSelectIdStr, methodAjax) {
    var jsonObj = getAjaxComboDouble("Sales", targetSelectIdStr, methodAjax, firstId, secondId);
}


function getAjaxComboDouble(profile, idSelectStr, method, idStr, secondIdStr) {
    $.ajax({
        async: false,
        timeout: 10000,
        url: "../ajax/ajax" + profile + "_" + method + ".action",
        data: {id: idStr, id2: secondIdStr},
        method: "POST"
    }).done(function(json) {
        if ($.isEmptyObject(json.response.comboList)) {
            cleanAndFillEmptyErrorCombo(idSelectStr);
        } else {
            cleanAndFillCombo(idSelectStr, json);
        }
    }).fail(function() {
        cleanAndFillErrorCombo(idSelectStr);
    });
}

function getAjaxCombo(profile, idSelectStr, method, idStr) {
    $.ajax({
        async: false,
        timeout: 10000,
        url: "../ajax/ajax" + profile + "_" + method + ".action",
        data: {id: idStr},
        method: "POST"
    }).done(function(json) {
        if ($.isEmptyObject(json.response.comboList)) {
            cleanAndFillEmptyErrorCombo(idSelectStr);
        } else {
            cleanAndFillCombo(idSelectStr, json);
        }

    }).fail(function() {
        cleanAndFillErrorCombo(idSelectStr);
    });
}
function cleanAndFillEmptyErrorCombo(idSelectStr) {
    cleanSelectOptions(idSelectStr);
    var input = $("#" + idSelectStr);
    var option = $("<option />").val(0);
    option.html("No se encontraron Opciones");
    input.append(option);
}
function cleanAndFillErrorCombo(idSelectStr) {
    cleanSelectOptions(idSelectStr);
    var input = $("#" + idSelectStr);
    var option = $("<option />").val(0);
    option.html("ERROR");
    input.append(option);
}
function cleanSelectOptions(idSelectStr) {
    $("#" + idSelectStr).html("");
}

function fillSelectOptions(idSelectStr, json) {
    var selectInput = $("#" + idSelectStr);
    var options = json.response.comboList;
    for (var key in options) {
        var option = $("<option />").val(key);
        option.html(options[key]);
        selectInput.append(option);
    }
}

function cleanAndFillCombo(idSelectStr, json) {
    cleanSelectOptions(idSelectStr);
    fillSelectOptions(idSelectStr, json);
}

/* <<<<<<<<<<<<<<<<<<AJAX Options para combos>>>>>>>>>>>>>>>>>>>>>>*/      
