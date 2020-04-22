$(document).ready(() => {
	$('#form').submit(e => {
		e.preventDefault();
		$.ajax({
			url: '/contact',
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify($('#form').serializeArray()),
			success: (response) => {
				console.log('Successfully got response');
				console.log(response);
			}
		})
	})
})


/*

JSON.stringify converts the object to string before sending it to the server

serializeArray serializes the data into an array

*/