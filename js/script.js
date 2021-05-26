(function($) {
  // Argument passed from InvokeCommand.
  $.fn.myAjaxCallback = function(argument, arg2) {
    console.log('myAjaxCallback is called. : ', argument, '\n : ', arg2);
    // Set textfield's value to the passed arguments.
    // $('input#edit-output').attr('value', argument);
  };
  //vanilla js.
  setTimeout(function(){
	  var listSelector=["#block-gaterblockparallax a"];
	  for(const i in listSelector){
		  const links = document.querySelectorAll(listSelector[i]);
		  for (const link of links) {
			  console.log(link.innerHTML,' :: ', link.getAttribute('href'));
			  if(link.getAttribute('href').length > 2 && link.getAttribute('href').includes('#')){
				  //console.log('href : ', link.getAttribute('href')[0]);
				  link.addEventListener("click", clickHandler);
			  }
		  }
		  function clickHandler(e) {
			  console.log('event enter');
		    e.preventDefault();
		    const href = this.getAttribute("href");
		    const offsetTop = document.querySelector(href).offsetTop;

		    scroll({
		      top: offsetTop,
		      behavior: "smooth"
		    });
		  }
	  }
  },6000);
})(jQuery);
