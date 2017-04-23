
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
  	var websites = JSON.parse(localStorage.getItem("websites")); 
  	var goToTab = "chrome://newtab/";	

	if(websites){
		chrome.tabs.getSelected(null,function(tab) {
			for(var i = 0; i < websites.length; i++){ 					
				if((tab.url).includes(websites[i])){	
					alert("This website is blocked. Redirecting...");
					chrome.tabs.update({url: goToTab});					    				
				}				
			}		
			console.log(tab.url);
		}); 
	}

  }
})






