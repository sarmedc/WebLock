

document.addEventListener('DOMContentLoaded', function() {
	var websites = JSON.parse(localStorage.getItem("websites")); 
	var test= false;	
  
	if(websites){
		chrome.tabs.getSelected(null,function(tab) {
			for(var i = 0; i < websites.length; i++){ 			
				if(websites[i] == tab.url){
					test = true;
					alert("QUIT LOLLYGAGGING AND GET BACK TO WORK"); 				
				}
			}		
			console.log(tab.url);
		}); 		
		if(!test){
			alert("test");
		}
	}
	else{
		alert("no websites");
	}
});






