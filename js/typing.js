//타이핑 효과
$(function(){
	const text = document.querySelector(".title h2");
	const text2 = document.querySelector(".title p");
	const content = "WEB DEVELOPER\nOPEN API / JAVASCRIPT / REACT / JQUERY / JSON / AJAX / RESPONSIVE DESIGN";
	let i = 0;
  
	function typing(){
	  let txt = content[i++];
	  if (txt === "\n") {
		text2.innerHTML += "<br/>";
	  } else {
		if (i <= content.indexOf("\n")) {
		  text.innerHTML += txt;
		} else {
		  text2.innerHTML += txt;
		}
	  }
	  if (i > content.length) {
		text.textContent = "";
		text2.textContent = "";
		i = 0;
	  }
	}
	
	setInterval(typing, 100);
  });
  
