var meny = Meny.create({
            menuElement: document.querySelector('.meny'),
            contentsElement: document.querySelector('.contents'),
            position: 'left',
            width: 260,
            angle: 60,
            threshold: 40,
            overlap: 6,
            transitionDuration: '1s',
            transitionEasing: 'ease',
            gradient: 'rgba(1,0,0,0.00) 0%, rgba(1,0,0,0.95) 100%)',
            mouse: true,
            touch: true
        });

$(".intro:first").children().hide().each(function(i){
  $(this).delay(i*2500).fadeIn(1000);
});

function time_travel(age) {
  document.getElementById("content").innerHTML='<object type="text/html" data="./timemachine/index' + age + '.html" width="100%" height="100%"></object>';
}

function present_times() {
  window.location.reload(false); 
}