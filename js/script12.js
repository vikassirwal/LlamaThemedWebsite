// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			
			title: 'Llama Print Caps - $2.50 ',
			image: 'photos/z1.jpg'
		},
		{
			
			title: 'Nike T-shirts - $7.50 ',
			image: 'photos/z2.jpg'
		},
		{
			
			title: 'Llama Jackets - $22.50',
			image: 'photos/z3.jpg'
		},
		{
			
			title: 'Sneakers - $20',
			image: 'photos/z4.jpg'
		},
		{
			
			title: 'Superhero Leggings - $ 18.50',
			image: 'photos/z5.jpg'
		},
		{
			
			title: 'Puma Socks(1 pair) - $7.25',
			image: 'photos/z6.jpg'
		},
		{
			
			title: 'Reebok Crossfit shorts - $10.50 ',
			image: 'photos/z7.jpg'
		},
		{
			
			title: 'Llama brand Belt - $120.50 ',
			image: 'photos/z8.jpg'
		},
		{
			
			title: 'Noble Gloves - $12.50 ',
			image: 'photos/z9.jpg'
		},
		{
		
			title: 'Louis Vuitton Hat - $250.50 ',
			image: 'photos/z10.jpg'
		},
		{
		
			title: 'Style Hair Gel - $12.50 ',
			image: 'photos/z11.jpg'
		},
		{
		
			title: 'Clearasil Facewash- $8',
			image: 'photos/z12.jpg'
		},
		{
			
			title: 'Llama Stationaries - $2.50 ',
			image: 'photos/l1.png'
		},
		{
			
			title: 'Llama School Bags - $7.50 ',
			image: 'photos/bags.jpg'
		},
		{
			
			title: 'Perfumes - $22.50',
			image: 'photos/l3.jpg'
		},
		{
			
			title: 'Superhero Protien Bars - $20',
			image: 'photos/l4.png'
		},
		{
			
			title: 'Llama Story Books - $ 18.50',
			image: 'photos/l5.jpg'
		},
		{
			
			title: 'Scented Candles(1 pair) - $7.25',
			image: 'photos/l6.jpg'
		},
		{
			
			title: 'Cameras - $10.50 ',
			image: 'photos/l7.jpg'
		},
		{
			
			title: 'Llama Bedsheets - $120.50 ',
			image: 'photos/l8.jpg'
		},
		{
			
			title: 'Llama Toys - $12.50 ',
			image: 'photos/l9.jpg'
		},
		{
		
			title: 'Alarm Clock - $250.50 ',
			image: 'photos/l10.png'
		},
		{
		
			title: 'Baseball Slugger - $12.50 ',
			image: 'photos/l11.png'
		},
		{
		
			title: 'Basketball- $8',
			image: 'photos/l12.png'
		}
		
	];


}
