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

particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#111"
      },
      "size": {
        "value": 0,
        "random": true,
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#006",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "right",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
      },
      nb: 80
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "repulse": {
          "distance": 200,
          "duration": 0.4
        }
      }
    },
    "retina_detect": true
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