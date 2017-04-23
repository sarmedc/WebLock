
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

function removeURL(idNum){
  var url = document.getElementById("url"+idNum);
  console.log(idNum);
  var websites = JSON.parse(localStorage.getItem("websites"));
  var index = websites.indexOf("tittt");
  if(index > -1)
    websites.splice(index,1);

  localStorage.setItem("websites", JSON.stringify(websites));  
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
    var tr;
    var td;
    var span;
    var button;

    for(var i = 0; i < websites.length; i++){
      tr = document.createElement("tr");
      td = document.createElement("td");
      span = document.createElement("span");
      button = document.createElement("button");
      
      button.innerHTML = "Remove";
      button.id = "removeURL"+i;
      button.className = "removeBtn";      
      
      span.innerHTML = websites[i];
      span.id = "url"+i;
      span.className = "urls";
      //console.log(span.id);
      
      td.append(span);
      td.append(button);
      
      tr.append(td);
      
      table.append(tr);

    }

    
    div.append(table);

    for(var j = 0 ; j < websites.length; j++)
      document.getElementById("removeURL"+j).addEventListener('click', function(){removeURL(j)}, false);

  }

  document.getElementById("addURL").addEventListener('click', addURL);  
  //document.getElementById("removeURL"+0).addEventListener('click', function(){removeURL(0)}, false);
  
}

window.onload = function(){   
  //localStorage.clear();  
  init();
};
