var mainmid=$('.main_mid') 

function wlqq(obj,callBack){
				var request=new XMLHttpRequest();
			    request.open('GET',obj.Con, true);
			    request.getResponseHeader('obj.headerKey','obj.headerKey');
			    request.send()
			    request.onreadystatechange=function(){
				if(request.readyState == 4 && request.status == 200){
					var str = request.responseText;
					var obj = JSON.parse(str);
					var arr = obj.retData;

					if(callBack){
						callBack(obj);
					}

				}
			  }
			}
      
          var ul1 = $('<ul/>');
        mainmid.append(ul1);
			wlqq({
				Con:'../../php/php/index5.php'
				// headerKey:''
				// headerKey:''
			},function(obj){
				console.log(obj);
       
               for(var i=0;i<obj.length;i++){
               	var li1=$('<li/>')
               	li1.css({width:'20%',height:'500px',float:'left'})
               ul1.append(li1)
//             }
//             for(var i=0;i<li1.length;i++){
            
               	var mod_shadow=$('<div/>');
               	mod_shadow.addClass('mod_shadow');
               	li1.append(mod_shadow);
               	var mod_up=$('<div/>');
              	mod_up.addClass('mod_up');

//				mod_up.attr('class','mod_up');
               	mod_shadow.append(mod_up);
               //添加图片
               var img =$('<img/>');
               img.addClass('big');
               img[0].src = "../shujuimg/"+ obj[i].pictrue;
               //console.log("../shujuimg/"+ obj[i].pictrue)
               mod_up.append(img);
               var a1=$('<a/>');
               
//             a1[0].location.href="下一个网页?id="+obj[i].id;
               
               
               mod_up.append(a1);
               var run_down=$('<div/>');
               run_down.addClass('run_down');
               a1.append(run_down);
               var mod_bg=$('<div/>');
               mod_bg.addClass(' mod_bg.');
               mod_up.append(mod_bg);
               var pic_down=$('<div/>');
               pic_down.addClass('pic_down');
               pic_down.text(obj[i].title)
               mod_shadow.append(pic_down);
               
               }

            
               
			})
    
