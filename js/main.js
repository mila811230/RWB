 $(document).ready(function(){
	 var pos=0;
	 var p_total=3;	
	 var p_width=100;
	 $('.slider_image').clone().appendTo('.slider_panel');
	 function moveSlider(index){
		 var targetLeft=-(index*p_width);
		 var targetLeft=targetLeft+"%";		 
		 var temp=index;
		 if(index>(p_total-1)){
				pos=index-p_total;
				index=pos;
			 }
		 $('.slider_panel').stop(true).animate({left:targetLeft},'slow','swing',function(){
				if(temp>(p_total-1)){
						$('.slider_panel').css('left',0);
						pos=temp-p_total;					
					}		 
			 
			 });		
		 $('.control_btn[data-index='+index+']').addClass('active');
		 $('.control_btn[data-index!='+index+']').removeClass('active');
	 }

	 $('.control_btn').each(function(index){
		$(this).attr('data-index',index);
	 }).click(function(){
		stop_rolling();
		index_no = $(this).attr('data-index');
		pos=Number(index_no)
		moveSlider(pos);
		auto_rolling();
	 
	 });
	
	$('.left_btn').click(function(){		
		if(pos>0){
			pos-=1;
		}else{
			pos=0;
			}
		stop_rolling();
		moveSlider(pos);
		auto_rolling();
	});

	$('.right_btn').click(function(){		
		if(pos>(p_total-1)){
			pos=p_total;
			return;
		}else{
			pos+=1;
			}
		stop_rolling();
		moveSlider(pos);
		auto_rolling();
	});

	var auto_rolling=function(){		
		rolling=setInterval(function(){
			pos+=1;			
			moveSlider(pos);
		},2000);

	}

	var stop_rolling=function(){
		clearInterval(rolling);
	}
	moveSlider(pos);
	auto_rolling();
 
});