// Access window object and listen to the 'load event'. When the load event is triggered, do something.
// First parameter is the event we listen to. Second parameter is the function to be executed when the event is loaded.
// The following event is to ensure that the DOMs are loaded in the page, so that we can access it.
window.addEventListener('load', function() {
	console.log('the page has been loaded!');
})