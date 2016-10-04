// App
document.addEventListener("DOMContentLoaded", function() {
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		if (tab.url.substring(0, 9) != "chrome://") {
			chrome.tabs.executeScript(null, {file: "scripts/injection.js"});
		}
	});
});
