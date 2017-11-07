import $ from 'jquery';
import axios from 'axios';


function getData(){
	axios.get('http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json')
	.then( (resp) => {
		console.log('Resp from server', resp);
		displayData(resp.data.feed.entry);
	}).catch((error) => {
		console.log('Error from axios request: ', error)
	})
}

function displayData(movieArray){
	const movieHTML = movieArray.map((movie, index) => {
		console.log('Movie', movie);

		const container = $('<div>')
		const h1 = $(`<h1>${movie['im:name'].label}</h1>`);
		const img = $(`<img src='${movie['im:image'][2].label}'>`)
		container.append(h1, img);
		return container;
	});

	$('#root').append(movieHTML);
}

getData();