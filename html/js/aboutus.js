var page1=document.querySelector('.page_1');
var page2=document.querySelector('.page_2');
var page3=document.querySelector('.page_3');
var page4=document.querySelector('.page_4');
var page1b=document.querySelector('.page1_btn');
var page2b=document.querySelector('.page2_btn');
var page3b=document.querySelector('.page3_btn');
var page4b=document.querySelector('.page4_btn');
var a1=document.querySelector('.a1');
page1b.onclick=function(){
	page1b.style.background='#CB0000';
	page2b.style.background='';
	page3b.style.background='';
	page4b.style.background='';
	page1.style.display='block';
	page2.style.display='none';
	page3.style.display='none';
	page4.style.display='none';
};
page2b.onclick=function(){
	page2b.style.background='#CB0000';
	page1b.style.background='black';
	page3b.style.background='';
	page4b.style.background='';
	page2.style.display='block';
	page1.style.display='none';
	page3.style.display='none';
	page4.style.display='none';
};
page3b.onclick=function(){
	page3b.style.background='#CB0000';
	page2b.style.background='';
	page1b.style.background='black';
	page4b.style.background='';
	page3.style.display='block';
	page2.style.display='none';
	page1.style.display='none';
	page4.style.display='none';
};
page4b.onclick=function(){
	page4b.style.background='#CB0000';
	page2b.style.background='';
	page3b.style.background='';
	page1b.style.background='black';
	page4.style.display='block';
	page2.style.display='none';
	page3.style.display='none';
	page1.style.display='none';
};
//a1.href="http://about.html?a=1";
//console log('a1');
 function getvl(name) {
      var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
      if (reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g," "));
      return "";
    };
    var value = getvl("a");
console.log(value);
if(value==1){
	page1b.style.background='#CB0000';
	page2b.style.background='';
	page3b.style.background='';
	page4b.style.background='';
	page1.style.display='block';
	page2.style.display='none';
	page3.style.display='none';
	page4.style.display='none';
}
if(value==2){
	page2b.style.background='#CB0000';
	page1b.style.background='black';
	page3b.style.background='';
	page4b.style.background='';
	page2.style.display='block';
	page1.style.display='none';
	page3.style.display='none';
	page4.style.display='none';
}
if(value==3){
	page3b.style.background='#CB0000';
	page2b.style.background='';
	page1b.style.background='black';
	page4b.style.background='';
	page3.style.display='block';
	page2.style.display='none';
	page1.style.display='none';
	page4.style.display='none';
}
if(value==4){
	page4b.style.background='#CB0000';
	page2b.style.background='';
	page3b.style.background='';
	page1b.style.background='black';
	page4.style.display='block';
	page2.style.display='none';
	page3.style.display='none';
	page1.style.display='none';
}
