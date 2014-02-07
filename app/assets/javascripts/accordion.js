function minimize(index, element){
  element.classList.add('minimized');
  $(element.getAttribute('href')).each(function(i, e){ e.classList.add('collapse'); });
  $(element.getAttribute('href') + '-alt').each(function(i, e){ e.classList.remove('collapse'); });
}
function maximize(element){
  element.classList.remove('minimized');
  $(element.getAttribute('href')).each(function(i, e){ e.classList.remove('collapse'); });
  $(element.getAttribute('href') + '-alt').each(function(i, e){ e.classList.add('collapse'); });
}

function btnClick(event){
  var previouslyMinimized = event.target.classList.contains('minimized');
  $('[data-parent=' + event.target.getAttribute('data-parent') + ']').each(minimize);

  //toggleClass('minimized', true);
  if(previouslyMinimized){
    //event.target.classList.remove('minimized');
    maximize(event.target);
  }
}

$(function(){
  var panels = $('[data-toggle="minimize"]');

  panels.each(function(index, panel){
    panel.onclick = function(event){

      var previouslyMinimized = panel.classList.contains('minimized');
      if(previouslyMinimized || event.target.classList.contains('btn'))
      {
        $('[data-parent=' + panel.getAttribute('data-parent') + ']').each(minimize);

        if(previouslyMinimized){
          maximize(panel);
        }
      }
    };
  });
});
