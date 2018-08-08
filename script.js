// Access window object and listen to the 'load event'. When the load event is triggered, do something.
// First parameter is the event we listen to. Second parameter is the function to be executed when the event is loaded.
// The following event is to ensure that the DOMs are loaded in the page, so that we can access it.
window.addEventListener('load', function() {
	// Modify 'results' when clicking the search button
	var results = document.getElementById('results');

	function search() {
		// Get hobby field
		var hobbyField = document.getElementById('hobby');
		// Get hobby value
		var hobby = hobbyField.value;
		console.log(hobby);

		// Get gender field
		var genderField = document.getElementById('gender');
		// Get gender option index
		var s = genderField.selectedIndex;
		// Get gender value from option index
		var gender = genderField.options[s].value;
		console.log(gender);


		console.log('Im searching!');
		// Can be string or HTML
		results.innerHTML = '<div style="color:red;">hello</div>world<br/>new line<div class="person-row">some stuff</div>';
		console.log(results.innerHTML)
		}

	// Access search button object
	var searchBtn = document.getElementById('searchBtn');
	// Listen for click event on search button
	searchBtn.addEventListener('click', search) 
	});
