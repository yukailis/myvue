import Vue from 'vue'
import $$ from 'jquery'
import Swiper from 'swiper'
Vue.directive('hides',{
	bind:function(){
		var ele=this.el;
		setTimeout(function(){
			$$(ele).hide();
			$$(ele).parent().find('ol').css('visibility','visible');
		},2000)
	},
	update:function(){},
	unbind:function(){}
})
Vue.directive('wipes',{
	bind:function(){
		var ele=this.el,
		 	startX,offsetX,
		 	winW=$$(window).width(),
		 	index=0,
		 	len=$$(ele).find('ul').find('li').length;
		$$(ele).find('ol').find('li').eq(0).css('background','#000');
		ele.addEventListener('touchstart',function(e){
			startX=e.touches[0].clientX;
		})
		ele.addEventListener('touchmove',function(e){
			offsetX=e.touches[0].clientX-startX;
			startX=e.touches[0].clientX;
		})
		ele.addEventListener('touchend',function(){
			if(offsetX<0){
				index++;
				if(index>=len-1)index=len-1;
				changeImg(index)
			}
			if(offsetX>0){
				index--;
				if(index<=0)index=0;
				changeImg(index)
			}
			function changeImg(index){
				$$(ele).find('ul').animate({'marginLeft':-winW*index+'px'},500)
				$$(ele).find('ol').find('li').eq(index).css('background','#000').siblings().css('background','')
			}
		})		
	},
	update:function(){},
	unbind:function(){}
})
Vue.directive('go',{
	bind:function(){
		var ele=this.el,
		 	startX,offsetX,l;	 
		ele.addEventListener('touchstart',function(e){
			l=$$(ele).find('ul')[0].offsetLeft;
			startX=e.touches[0].clientX;
		})
		ele.addEventListener('touchmove',function(e){
			offsetX=e.touches[0].clientX-startX;
			$$(ele).find('ul').css({'marginLeft':offsetX+l+'px'})			
		})			
	},
	update:function(){},
	unbind:function(){}
})
Vue.directive('showhide',{
	bind:function(){
		var self=$$(this.el);
		self.find('p:gt(2)').hide();
		$$(this.el).find('.look').on('click',function(){
			if($$(this).find('span').text()=="查看全部"){
				self.find('p:gt(2)').show();
				$$(this).find('span').text("收起");
			}else if($$(this).find('span').text()=="收起"){
				self.find('p:gt(2)').hide();
				$$(this).find('span').text("查看全部");
			}
		})
	},
	update:function(){},
	unbind:function(){}
})
Vue.directive('render',{
	bind:function(){
		this.vm.$http.jsonp("http://localhost:8066/city.json").then(function(res){
				var data=res.body.data.citylist;
		         var str='';
		         for(var i in data){
		            for(var j in data[i]){
		              for(var m in data[i][j])
		                str+='<li style="width:100%;color:#fff;height:48px;line-height:48px;border-bottom:1px solid #9ea4aa;font-size:12px">'+m+'</li>';
		          }

         }
         $$("#ul").append(str);
		})

	},
	updte:function(){},
	unbind:function(){}
})
Vue.directive('swipe',{
	bind:function(){
		$$(function(){
			var mySwiper=new Swiper('.swiper-container',{
			pagination:'.swiper-pagination',
			//是否显示到原点的分页器
			//scrollbar:'.swiper-scrollbar',
			//是否显示滚动条
			prevButton:'.swiper-button-prev',
			//是否显示左右按钮
			nextButton:'.swiper-button-next',
			//direction:'vertical',//水平还是垂直
			autoplay:2000,
			paginationClickable:true,
			//原点分页是否能点击true可点,默认不能点
			autoplayDisableOnInteraction:false,
			//设置滑动后仍然可以自动播放
			loop:true,//是否循环切换默认不循环
			//slidesPerView:3,//每次显示几张图片
			//spaceBetween:10//当一行显示多张图片时图片的间距
		});

		})
	}
})
Vue.directive('events',{
	bind:function(){
		$$(this.el).find('li').eq(0).css('background','#2ab2ec').find('a').css('color','#fff');
		$$(this.el).find('li').on('click',function(){
			$$(this).css('background','#2ab2ec').siblings().css('background','');
			$$(this).find('a').css('color','#fff').parent().siblings().find('a').css('color','#000')
		})
	}
})
Vue.directive('letgo',{
	bind:function(){
		$$(this.el).on('focus',function(){
			location.href='http://localhost:8080/#!/search';
		})
	}
})
Vue.directive('changed',{
	bind:function(){
		$$(this.el).find('li').eq(0).css({'color':'#2ab2eb','borderBottom':'1px solid #2ab2eb'});
		$$(this.el).find('li').on('click',function(){
			$$(this).css({'color':'#2ab2eb','borderBottom':'1px solid #2ab2eb'}).siblings().css({'color':'','borderBottom':''})
		})
	}
})
