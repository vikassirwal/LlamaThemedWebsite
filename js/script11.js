function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.

	$scope.services = [
		{
			name: 'Llama Print Tshirts',
			price: 30,
			active:true
		},{
			name: 'Adidas Jersy',
			price: 58,
			active:false
		},{
			name: 'Llama Stationary',
			price: 25,
			active:false
		},{
			name: 'Louis Vuitton shoes',
			price: 58,
			active:false
		},
		{
			name: 'Mango dress',
			price: 50,
			active:false
		},{
			name: 'Llama Bedsheets',
			price: 10,
			active:false
		},{
			name: 'Leather Shoes',
			price: 45,
			active:false
		},{
			name: 'Hermes Purse',
			price: 110,
			active:false
		},
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
