//check-off completed task by line-through
$('ul').on("click","li",function(){   //middle li is for new potential li elements to come
	$(this).toggleClass('completed');   //then they also should have same function
	//if color is black
		//turn gray
	//else 
		//turn black
});

// remove the to do list completed
$('ul').on("click","span",function(event){ //middle span is for new potential span elements to come 
	$(this).parent().fadeOut(500,function(){  //then they also should have same function
		$(this).remove();
	});
	event.stopPropagation();
});

//get todos from input
$('input[type="text"]').keypress(function(event){
	if(event.which===13){
		//save value from input
		let todos=$(this).val();
		$(this).val("");
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> '+ todos +'</li>')
	}
	
});

//for toggle fadeout input using plus-icon
$('.fa-plus').on('click',function(){
	$('input[type="text"]').fadeToggle();
});