function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

var rurl = location.href;
var purl = getUrl(rurl);
function getUrl(url_str)
{
    var real_url;
    if (url_str.indexOf('/') > 0)
    {
        real_url = url_str.split('/');
        real_url = real_url[0]+'//'+real_url[2]+'/'+real_url[3]+'/';
    }
    return real_url;
}
function goLocate(go_url)
{
  document.location = purl + go_url;
}
function mob_reset(){			
			$("div#menu > #menu_wrap > ul > li > ul").slideUp('fast');
			$("div#menu > #menu_wrap > ul > li >a").removeClass("on");
			$("div#menu").css('overflow','visible');
			$("div#menu").css('height','100%');
			$("h2#mob_menu>img").attr('src',purl+'img/youlbit/mob_menu.gif');
			$("div#menu").css('right','-100%').css('display','none').removeClass('mob_menu_view');			
			$("div#bg_mask").css('display','none');
			$('#menu').css({'background':'#FFF', 'position':'fixed'});
	}
function pc_reset(){		 
			$("div#menu").removeClass('mob_menu_view');				
			$("div#menu").css('right','0').css('display','block').css('overflow','hidden');
			$("div#menu").css('height','49px');
			$("div#menu > #menu_wrap > ul > li > ul").slideDown('fast');
			if($("div#bg_mask").is(':visible')) { 				
				$("div#bg_mask").css('display','none');
			}
			$('#menu').css({'background':'#FFF','position':'absolute'});
	}
$(document).ready(function(){  
		    $("div#menu > #menu_wrap  > ul > li").click(function() {
			if($(">a", this).hasClass("on")){
				$(".submenu", this).slideUp('fast');
				$(">a", this).removeClass("on");	
			}else{
				 $("div#menu .submenu").slideUp('fast');
				$("div#menu ul  li > a").removeClass("on");
				$(".submenu", this).slideDown('fast');
				$(">a", this).addClass("on");
			}
			
		});		

	  $("h2#mob_menu").click(function() {
				if($("div#menu").hasClass("mob_menu_view")){
					$("img",this).attr('src',purl+'img/youlbit/mob_menu.gif');
					$("div#menu").stop(true).animate({ "right" : "-100%" }, 500);
					$("div#menu").css('display','none');
					$("div#menu").removeClass('mob_menu_view');
					$("div#bg_mask").css('display','none');
					$(this).css('position','absolute');
				}else{
					$("img",this).attr('src',purl+'img/youlbit/mob_menu_close.gif');
					$("div#menu").css('display','block');
					$("div#menu").stop(true).animate({ "right" : "0" }, 500);
					$("div#menu").addClass('mob_menu_view');
					$("div#bg_mask").css('display','block');			
					$("div#menu").css('overflow','visible');
					$(this).css('position','fixed');
				}
		});

		 $("div#menu > #menu_wrap  > ul > li").hover(function() {
				if($(this).parent().parent().parent().hasClass("mob_menu_view")){
					preventDefault();
				}else{
					$(".pc .menu_line",this).stop(true).animate({ "width" : "50%" }, 200);
					$(this).parent().parent().parent().stop(true).animate({ "height" : "200px" }, 200);
					$("div#menu ul  li > a").removeClass("on");
					$(">a", this).addClass("on");
				}				
			},function(){
				if($(this).parent().parent().parent().hasClass("mob_menu_view")){
					preventDefault();
				}else{
					$(".pc .menu_line",this).stop(true).animate({ "width" : "0" }, 200);
					$(this).parent().parent().parent().stop(true).animate({ "height" : "49px" }, 200);
					$(">a", this).removeClass("on");
				}				
		});	
		
		$("h2#quick_menu").click(function() {
				$("#main_quick_bg").slideUp('fast');
		});
}); 
$( document ).ready( function() {
		 $( 'div.viewer_content_01' ).removeAttr( 'style' );	
		 $( 'div#post_area img' ).removeAttr( 'style' );
		 $( '#room_spec td' ).removeAttr( 'style' );
		 $( 'td.board_bgcolor font' ).removeAttr( 'style' );
		 $( 'td.board_bgcolor span').removeAttr( 'style' );
		 $( 'td.att_title font').removeAttr( 'style' );
		 $( 'td.gallery_etc font').removeAttr( 'style' );
		 $( 'td.formmail_title_bgcolor font').removeAttr( 'style' );
		 $( 'td.formmail_cell_bgcolor textarea').removeAttr( 'style' );
		 $( '.bbsnewf5 div' ).removeAttr( 'style' );
		 $( 'div#post_area img' ).css('width','95%').css('height','auto').css('max-width','750px');
		 $( '#bank table table td' ).removeAttr( 'style' );
		 $( '#bank table table td' ).removeAttr( 'width' );
		 $( '#card table table td' ).removeAttr( 'style' );
		 $( '.r_info_table td' ).removeAttr( 'width' );
		 $( '.r_info_table table td' ).removeAttr( 'width' );

	});
/* $( document ).ready( function() {		
		$(window).scroll(function(){ 
				if ($(this).scrollTop() > 100) {
					$('#main_container').css({'margin-top':'0'});
					$('#sub_container').css({'margin-top':'0'});
					$('#top_container_bg').css({'position':'fixed'});
					if(!$("h2#mob_menu").is(':visible')){
						$('#menu').css({'position':'fixed'});		
					}else{
						$('#menu').css({'position':'fixed'});						
					}
				}else{					
					$('#top_container_bg').css({'position':'relative'});
					if(!$("h2#mob_menu").is(':visible')){
						$('#menu').css({'position':'absolute'});
					}else{
						$('#menu').css({'position':'fixed'});
					}
				}			
		});
}); */
$(window).resize(function(){
		var width = $(window).width();
		if(!$("h2#mob_menu").is(':visible')){
			 pc_reset();			
		}else{
			mob_reset();				
		}
   });