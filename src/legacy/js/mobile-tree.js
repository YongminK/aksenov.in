
var json;

loadJSON(function (response) {
    json = JSON.parse(response);
});
var list = document.createElement('ul');
list.classList.add('Menu', '-vertical');
document.getElementById('map-mobile').appendChild(makeList(json, list));
console.log(json);
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
function makeList(json, list) {
   
    for (var i = 0; i < json.children.length; ++i) {
        var item = document.createElement('li');
        if(!isEmpty(json.children[i].data)) {
            var link = document.createElement('a');
            link.setAttribute('href', json.children[i].data.url);
            item.appendChild(link);
            link.appendChild(document.createTextNode(json.children[i].name));  
        } else {
            item.appendChild(document.createTextNode(json.children[i].name));  
        }
             
        list.appendChild(item);
        if(json.children[i].children.length !== 0){
            item.classList.add("-hasSubmenu")
            var list2 = document.createElement('ul');
            item.appendChild(list2);
            makeList(json.children[i], list2);
        }
       
    }
    return list;
    
}

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'src/legacy/js/university.json', false);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}