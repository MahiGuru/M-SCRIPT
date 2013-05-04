(function(){
		  

  $.fn.treeList = function(options){
	  	
		  var settings = {
					isTitleEnabled : true,
					title : "MyHeader",
					isDragable : true,
					isResizable : true,
					isMinimizeBtn : true,
					isMaximizeBtn : true,
					isCloseBtn : true
				     }

			var defaults = $.fn.extend(settings, options);
			
			//Variable Declaration for  settings......
			var $this = $(this);
			var isDragableTrue = defaults.isDragable, isResizable = defaults.isResizable,  isTitleEnabled = defaults.isTitleEnabled;
			 var title = defaults.title, isMinimizeBtn = defaults.isMinimizeBtn, isMaximizeBtn = defaults.isMaximizeBtn, isCloseBtn = defaults.isCloseBtn;
			
			$this.find("li").each(function(i){
				$(this).addClass("treeLi");	
				if($this.find("li").has("ul")){
					//$(this).prepend("<span class='showPlus'></span>");
					$(this).find("ul").hide();
				}
			});
			$this.on("click", "li .showMinus", function(){
				$(this).removeClass("showMinus").addClass("showPlus");
				$(this).parent().find("ul").hide();	
			});
			$this.on("click", "li .showPlus", function(){	
				$this.find("li").find("ul").hide();
				$this.find("li").find(".showMinus").removeClass("showMinus").addClass("showPlus");
				$(this).removeClass("showPlus").addClass("showMinus");
				$(this).parent().find("ul").show();	
			})
			
			
   } // widget function end here ................
		 
		 
		 
		 
		  
})(jQuery)