
function isUrl(s) {
   var regexp = /((ftp|http|https):\/\/)?(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
   return regexp.test(s);
}


function addURL(){   
  var url = document.getElementById("webURL").value;
  if(isUrl(url)){
    var websites = JSON.parse(localStorage.getItem("websites"));    
    websites[websites.length] = url;
    localStorage.setItem("websites", JSON.stringify(websites)); 
  }
}

function removeURL(url){
  // var url = document.getElementById("url"+idNum);
  var toot = url.parentNode.children;
  // console.log(toot[0].innerHTML);
  var websites = JSON.parse(localStorage.getItem("websites"));
  var index = websites.indexOf(toot[0].innerHTML);
  if(index > -1)
    websites.splice(index,1);

  localStorage.setItem("websites", JSON.stringify(websites));   
  history.go();  
}

function init(){    
  if(!localStorage.getItem("websites")) {        
    var arr = [""];      
    localStorage.setItem("websites", JSON.stringify(arr));    
  }
  else{
    var websites = JSON.parse(localStorage.getItem("websites"));

    var div = document.getElementById("divTable");
    var table = document.createElement("table");
    var tr, td, span, button;

    for(var i = 0; i < websites.length; i++){
      tr = document.createElement("tr");
      td = document.createElement("td");
      span = document.createElement("span");
      button = document.createElement("button");
      
      span.innerHTML = websites[i];
      span.id = "url"+i;
      span.className = "urls";

      button.innerHTML = "Remove";
      button.id = "removeURL"+i;
      button.className = "removeBtn";   
      button.addEventListener('click', function(){removeURL(this)}, false); 
      
      
      //console.log(span.id);
      
      td.append(span);
      td.append(button);
      
      tr.append(td);
      
      table.append(tr);

    }
    
    div.append(table);

  }

  document.getElementById("addURL").addEventListener('click', addURL);  
  
}

window.onload = function(){   
  //localStorage.clear();  
  init();
};
