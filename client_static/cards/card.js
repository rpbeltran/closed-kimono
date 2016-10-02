/**
 * Created by ryanbeltran on 10/1/16.
 */


function buildCardReveal ( message, passwords ) {

    var ret = '<div style = " padding: 10px 0px; text-align:center;">' +
              '    <p>' + message + '</p>';

    for (var i = 0; i < passwords; i++) {

        i = (i==0) ? "" : (i+1).toString();

        ret +='   <div style = "text-align:left;">'+
              '       <div class="input-field col s12" >' +
              '           <input id="password" type="password" class="validate">' +
              '           <label for="password">Password ' + i + '</label>' +
              '       </div>'
              '   </div>';
    }

    ret   +=  '   <a class="waves-effect waves-light btn" style = "margin: 0 auto;">Authenticate</a> ' +
              '</div>'

    return ret;

}

function buildCard ( card_class, card_name, image_url, link_description, reveal_text, passwords ) {
    return  '<div class="col s2">' +
            '   <div class="card' + card_class + '">' +
            '       <div class="card-image waves-effect waves-block waves-light activator">' +
            '           <img class="activator" style = "padding:15%;" src="' + image_url +'">' +
            '       </div>' +
            '       <div class="card-content">' +
            '           <span class="card-title activator grey-text text-darken-4">' + card_name + '<i class="material-icons right">more_vert</i></span>' +
            '           <p> ' + link_description + '</p>' +
            '       </div>' +
            '       <div class="card-reveal">' +
            '           <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>' +
                         buildCardReveal(reveal_text, passwords) +
            '       </div>' +
            '   </div>' +
            '</div>';
}

function backCard ( ) {
    return buildCard (  )
}

function jsonCard ( json ) {

    return buildCard( "dataCard", json.name, "images/locked.svg", "A folder or a file", " Authentication Required", 2 );

}
