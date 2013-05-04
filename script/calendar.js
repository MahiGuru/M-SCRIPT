(function(){
	$.fn.Mcalender = function(options){
		var defaults  = {
			isPreviousMonth : true,
			isPreviousMonthText : "",
			isNextMonth : true,
			isNextMonthText : "",
			isSelectYear : false,
			isDateFormat : "dd/mm/yyyy",
			isNextYearEnable:false,
			isPrevYearEnable:false,
			isNextYearCotent : "",
			isPrevYearContent : "",
			dateRangeFrom:"",
			dateRangeTo :"",
			hasClass :"hasMCalender",
			isDestroy : false
			
		}
		var settings = $.fn.extend(defaults, options);
		cthis = $(this);
		var monthsArray = ["january", "February", "March", "April", "May", "june", "july", "August", "Septempber", "October", "November", "December"];
		var weeksArray = ["S", "M", "T", "W", "T", "F", "S"];
		var datesinMonthArray = ["31", "28", "31", "30", "31", "30", "31", "31", "30","31", "30","31"];	
		var selectYearArray = ["1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030"];
		var date = new Date();
		var cMonth = date.getMonth();
		var cWeek = date.getDay();
		var cDate = date.getDate();
		var cFullyear = date.getFullYear();
		
		var createCalenderContainer = "<div class='myContainer'></div>";
		var createWeekRow = "";
		var createDateRow = "<div class='datesRow'></div>";
		var createNextYearContainer = "<div class='nextButton'></div>";
		var createPrevYearContainer = "<div class='prevButton'></div>";
		var devidePercentage = Math.round(100/7);
		
		if(cthis.get(0).tagName == "INPUT" || cthis.get(0).tagName == "TEXTAREA")
		{ 
			cthis.wrap("<div style='display:inline'></div>");
			cthis.after("<div class='"+settings.hasClass+"'></div>"); 
			_this = cthis.parent("div");
		}
		else { cthis.append("<div class='hasMCalender'></div>"); 
			_this = cthis;
		}
		if(_this.find(".hasMCalender").length > 0)
		{
			_this.find(".hasMCalender").each(function(i, val){
				$(this).attr("id", "hasMcalenderId_"+i);										  
			})
		}
		_this.find("."+settings.hasClass).append("<div class='changeCalenderArea'></div>");
		if(!settings.isSelectYear && !settings.isPrevYearEnable && !settings.isNextYearEnable){
			_this.find(".changeCalenderArea").hide()
		}
		if(settings.isSelectYear) {
				_this.find(".changeCalenderArea").append("<div class='changeSelectOption'><select class='selectYearOptions'>/select></div>"); 
				for(syo=0; syo<selectYearArray.length; syo++)
				{
					if(selectYearArray[syo] == cFullyear)
					{_this.find(".selectYearOptions").append("<option value='"+selectYearArray[syo]+"' selected='selected'>"+selectYearArray[syo]+"</option>") }
					else{
					_this.find(".selectYearOptions").append("<option value='"+selectYearArray[syo]+"'>"+selectYearArray[syo]+"</option>")  }
				}
				
		}	
		if(settings.isPrevYearEnable)
		{
			_this.find(".changeCalenderArea").prepend("<span class='prevYearPlace'> "+settings.isPrevYearContent+" </span>");
		}
		if(settings.isNextYearEnable) {
			_this.find(".changeCalenderArea").append("<span class='nextYearPlace'> "+settings.isNextYearCotent+" </span>");
		}	
		
		$.fn.calenderCreate= function(cYear){
			
			_this.find("."+settings.hasClass).append(createCalenderContainer);
			
			if(_this.find(".myContainer").length > 1){
				_this.find(".myContainer").remove();
				_this.find("."+settings.hasClass).append(createCalenderContainer);
			}
			_this.find(".myContainer").empty().attr("id", "calendar_"+cYear);
				$.each(datesinMonthArray, function(i, val){
						_this.find(".myContainer").append("<div class='monthRow' id='monthRow"+(i+1)+"' style='display:none'><div class='monthArea'><span class='monthName'>"+cYear+" <br />"+monthsArray[i]+" </span></div></div>");
						
						_this.find("#monthRow"+(i+1)).append("<div class='weekRow' id='weekRow"+(i+1)+"'></div>").append(createDateRow);
						$.each(weeksArray, function(week, name){
							_this.find("#weekRow"+(i+1)).append("<span class='weekName' style='width:"+devidePercentage+"%'>"+name+"</span>");
						});
						year_now = new Date(cYear, i, 1);
						StartYearDate = year_now.getDay();
						
						if(settings.dateRangeFrom && settings.dateRangeTo)
						{
							for(sd = 1; sd < settings.dateRangeFrom; sd++)
							{
								_this.find(".datesRow:eq("+i+")").append("<span class='dateNum empty' style='width:"+devidePercentage+"%'></span>");	
							}
							
							for(j=settings.dateRangeFrom; j<settings.dateRangeTo; j++)
							{
								_this.find(".datesRow:eq("+i+")").append("<span class='dateNum' style='width:"+devidePercentage+"%'>"+(j+1)+"</span>");
							}
						}
						else
						{
							for(sd = 0; sd < StartYearDate; sd++)
							{
								_this.find(".datesRow:eq("+i+")").append("<span class='dateNum empty' style='width:"+devidePercentage+"%'></span>");	
							}
							
							for(j=0; j<val; j++)
							{
								_this.find(".datesRow:eq("+i+")").append("<span class='dateNum' style='width:"+devidePercentage+"%'>"+(j+1)+"</span>");
							}
						}
						
				});
			if(settings.isPreviousMonth) { _this.find(".myContainer").find(".monthRow .monthArea").prepend("<span class='prevMonth'>"+settings.isPreviousMonthText+"</span>"); }
			if(settings.isNextMonth) { _this.find(".myContainer").find(".monthRow .monthArea").append("<span class='nextMonth'>"+settings.isNextMonthText+"</span>"); }
			_this.showMonth(cMonth); 
		}
		$.fn.showMonth = function(monthNum) 
		{
				_this.children().find(".monthRow").hide();
				_this.children().find("#monthRow"+parseInt(monthNum+1)).show();
				
		}
		// Show Previous month using below function......
		
		
		//For Creating the Calender based on Year
		_this.calenderCreate(cFullyear);
		// For showing current month...
		
		//$("#myplace").text("<div>"+_this.html()+"</div>");
		$(document).on("click", ".prevMonth", function(){
			var getID = $(this).parents(".hasMCalender:first").attr("id");										   
			prevIndex = $(this).parents(".monthRow").index();
			getyear = $(this).parents(".myContainer").attr("id").substr(9, 13);
			$("#"+getID).find(".monthRow").hide();
			$("#"+getID).find("#monthRow"+parseInt(prevIndex)).show();
			if(prevIndex <= 0){  
				_this.calenderCreate(getyear-1); 
				$("#"+getID).find(".monthRow").hide();
				$("#"+getID).find("#monthRow"+parseInt(prevIndex+12)).show();
			}
			
			
		});
		// Show next month using below function......
		$(document).on("click", ".nextMonth", function(){
			var getID = $(this).parents(".hasMCalender:first").attr("id");	
			nextIndex =$(this).parents(".monthRow").index();
			getyear = $(this).parents(".myContainer").attr("id").substr(9, 13);
			$("#"+getID).find(".monthRow").hide();
			$("#"+getID).find("#monthRow"+parseInt(nextIndex+2)).show();
			if(nextIndex >= 11){  _this.calenderCreate(parseInt(getyear)+1); 
				$("#"+getID).find(".monthRow").hide();
				$("#"+getID).find("#monthRow"+parseInt(1)).show();
			}
			
		});
		$(".selectYearOptions").change(function(){
			_this.calenderCreate($(this).val()); 
			_this.showMonth(0);
		})
		if(settings.isDestroy)
		{ 
			alert("hiii");
			alert(_this.find(".hasMCalender").length)
		//_this.find(".hasMCalender").remove()
		}
		$(document).on("click", ".prevYearPlace", function(){
			var getID = $(this).parents(".hasMCalender:first").attr("id");
			getyear = $(this).parent(".changeCalenderArea").next(".myContainer").attr("id").substr(9, 13);
			_this.calenderCreate(getyear-1);
			$("#"+getID).find(".monthRow").hide();
			$("#"+getID).find("#monthRow"+parseInt(1)).show();
		});
		$(document).on("click", ".nextYearPlace", function(){
			var getID = $(this).parents(".hasMCalender:first").attr("id");
			getyear = parseInt($(this).parent(".changeCalenderArea").next(".myContainer").attr("id").substr(9, 13));
			_this.calenderCreate(getyear+1);
			$("#"+getID).find(".monthRow").hide();
			$("#"+getID).find("#monthRow"+parseInt(1)).show();
		});
		$(document).on("click", ".dateNum", function(){
			gDate = $(this).text();
			gMonth = $(this).parents(".monthRow:first").attr("id").substr(8, 10);
			if(gDate <10) { gDate = 0+gDate}
			if(gMonth <10) { gMonth= 0+gMonth  }
			gYear = $(this).parents(".myContainer").attr("id").substr(9, 13);
			if(settings.isDateFormat == "mm/dd/yyyy" || settings.isDateFormat == "MM/DD/YYYY")cthis.val(gMonth+"/" +gDate+"/"+gYear);
			if(settings.isDateFormat == "dd/mm/yyyy" || settings.isDateFormat == "DD/MM/YYYY")cthis.val(gDate+" /" +gMonth+"/"+gYear);
			if(settings.isDateFormat == "yyyy/mm/dd" || settings.isDateFormat == "YYYY/MM/DD")cthis.val(gYear+" /" +gMonth+"/"+gDate);			
		});
		
	


} //Mcalender function end here .....	  
		  
})(jQuery);