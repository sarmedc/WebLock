
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

function init(){  
  if(!localStorage.getItem("websites")) {        
    var arr = ["www.nolollygagging.com"];      
    localStorage.setItem("websites", JSON.stringify(arr));    
    
  }else{
    // alert(localStorage.getItem("websites"));
  }

  document.getElementById("addURL").addEventListener('click', addURL);  
  // document.getElementByID("removeURL").addEventListener('click', removeURL, false); 
}

window.onload = function(){   
     //localStorage.clear();    
   init();
};
