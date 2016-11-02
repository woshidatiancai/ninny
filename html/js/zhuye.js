var yp_h=document.querySelector('h2');
var banone=document.querySelector('.ban_up_01');
var bantwo=document.querySelector('.ban_up_02');
var banthree=document.querySelector('.ban_up_03');
var banfour=document.querySelector('.ban_up_04');
var fis=document.querySelector('.fis');
var mid=document.querySelector('.mid');
var last=document.querySelector('.last');
var midd=document.querySelector('.midd');
var active=document.querySelector('.active');
var lastt=document.querySelector('.lastt');
var tab_two1=document.querySelector('.tab_two1');
var tab_two2=document.querySelector('.tab_two2');
var tab_two3=document.querySelector('.tab_two3');
var fdiv_01=document.querySelector('.fdiv_01');
var fdiv_02=document.querySelector('.fdiv_02');
var fdiv_03=document.querySelector('.fdiv_03');
var cirbg1=document.querySelector('.cirbg1')[0];
var bolf=document.querySelector('.bolf')
var ul1=document.querySelector('.ul1');
var ul2=document.querySelector('.ul2');
var ul3=document.querySelector('.ul3');
var ul4=document.querySelector('.ul4');
var ul5=document.querySelector('.ul5');
var ul6=document.querySelector('.ul6');
var ul7=document.querySelector('.ul7');
var ul8=document.querySelector('.ul8');
var ul9=document.querySelector('.ul9');
var ul10=document.querySelector('.ul10');
var i=0;
//var timer=setInterval(function(){	   
//	    i++;
//	     console.log(i);
//	    banone.style.top='(80-i)%';
//		banone.style.opacity='1';
//},100)
  var mySwiper = new Swiper ('.swiper-container', {
    autoplay: 5000,
    loop: true,
    
    // 如果需要分页器
//  pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
  });
  mid.onmouseover=function(){
	  midd.className='active';
	  active.className='';
	  lastt.className='';
	  tab_two1.style.display='none';
	  tab_two2.style.display='block';
	  tab_two3.style.display='none';
	  
	  
  }
   fis.onmouseover=function(){
	   active.className='active';
	   midd.className='';
	   lastt.className='';
	   tab_two2.style.display='none';
	   tab_two3.style.display='none';
	   tab_two1.style.display='block';
}
  last.onmouseover=function(){
		 lastt.className='active';
		 midd.className='';
		 active.className='';
		 tab_two3.style.display='block';
		 tab_two2.style.display='none';
	     tab_two1.style.display='none';
  }
fdiv_01.onmouseover=function(){
	document.querySelector('.cirbg1').src='../ZHUYEimg/cirbg_02.png';
	bolf.style.color='lawngreen';
}
fdiv_01.onmouseout=function(){
	document.querySelector('.cirbg1').src='../ZHUYEimg/cirbg_01.png';
	bolf.style.color='black';
}
fdiv_02.onmouseover=function(){
	document.querySelector('.cirbg2').src='../ZHUYEimg/cirbg_02.png';
    document.querySelector('.bolf1').style.color='lawngreen';
}
fdiv_02.onmouseout=function(){
	document.querySelector('.cirbg2').src='../ZHUYEimg/cirbg_01.png';
    document.querySelector('.bolf1').style.color='black';
}
fdiv_03.onmouseover=function(){
	document.querySelector('.cirbg3').src='../ZHUYEimg/cirbg_02.png';
    document.querySelector('.bolf2').style.color='lawngreen';
}
fdiv_03.onmouseout=function(){
	document.querySelector('.cirbg3').src='../ZHUYEimg/cirbg_01.png';
    document.querySelector('.bolf2').style.color='black';
}
// fdiv_01.onmouseout=function(){
//	cirbg1.src='(../ZHUYEimg/cirbg_01.png)'
//}
//$(".cirbg1").hover(function(){
//$(this).attr("src","../ZHUYEimg/cirbg_02.png")
//})
ul1.onmouseover=function(){
	ul1.src='../ZHUYEimg/hz_01_1.jpg';
}
ul1.onmouseout=function(){
	ul1.src='../ZHUYEimg/hz_01.jpg';
   
}
ul2.onmouseover=function(){
	ul2.src='../ZHUYEimg/hz_02_1.jpg';
}
ul2.onmouseout=function(){
	ul2.src='../ZHUYEimg/hz_02.jpg';
   
}
ul3.onmouseover=function(){
	ul3.src='../ZHUYEimg/hz_03_1.jpg';
}
ul3.onmouseout=function(){
	ul3.src='../ZHUYEimg/hz_03.jpg';
   
}
ul4.onmouseover=function(){
	ul4.src='../ZHUYEimg/hz_04_1.jpg';
}
ul4.onmouseout=function(){
	ul4.src='../ZHUYEimg/hz_04.jpg';
   
}
ul5.onmouseover=function(){
	ul5.src='../ZHUYEimg/hz_05_1.jpg';
}
ul5.onmouseout=function(){
	ul5.src='../ZHUYEimg/hz_05.jpg';
   
}
ul6.onmouseover=function(){
	ul6.src='../ZHUYEimg/hz_6_1.jpg';
}
ul6.onmouseout=function(){
	ul6.src='../ZHUYEimg/hz_06.jpg';
   
}
ul7.onmouseover=function(){
	ul7.src='../ZHUYEimg/hz_07_1.jpg';
}
ul7.onmouseout=function(){
	ul7.src='../ZHUYEimg/hz_07.jpg';
   
}
ul8.onmouseover=function(){
	ul8.src='../ZHUYEimg/hz_08_1.jpg';
}
ul8.onmouseout=function(){
	ul8.src='../ZHUYEimg/hz_08.jpg';
   
}
ul9.onmouseover=function(){
	ul9.src='../ZHUYEimg/hz_09_1.jpg';
}
ul9.onmouseout=function(){
	ul9.src='../ZHUYEimg/hz_09.jpg';
   
}
ul10.onmouseover=function(){
	ul10.src='../ZHUYEimg/hz_10_1.jpg';
}
ul10.onmouseout=function(){
	ul10.src='../ZHUYEimg/hz_10.jpg';
   
}

