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
function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}


// Popup Windows C //
function popWinC(url,name,WinWidth,WinHeight,option)
{
 var x = screen.width / 2 - WinWidth / 2;
 var y = screen.height / 2 - WinHeight / 2;
 option = option + ',width=' + WinWidth + ',height=' + WinHeight + ',left=' + x + ',top=' + y;
 newwindow = window.open(url,name,option);
 newwindow.focus();
}
function popWinC2(url,name,WinWidth,WinHeight,option,template)
{
 var x = screen.width / 2 - WinWidth / 2;
 var y = screen.height / 2 - WinHeight / 2;
 option = option + ',width=' + WinWidth + ',height=' + WinHeight + ',left=' + x + ',top=' + y;
 window.close();
 opener.location.href="/" + template + "/etc/login.php";
//newwindow.focus();
}
function resize_win(url,name,WinWidth,WinHeight,option)
{
 var intwidth;
 var intheight;
 //intwidth=prompt('리사이즈할 너비를 입력하세요','800');
 //intheight=prompt('리사이즈할 높이를입력하세요.','600');
 intwidth=WinWidth;
 intheight=WinHeight;
 intwidth=parseInt(intwidth);
 intheight=parseInt(intheight);
 if(intwidth>0&&intheight>0) 
 {
  window.resizeTo(intwidth,intheight);
  window.location.href=url;
 }
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