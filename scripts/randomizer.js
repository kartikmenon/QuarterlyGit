/* Author Kartik Menon 
	The Quarterly of East Asian Studies
	JavaScript
*/
function swap() {
		var images = new Array("img/banner1.jpg", "img/banner2.jpg", "img/banner3.jpg", "img/banner4.jpg");
		var n = Math.floor(Math.random() * images.length);
		
		document.write('<img src = "' +images[n]+ '">');
	}