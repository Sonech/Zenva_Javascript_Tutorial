var users = [
	{
		name: 'Lucy',
		gender: 'F',
		hobby: 'pets',
		avatar: 'avatar1.png'
	},
	{
		name: 'Betty',
		gender: 'F',
		hobby: 'pets',
		avatar: 'avatar1.png'
	},
	{
		name: 'Ronald',
		gender: 'M',
		hobby: 'music',
		avatar: 'avatar1.png'
	},
	{
		name: 'Christopher',
		gender: 'M',
		hobby: 'sports',
		avatar: 'avatar1.png'
	},
	{
		name: 'Ximena',
		gender: 'F',
		hobby: 'reading',
		avatar: 'avatar1.png'
	},
	{
		name: 'Paul',
		gender: 'M',
		hobby: 'shopping',
		avatar: 'avatar1.png'
	},
	{
		name: 'Charlie',
		gender: 'M',
		hobby: 'pets',
		avatar: 'avatar1.png'
	},
];
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


		
		var resultsHtml = '';
		
		var usersLength = users.length;
		for(var i = 0; i < usersLength; i++) {
			// resultsHtml = resultsHtml + ' ' + users[i].name;
			resultsHtml += '<div class="person-row">\
						<img src="images/' + users[i].avatar + '"/>\
						<div class="person-info">\
							<div>' + users[i].name + '</div>\
							<div>' + users[i].hobby + '</div></div>\
						<button>Add as friend</button></div>';
		}

		// Can be string or HTML
		results.innerHTML = resultsHtml;
		
		}

	// Access search button object
	var searchBtn = document.getElementById('searchBtn');
	// Listen for click event on search button
	searchBtn.addEventListener('click', search) 
	});
