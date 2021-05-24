function sendButton() {
	var ans = document.getElementById("ans").value;

	var ans1 = 0x7+7/7+9*9-0x7+0x9/3+0x7+7/7+7/7-0x64/0x32-0x7-0x52, 
		ans2 = -0x44+7+0x7/7+7/7-64/32-7+7+7/7+9*9-7-9/0x3, 
		aux1 = "9", 
		aux2 = "8";

	var page = "<div class=\"row align-items-center justify-content-center text-center\"> <div class=\"col-lg-10\">",
		image = "<img width=\"100%\" src=\"https://i.pinimg.com/originals/",
		imagept2 = "",
		imagept3 = "",
		pageAux = "</div></div>";

	ans1 = parseInt(aux1 + ans1 + "5") / 11;
	ans2 = parseInt(ans2 + aux2 + "5") / 15;

	if(ans == ans1){
		imagept2 = "dfcc8c4c33b0ec1.";
		imagept3 = "a52e23c9668748580";
		image = image + "a5/2e/23/" + imagept3 + imagept2 + "png\">";

		page = page + image + pageAux;
		document.getElementById("main").innerHTML = page;
	}

	else if(ans == ans2){
		imagept2 = "e77fa1b14595f32e.";
		imagept3 = "745709b66ef28221";
		image = image + "74/57/09/" + imagept3 + imagept2 + "png\">";

		page = page + image + pageAux;
		document.getElementById("main").innerHTML = page;
	}
	/*
	else{
		console.log("No");
		document.getElementById("main").innerHTML = "<h1>No</h1>"
	}
	*/
}