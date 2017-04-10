$(document).ready(function (){

	$('#createButton').click(function (){

		var numberOfColumns = $('#userChoice').val();

		alert(numberOfColumns);

		//check to see if userChoice is a whole number
		if (numberOfColumns >= 1) {

			var numberOfTiles = numberOfColumns * numberOfColumns;

			alert(numberOfTiles);

			var i = 0

			//Create the grid
			while (i < numberOfTiles) {

				$('#tileContainer').append('<div class="tile"></div>');
				$('.tile').width((960/numberOfColumns) - 2 );
				$('.tile').height((960/numberOfColumns) - 2);

				i++
			}

			//add in the hover effect
			$('.tile').mouseover(function() {
				$(this).css('background-color','red');
					
			});

		}

		//give an error message if they input a negative number, or 0
		 else {
			alert('please enter a valid number of tiles');
		}

	})

})