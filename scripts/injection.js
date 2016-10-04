// App
if (window.location.href.substring(0, 9) != "chrome://" && document.querySelectorAll(".oswald-elt").length <= 0) {

	var floatingButton = document.createElement("div");
	floatingButton.classList.add("oswald-elt");
	floatingButton.style.position = "fixed";
	floatingButton.style.bottom = "20px";
	floatingButton.style.right = "20px";
	floatingButton.style.background = "#69e";
	floatingButton.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2)";
	floatingButton.style.width = "50px";
	floatingButton.style.cursor = "pointer";
	floatingButton.style.height = "50px";
	floatingButton.style.borderRadius = "100%";
	floatingButton.innerHTML = '<svg style="width: 80%; margin: 10%; fill: #fff" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M49.863,0C22.324,0,0,22.324,0,49.863s22.324,49.863,49.863,49.863s49.863-22.324,49.863-49.863S77.401,0,49.863,0z M49.107,9.903c3.572,0,6.464,2.891,6.464,6.44c0,3.572-2.892,6.463-6.464,6.463c-3.547,0-6.438-2.892-6.44-6.463 C42.667,12.794,45.558,9.903,49.107,9.903z M77.05,30.728l-19.184,2.424l0.008,19.204l9.294,31.025 c0.491,1.959-0.687,3.919-2.625,4.403c-1.937,0.484-3.918-0.583-4.406-2.542L50.616,57h-2.932l-8.759,28.828 c-0.733,1.881-2.828,2.746-4.707,2.013c-1.861-0.726-2.997-2.844-2.263-4.725L40,52.67V33.152l-17.674-2.405 c-1.814-0.146-3.046-1.743-2.898-3.557c0.133-1.828,1.783-3.185,3.596-3.039L44.497,26h9.417l22.866-1.885 c1.817-0.073,3.357,1.34,3.418,3.171C80.271,29.104,78.868,30.653,77.05,30.728z"></path></svg>';
	floatingButton.style.zIndex = "1000";
	floatingButton.onclick = function() {
		contentMenu.style.display = "block";
		backgroundDark.style.display = "block";
	}
	document.body.appendChild(floatingButton);

	var contentMenu = document.createElement("div");
	contentMenu.style.display = "none";
	contentMenu.style.position = "fixed";
	contentMenu.style.bottom = "85px";
	contentMenu.style.right = "20px";
	contentMenu.style.width = "400px";
	contentMenu.style.height = "250px";
	contentMenu.style.background = "#fff";
	contentMenu.style.padding = "50px";
	contentMenu.style.borderRadius = "50px 50px 0 50px";
	contentMenu.style.boxSizing = "border-box";
	contentMenu.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2)";
	contentMenu.innerHTML = "ioufiudswofs";
	contentMenu.style.zIndex = "1000";
	document.body.appendChild(contentMenu);

	var backgroundDark = document.createElement("div");
	backgroundDark.style.display = "none";
	backgroundDark.style.position = "fixed";
	backgroundDark.style.left = "0";
	backgroundDark.style.right = "0";
	backgroundDark.style.top = "0";
	backgroundDark.style.bottom = "0";
	backgroundDark.style.background = "rgba(0, 0, 0, 0.3)";
	backgroundDark.style.zIndex = "999";
	backgroundDark.onclick = function() {
		contentMenu.style.display = "none";
		backgroundDark.style.display = "none";
	}
	document.body.appendChild(backgroundDark);

}
