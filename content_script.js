function matchRuleShort(str, rule) {
	var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
}
var clickedElement;

document.addEventListener("mousedown", function (event) {
	clickedElement = event.target;
}, true);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	document.querySelectorAll("*").forEach(function (e) {

		// Find Elements Containing Strings
		// styles--header
		if (e.getAttribute("class") != null && matchRuleShort(e.getAttribute("class"), "*styles--header*")) {
			console.log("Removing Element: " + e.className);
			e.parentNode.removeChild(e);
		}
		// styles--nonSubscriber
		if (e.getAttribute("class") != null && matchRuleShort(e.getAttribute("class"), "*styles--nonSubscriber*")) {
			console.log("Removing Element: " + e.className);
			e.parentNode.removeChild(e);
		}

		// styles--upsellBanner
		if (e.getAttribute("class") != null && matchRuleShort(e.getAttribute("class"), "*styles--upsellBanner*")) {
			console.log("Removing Element: " + e.className);
			e.parentNode.removeChild(e);
		}
	});
}
);
