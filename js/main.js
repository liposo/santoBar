$(document).ready(function () {

  var url = "https://script.google.com/macros/s/AKfycbzuDSlrYESk1j4keqr_KqB5bJkZeSR1VRs7wDqUNS-h-sPb-4Yc/exec?action=read";

  var labels = '<div class="row">' +
                  '<div class="col-sm-2"></div>' +
                  '<div class="col-sm-2"><strong>Estilo</strong></div>' +
                  '<div class="col-sm-1"><strong>Álcool</strong></div>' +
                  '<div class="col-sm-1"><strong>IBU</strong></div>' +
                  '<div class="col-sm-2"><strong>200mL</strong></div>' +
                  '<div class="col-sm-2"><strong>350mL</strong></div>' +
                  '<div class="col-sm-2"><strong>500mL</strong></div>' +
                '</div>' +
                '<hr/>';               

  $.getJSON(url, function (json) {
    var $container = $('.container');
    
    if($(window).width() < 768) {
      for (var i = 0; i < json.records.length; i++) {
          if(json.records[i].ID) {
          $container.append(
            '<div class="row">' +
              '<div class="col-xs-1 no-p-right"><strong><span class="pull-left"> ' + json.records[i].ID + '</span></strong></div>' +
              '<div class="col-xs-11 nome">'+ json.records[i].nome +'</div>'+
            '</div>' +
          '<div class="row">' +
          '<hr />' +
              '<div class="col-xs-4 ">'+
                '<div class="ratio imgscr" style="background-image:url(' + json.records[i].imgsrc + ')"></div>'+
              '</div>'+
              '<div class="col-xs-8">'+
                '<div class="row">'+
                  '<div class="col-xs-6 p-t-b-5">Estilo:</div>'+
                  '<div class="col-xs-6 p-t-b-5 estilo">' + json.records[i].estilo + '</div>'+
                '</div>'+
                '<hr />'+
                '<div class="row">'+
                  '<div class="col-xs-6 p-t-b-5">Álcool</div>'+
                  '<div class="col-xs-6 p-t-b-5 ">IBU</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="col-xs-6 p-t-b-5 teor">' + json.records[i].teor + '</div>'+
                  '<div class="col-xs-6 p-t-b-5 ibu">' + json.records[i].ibu + '</div>'+
                '</div>'+
                '<hr />'+
                '<div class="row">'+
                  '<div class="col-xs-4 p-t-b-5">200mL</div>'+
                  '<div class="col-xs-4 p-t-b-5">350mL</div>'+
                  '<div class="col-xs-4 p-t-b-5">500mL</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="col-xs-4 no-p-side p-b-5 200ml">R$ ' + parseFloat(json.records[i].val200).toFixed(2) + '</div>'+
                  '<div class="col-xs-4 no-p-side p-b-5 350ml">R$ ' + parseFloat(json.records[i].val350).toFixed(2) + '</div>'+
                  '<div class="col-xs-4 no-p-side p-b-5 500ml">R$ ' + parseFloat(json.records[i].val500).toFixed(2) + '</div>'+
                '</div>'+
          '</div>'+
          '<hr />'+
          '<div class="row">'+
              '<div class="col-xs-12 p-t-b-5 p-side desc">' + json.records[i].desc + '</div>'+
          '</div>'+
          '<hr />'
          );
        }
      }
    } else {
      $container.append(labels);
      for (var i = 0; i < json.records.length; i++) {
        if(json.records[i].ID) {
          $container.append(
            '<div class="row">' +
              '<div class="col-sm-2 nome">' + 
                '<strong><span class="pull-left"> ' + json.records[i].ID + '</span></strong>' + 
                '&nbsp;' + json.records[i].nome + 
              '</div>' +
              '<div class="col-sm-2 estilo">' + json.records[i].estilo + '</div>' +
              '<div class="col-sm-1 teor">' + json.records[i].teor + '</div>' +
              '<div class="col-sm-1 ibu">' + json.records[i].ibu + '</div>' +
              '<div class="col-sm-2 200ml">R$ ' + parseFloat(json.records[i].val200).toFixed(2) + '</div>' +
              '<div class="col-sm-2 350ml">R$ ' + parseFloat(json.records[i].val350).toFixed(2) + '</div>' +
              '<div class="col-sm-2 500ml">R$ ' + parseFloat(json.records[i].val500).toFixed(2) + '</div>' +
            '</div>' +
            '<hr/>' +
            '<div class="row">' + 
              '<div class="col-sm-2 imgscr"><img src="' + json.records[i].imgsrc + '" height="120" width="120"></div>' +
              '<div class="col-sm-10 desc">' + json.records[i].desc + '</div>' +
            '</div>' +
            '<hr/>'
          );
        }  
      }
  }
  });
});

