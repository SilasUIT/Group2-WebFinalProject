const previewImage = (input, name) => {
    console.log('Preview image function called');
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById(`${name}Preview`).src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]); 
    }
};

const previewArrayimg = (input, name) => {
    console.log('Preview array image function called');
    if (input.files && input.files.length > 0) {
        let count = 0; // Counter to track the number of images rendered
        for (let i = 0; i < input.files.length; i++) {
            if (count >= 3) break; // Stop the loop if three images are already rendered
            const reader = new FileReader();
            reader.onload = function(e) {
                const image = document.createElement('img');
                image.src = e.target.result;
                image.classList.add('preview-image');
				image.style.width = '100%'; // Set the width to 50px
                image.style.height = 'auto'; // Automatically adjust the height based on the aspect ratio
                document.getElementById(`${name}${count + 1}`).innerHTML = ''; // Clear previous content
                document.getElementById(`${name}${count + 1}`).appendChild(image); // Append image to the corresponding container
                count++; // Increment the counter
            }
            reader.readAsDataURL(input.files[i]);
        }
    }
};


(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()