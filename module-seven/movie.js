$(function(){

	$('body').append('<h1 id="h1" class="nav nav-tabs"><font face="fantasy" color="black">Movie</font><font face="fantasy" color="red">Guide</font></h1>');
	$('body').append('<input type="text" id="search_input" value="" autocomplete="on" placeholder="Search Movies Here!"/>');
	$('body').append('<br><input type="submit" id="search_button" value="SEARCH" style="margin-left: 5px; margin-right: 5px; margin-bottom: 5px;"><span class="iconmagnify"></span>');
	var server = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
	var value = $('search_input').val();
	var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
	var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	var newDate = new Date();
	newDate.setDate(newDate.getDate());    
	$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
	$('#search_button').click (function(){
	$ .ajax({
	
		url: server,
		dataType: 'jsonp',
		data: {
			q: $('#search_input').val(),
			apiKey: 'hcrurhsttexasrgfm2y6yahm'
		},
		success: showMovies
		});
	});
	
 
	function showMovies(response){ 
		console.log('response', response);
		var movies = response.movies;
		for (var i = 0; i < movies.length; i++) {
			 var movie = movies[i];
			
			 $('body').append('<h3><font color = "red">'+movie.title+ '(' + movie.year +')</font></h3>'	);
			 $('body').append('<img id="blocks" src="' +movie.posters.thumbnail + '"/>');
			 

		};
}	
});