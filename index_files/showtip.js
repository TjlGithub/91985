var msgTimeout;
function showTip(msg){
	showTip2(false,msg);
}
function showTip2(status,msg){
	clearTimeout(msgTimeout);
	if ($("#ajaxmsgModal").length == 0)
		$("body").append('<div id="ajaxmsgModal"><i></i><span></span></div>');
	var alertObj = $("#ajaxmsgModal");
	alertObj.show().find("span").html(msg);
	if (!status)
		alertObj.removeClass("success");
    else
		alertObj.addClass("success");
	$(alertObj).css({ left: ($(window).width() - alertObj.width()-80) / 2, top: ($(document.body)[0].clientHeight - alertObj.height()) / 2 });
	$(alertObj).show();
	$(alertObj).animate({ opacity: 100 }, "fast");
	msgTimeout = setTimeout(function () { $(alertObj).animate({ top: -50, opacity: 0 }, "fast", function () { alertObj.hide(); })}, 3000);
}