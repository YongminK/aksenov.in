var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};

 function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', './js/university.json', false);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }


function init(){
    var json;
    loadJSON(function(response) {
        json = JSON.parse(response);
    });
    document.getElementById("infovis").innerHTML="";
    var st = new $jit.ST({
        injectInto: 'infovis',
        duration: 800,
        transition: $jit.Trans.Quart.easeInOut,
        levelDistance: 20,
        levelsToShow: 2,
        Navigation: {
          enable:false,
          panning:true
        },
        Node: {
            height: 20,
            width: 70,
            type: 'rectangle',
            color: '#aaa',
            overridable: true
        },
        
        Edge: {
            type: 'bezier',
            overridable: true
        },
        
        onBeforeCompute: function(node){
            Log.write("Загрузка " + node.name + "...");
        },
        
        onAfterCompute: function(){
            Log.write("Готово.");
        },

        onCreateLabel: function(label, node){
            label.id = node.id;        
            var style = label.style;
            if("url" in node.data)
                    {                        
                        style.cursor = 'pointer';
                        style.color = '#55f';
                    }
                    else
                    {                         
                        style.cursor = 'default';
                        style.color = '#111';
                        node.name += " >"
                    }
            label.innerHTML = node.name;
            label.onclick = function(){
            	// if(normal.checked) {                    
                    if("url" in node.data)
                    {
                        window.open(node.data.url, "_blank");
                    }
                    else
                    {
                         st.onClick(node.id);                         
                    }            	 
            	// } else {
             //    st.setRoot(node.id, 'animate');
            	// }
            };         
            style.width = 70 + 'px';
            style.height = 17 + 'px';
            if (label.innerHTML.length>9) {style.fontSize = '0.6em';} else {style.fontSize = '0.8em';}            
            style.textAlign= 'center';
            style.paddingTop = '2px';
        },

        onBeforePlotNode: function(node){
            if (node.selected) {
                node.data.$color = "#ff7";
            }
            else {
                delete node.data.$color;
                if("url" in node.data) {
                    node.data.$color ='#fff';
                }
                else node.data.$color ='#bbb';
            }
        },
        
        onBeforePlotLine: function(adj){
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                adj.data.$color = "#eed";
                adj.data.$lineWidth = 3;
            }
            else {
                delete adj.data.$color;
                delete adj.data.$lineWidth;
            }
        }
    });

    st.loadJSON(json);
    st.compute();
    st.geom.translate(new $jit.Complex(-200, 0), "current");
    st.onClick(st.root);
}
