

document.addEventListener('DOMContentLoaded', function() {
	var websites = JSON.parse(localStorage.getItem("websites")); 
	var fuck = false;	
  
	if(websites){
		chrome.tabs.getSelected(null,function(tab) {
			for(var i = 0; i < websites.length; i++){ 			
				if(websites[i] == tab.url){
					fuck = true;
					alert("QUIT LOLLYGAGGING AND GET BACK TO WORK"); 				
				}
			}    		
			console.log(tab.url);
		}); 		
		if(!fuck){
			alert("FUCK");
		}
	}
	else{
		alert("no websites");
	}
});






