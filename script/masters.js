var historyRegister = '';
var folderId = dGetClass = '';
var storeComments = '';
var zind;
function mScriptFunction() {
    this.history = name;
    this.string = "this is string";
}

mScriptFunction.prototype.methods = {
    historyRegister: '',
    __this: this,
    init: function() {
        this.showDate();
        //this.localStorageData();
        this.thumbnailClickEvent("thumbnail_Li", "thumbnail_LiActive");
        this.thubnailDblClickEvent("dblclick", "thumbnail_Li", "myWorksFolderIcon", "jWorksFolderDiv", "thumbnail_LiActive", "My Javascript Works");
        this.thubnailDblClickEvent("dblclick", "thumbnail_Li", "myDesignFolderIcon", "dWorksFolderDiv", "thumbnail_LiActive", "My Desinging Works");
        this.thubnailDblClickEvent("click", "thumbUlIcons li", "myWorksFolderIcon", "jWorksFolderDiv", "thumbnail_LiActive", "My Javascript Works");
        this.thubnailDblClickEvent("click", "thumbUlIcons li", "myDesignFolderIcon", "dWorksFolderDiv", "thumbnail_LiActive", "My Desinging Works");
        this.thubnailDblClickEvent("dblclick", "thumbnail_Li", "aboutIcon", "AboutmeFolderDiv", "thumbnail_LiActive", "About Me");
        this.thubnailDblClickEvent("dblclick", "folderList li", "imgView", "lightImg", "thumbnail_LiActive", "Images");
        this.listCategoryClickEvent();
        this.clickEventonFolder();
        this.forwordBackEvent();
        this.editorClick();
        this.isWidgetsClick();
        this.isMiscClick();
        this.isClockWidget();
        this.isCalenderClick();
        this.newFolderEvent();
        this.textFileEvent();

        
    },
    thumbnailClickEvent: function(selectorName, thumbActiveClass) {

        $(document).on("click", "." + selectorName, function() {
            _this = $(this);
            $("." + selectorName).removeClass(thumbActiveClass);
            _this.addClass(thumbActiveClass);

        });
    },
    thubnailDblClickEvent: function(clickEvent, selectorName, folderClassName, widgetContainerClassName, thumbActiveClass, title) {

        $(document).on(clickEvent, "." + selectorName, function() {
            if ($(this).children().hasClass(folderClassName)) {
                mScriptFunction.prototype.methods.populateFolderEvent(widgetContainerClassName);
            }
            $("." + selectorName).removeClass(thumbActiveClass);
        });
    },
    populateFolderEvent: function(containerName, title) {
        var getClassName, getFolderName;
        zind += 2;
        if (containerName === "dWorksFolderDiv") title = "My Designing Works";
        else if (containerName === "jWorksFolderDiv") title = "My Javascript Works";
        else if (containerName === "AboutmeFolderDiv") title = "About Me";
        $("." + containerName).show();
        $("." + containerName).MWidget({
            "title": title,
            onLoadCallback: function() {
                $("." + containerName).find(".widgetContent").addClass("thumbanilsListView").html("");
                $("." + containerName).find(".widgetHeader .buttonsPanel").append("<span class='newFolderIcon'></span>");
                $("." + containerName).find(".widgetContent").append(treeListContent);
                $("." + containerName).find(".widgetContent").append(FolderListContent);
                $("." + containerName).find(".widgetContent").prepend("<span class='loader'></span>");
                $.ajax({
                    url: "https://api.mongolab.com/api/1/databases/myfirstdb/collections/foldersNameTable?apiKey=J7-k1v16eZQ1airGajJcdcdfUMHDGiEj",
                    data: {},
                    type: "GET",
                    contentType: "application/json",
                    success: function(data) {
                        $(".loader").hide();
                        var data = JSON.parse(data);
                        $.each(data, function(i, val) {
                            if (data[i].MOSfolderName != undefined) foldersArray = data[i].MOSfolderName;
                        });

                        //var getIndex = data[0]._id.$oid;
                        if (containerName === "dWorksFolderDiv") {
                            $.each(foldersArray.myDesignFolder.folderNames, function(i, val) {
                                getClassName = foldersArray.myDesignFolder.folderNames[i].folderLinkName;
                                getFolderName = foldersArray.myDesignFolder.folderNames[i].folderName;
                                $("." + containerName).find(".widgetContent .thumbanilsList").append("<li class='" + getClassName + "'><span class='wFolder thumbnailFolderIcon'></span><span class='thumbTitle'>" + getFolderName + "</span></li>");
                            });
                        } else if (containerName === "jWorksFolderDiv") {
                            $.each(foldersArray.myJSFolder.folderNames, function(i, val) {
                                getClassName = foldersArray.myJSFolder.folderNames[i].folderLinkName;
                                getFolderName = foldersArray.myJSFolder.folderNames[i].folderName;
                                $("." + containerName).find(".widgetContent .thumbanilsList").append("<li class='" + getClassName + "'><span class='wFolder thumbnailFolderIcon'></span><span class='thumbTitle'>" + getFolderName + "</span></li>");
                            });
                        } else if (containerName === "AboutmeFolderDiv") {
                            $.each(foldersArray.aboutMeFolder.folderNames, function(i, val) {
                                getClassName = foldersArray.aboutMeFolder.folderNames[i].folderLinkName;
                                getFolderName = foldersArray.aboutMeFolder.folderNames[i].folderName;
                                $("." + containerName).find(".widgetContent .thumbanilsList").append("<li class='" + getClassName + "'><span class='wFolder thumbnailFolderIcon'></span><span class='thumbTitle'>" + getFolderName + "</span></li>");
                            });
                        }

                        /*********** To show NewFolder functionality **************/
                        $.each(data, function(k, val) {
                            if (data[k].inDesignFolder != undefined) {

                                getIndex = data[k]._id.$oid;
                                if (containerName === "dWorksFolderDiv") {
                                    getClassName = data[k].inDesignFolder.newFolderNames[0].folderLinkName;
                                    getFolderName = data[k].inDesignFolder.newFolderNames[0].folderName;
                                    $("." + containerName).find(".widgetContent .thumbanilsList").append("<li class='" + getClassName + "'><span class='folderIndex' style='display:none'>" + getIndex + "</span><span class='wFolder thumbnailFolderIcon'></span><span class='thumbTitle'>" + getFolderName + "</span></li>");
                                }
                            }
                            ;
                            if (data[k].inJSFolder != undefined) {
                                if (containerName === "jWorksFolderDiv") {
                                    getIndex = data[k]._id.$oid;
                                    getClassName = data[k].inJSFolder.newFolderNames[0].folderLinkName;
                                    getFolderName = data[k].inJSFolder.newFolderNames[0].folderName;
                                    $("." + containerName).find(".widgetContent .thumbanilsList").append("<li class='" + getClassName + "'><span class='folderIndex' style='display:none'>" + getIndex + "</span><span class='wFolder thumbnailFolderIcon'></span><span class='thumbTitle'>" + getFolderName + "</span></li>");
                                }
                            }
                        });


                    },
                    error: function() {
                        alert("error");
                    }								  
                });
            }
        });
    },
    newFolderEvent: function() {
        $(document).on("click", ".newFolderIcon", function(containerName) {
            var k = "inDesignFolder"
            _this = $(this);
            var getClass = _this.parents("div[title='FolderDivs']").attr("class");
            containerName = getClass;
            var getID = $(".folderIndex").text();
            if (_this.parents("div").hasClass("dWorksFolderDiv") === true) {
                mScriptFunction.prototype.methods.ajaxMethod({
                    url: "https://api.mongolab.com/api/1/databases/myfirstdb/collections/foldersNameTable?apiKey=J7-k1v16eZQ1airGajJcdcdfUMHDGiEj",
                    type: "POST",
                    data: JSON.stringify({ "inDesignFolder": { "newFolderNames": [{ "folderName": "NewFolder", "folderLinkName": "NewFolderLink" }] } }),
                    successMethod: function(data) {
                        mScriptFunction.prototype.methods.populateFolderEvent(containerName);
                    },
                    errorMethod: function(error, errorThrown) {
                        alert("error");
                    }
                });
            } else if (_this.parents("div").hasClass("jWorksFolderDiv") === true) {
                mScriptFunction.prototype.methods.ajaxMethod({
                    url: "https://api.mongolab.com/api/1/databases/myfirstdb/collections/foldersNameTable?apiKey=J7-k1v16eZQ1airGajJcdcdfUMHDGiEj",
                    type: "POST",
                    data: JSON.stringify({ "inJSFolder": { "newFolderNames": [{ "folderName": "NewFolder", "folderLinkName": "NewFolderLink" }] } }),
                    successMethod: function(data) {
                        mScriptFunction.prototype.methods.populateFolderEvent(containerName);
                    },
                    errorMethod: function(error, errorThrown) {
                        alert("error");
                    }
                });
            }
        });
    },
    textFileEvent: function() {
        $(document).on("dblclick", ".textFileIcon", function() {
            $(".textFileComments").show().MWidget({
                title: "New Text File",
                isCategoryPanelEnable: false,
                onLoadCallback: function() {
                    $(".textAreaCommnet").val(storeComments);
                    $(this).css({ "z-index": "666" });
                }
            });
        });
        storeComments = $(".textAreaCommnet").val();
        $(document).on("click", ".textFileComments .widgetContent", function(event) {
            event.stopImmediatePropagation();
                if (storeComments == undefined) storeComments = $(".commentsTxt").text();
                $(this).html("<textarea class='textAreaCommnet'>"+storeComments+"</textarea>");
	            $(this).find(".textAreaCommnet").focus();
	            
            saveBeforeContent = storeComments;
        });
        /*$(document).on("click", ".textAreaCommnet", function(event) {
            event.stopImmediatePropagation();
        });*/
        $(document).on("click", ".comments_save_btn", function() {
            saveBeforeLength = storeComments.length;
            if (saveBeforeLength == $(".textAreaCommnet").val().length && saveBeforeContent != $(".textAreaCommnet").val()) {
                alert("you edited previous comments");
                $(".textAreaCommnet").val(storeComments);
                return false;
            }
            
            if (saveBeforeLength <= $(".textAreaCommnet").val().length) {
                storeComments = $(".textAreaCommnet").val();
                alert("Thanks for your Comments");
            }
            else {
                alert("you don't have access to remove the comments");
                $(".textAreaCommnet").val(storeComments);
                return false;
            }
            return false;
        });
    },
	listCategoryClickEvent: function (selectorName, folderArray) {
        selectorNameArray = ["listCategoryIcon", "treeCategoryIcon", "thumbnailCategoryIcon"];
        selectorActiveClassArray = ["listCategoryIconActive", "treeCategoryIconActive", "thumbnailCategoryIconActive"];
        widgetContentClassArray = ["listView", "thumbanilsListView", "thumbanilsView"];
        folderArray = ["dWorksFolderDiv", "jWorksFolderDiv", "AboutmeFolderDiv"];
        $(document).on("click", "." + selectorNameArray[0] + ", ." + selectorNameArray[1] + ", ." + selectorNameArray[2] + "", function () {
            mthis = $(this);
            if (mthis.parents().hasClass(folderArray[0])) {

                $("." + folderArray[0]).find(".categoryPanel span").removeClass(selectorActiveClassArray[0] + " " + selectorActiveClassArray[1] + " " + selectorActiveClassArray[2]);
            }
            if (mthis.parents().hasClass(folderArray[1])) {
                $("." + folderArray[1]).find(".categoryPanel span").removeClass(selectorActiveClassArray[0] + " " + selectorActiveClassArray[1] + " " + selectorActiveClassArray[2]);
            }
            if (mthis.parents().hasClass(folderArray[2])) {
                $("." + folderArray[2]).find(".categoryPanel span").removeClass(selectorActiveClassArray[0] + " " + selectorActiveClassArray[1] + " " + selectorActiveClassArray[2]);
            }
            if (mthis.hasClass(selectorNameArray[0])) {
                $(this).addClass(selectorActiveClassArray[0]);
                hasFolderMethod(mthis, 1, 2, widgetContentClassArray[0]);
            }
            if (mthis.hasClass(selectorNameArray[1])) {
                $(this).addClass(selectorActiveClassArray[1]);
                hasFolderMethod(mthis, 0, 2, widgetContentClassArray[1]);
            }
            if (mthis.hasClass(selectorNameArray[2])) {
                $(this).addClass(selectorActiveClassArray[2]);
                hasFolderMethod(mthis, 0, 1, widgetContentClassArray[2]);
            }
        });
        function hasFolderMethod(selectorThis, removeNum1, removeNum2, addClassName) {
            if (mthis.parents().hasClass(folderArray[0])) {
                $("." + folderArray[0]).find(".widgetContent").removeClass(widgetContentClassArray[removeNum1] + " " + widgetContentClassArray[removeNum2]).addClass(addClassName);
            }
            if (mthis.parents().hasClass(folderArray[1])) {

                $("." + folderArray[1]).find(".widgetContent").removeClass(widgetContentClassArray[removeNum1] + " " + widgetContentClassArray[removeNum2]).addClass(addClassName);
            }
            if (mthis.parents().hasClass(folderArray[2])) {

                $("." + folderArray[2]).find(".widgetContent").removeClass(widgetContentClassArray[removeNum1] + " " + widgetContentClassArray[removeNum2]).addClass(addClassName);
            }
        } /* hasFolderMethod function end here */
    },
    clickEventonFolder: function () {
        $(document).on("dblclick", ".templatesLink, .logosLink, .MISCDesignsLink, .pluginLink, .tutorialLink, .MISCJSLink, .myPicturesLink", function () {
            lthis = $(this);
			var folderParentClass = lthis.parents("div[title='FolderDivs']").attr("class");
            $("."+folderParentClass).find(".forwordBtn").removeClass("forwordBtn").addClass("forwordBtnDisabled");
                $("."+folderParentClass).find(".foldersInner").hide();
				if(lthis.hasClass("templatesLink")){
					$("."+folderParentClass).find(".widgetContent .FolderShowDiv").append(templatesInnerFolderContent);
                	$(".templatesFolderDiv").show(); historyRegister = $(".templatesFolderDiv").attr("historyStatus");
                }
                else if(lthis.hasClass("logosLink")){
					$("."+folderParentClass).find(".widgetContent .FolderShowDiv").append(logosInnerFolderContent);
                	$(".logosFolderDiv").show(); historyRegister = $(".logosFolderDiv").attr("historyStatus");  
                }
                else if (lthis.hasClass("MISCDesignsLink")) {
			        $("."+folderParentClass).find(".widgetContent .FolderShowDiv").append(MISCDesignInnerFolderContent);
                	$(".DesignMISCFolderDiv").show(); historyRegister = $(".DesignMISCFolderDiv").attr("historyStatus");
            	}
                else if (lthis.hasClass("pluginLink")) {
			        $("."+folderParentClass).find(".widgetContent .FolderShowDiv").append(pluginInnerFolderContent);
                	$(".pluginsFolderDiv").show(); historyRegister = $(".pluginsFolderDiv").attr("historyStatus");
            	}
                else if (lthis.hasClass("tutorialLink")) {
			        $("."+folderParentClass).find(".widgetContent .FolderShowDiv").append(tutorialInnerFolderContent);
                	$(".tutorialFolderDiv").show(); historyRegister = $(".tutorialFolderDiv").attr("historyStatus");
            	}
                else if (lthis.hasClass("MISCJSLink")) {
			        $("."+folderParentClass).find(".widgetContent .FolderShowDiv").append(MISCJSInnerFolderContent);
                	$(".JSMISCFolderDiv").show(); historyRegister = $(".JSMISCFolderDiv").attr("historyStatus");
            	}
                else if (lthis.hasClass("myPicturesLink")) {
			        $("."+folderParentClass).find(".widgetContent .FolderShowDiv").append(photosInnerFolderContent);
                	$(".photosFolderDiv").show(); historyRegister = $(".photosFolderDiv").attr("historyStatus");
            	}
            $("."+folderParentClass).find(".backBtnDisabled").removeClass("backBtnDisabled").addClass("backBtn");

        });
		
		
    },
	ajaxMethod : function(options) {
	    var defaults = {
	        url: "",
	        data: {},
	        type: "GET",
	        async : false,
	        contentType: "application/json",
	        successMethod: function() {
	        },
	        errorMethod: function() {
	        }
	    };
		var settings = $.extend(defaults, options);
		$.ajax({ 
					url:settings.url,
					type: settings.type,
					data:settings.data,
					contentType: "application/json",
					async : false,
					success : function(data){
						settings.successMethod(data);
					},
					error : function(){
						settings.errorMethod();
					}
								  
			});
	},
    forwordBackEvent: function () {
        $(document).on("click", ".backBtn", function () {
            var findParentClass = $(this).parents("div[title='FolderDivs']").attr("class");
            if ($(this).parents().hasClass(findParentClass)) {
                $("."+findParentClass).find(".foldersInner").hide();
                $("."+findParentClass).find(".folderFrontArea").show();
                $("."+findParentClass).find(".forwordBtnDisabled").removeClass("forwordBtnDisabled").addClass("forwordBtn");
            }
            $(this).removeClass("backBtn").addClass("backBtnDisabled");
        });
        $(document).on("click", ".forwordBtn", function () {
            var findParentClass = $(this).parents("div[title='FolderDivs']").attr("class");
            if ($(this).parents().hasClass(findParentClass)) {
                 $("."+findParentClass).find(".foldersInner").hide();
                 $("."+findParentClass).find(".foldersInner[historyStatus='" + historyRegister + "']").show();
                 $("."+findParentClass).find(".backBtnDisabled").removeClass("backBtnDisabled").addClass("backBtn");
            }
            $(this).removeClass("forwordBtn").addClass("forwordBtnDisabled");
        });
    },
    
    showDate: function () {

        function currentDate() {
            var date = new Date(), getHour = date.getHours(), getMinuts = date.getMinutes(), am = " AM";
            if (getHour <= 10) getHour = "0" + getHour;
            if (getMinuts <= 10) getMinuts = "0" + getMinuts;
            if (getHour > 12) {
                getHour = getHour - 12; am = " PM";
            }
            else {
                am = " AM";
            }
            getHourMinutes = getHour + ":" + getMinuts;
            gDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getUTCFullYear();
            $(".timeShow").html(getHourMinutes + am); $(".dateShow").html(gDate);
        }
        currentDate();
        setInterval(function () { currentDate(); }, 1000 * 60);
    },
    localStorageData: function () {
        //localStorage.removeItem("countV", lk);
        var vCount = localStorage.getItem("countV");
        if (vCount == "NaN" || vCount == null) vCount = 1;
        vCount = parseInt(vCount) + 1;
        localStorage.setItem("countV", vCount);
        $(".visitsCount").html(vCount);
    },
    isClockWidget: function () {

        var TimeGet = new Date();
        hoursGet = TimeGet.getHours();
        minutesGet = TimeGet.getMinutes();
        secondsGet = TimeGet.getSeconds();

        var seconds = 0;
        var minutes = minutesGet * 6;
        var hours = 30 * hoursGet;
        /*if(hours >= 360) { //hours = (hours/2)-15;
        hours = 0;
        }*/
        $(".clockSpace").MWidget({
            isTitleEnabled: false,
            title: "",
            isDragable: true,
            isResizable: false,
            isMinimizeBtn: false,
            isMaximizeBtn: false,
            isCloseBtn: false,
            isMinimumWidth: 196,
            isMinimumHeight: 188,
            isCategoryPanelEnable: false,
            onCloseCallback: function () {
               
            },
            onMinimizeCallback: function () {
            },
            onMaximizeCallback: function () {
            },
            onLoadCallback: function () { },
            isHeaderPositionTop: 40

        });

        $(".minutesStick").rotate(minutes);
        $(".hoursStick").rotate(hours);

        if (minutes >= 72 && minutes <= 144) { hours += 6; $(".hoursStick").rotate(hours); }
        if (minutes >= 144 && minutes <= 215) { hours += 14; $(".hoursStick").rotate(hours); }
        if (minutes >= 216 && minutes <= 287) { hours += 20; $(".hoursStick").rotate(hours); }
        if (minutes >= 288 && minutes <= 359) { hours += 24; $(".hoursStick").rotate(hours); }
        if (minutes >= 360) { hours += 30; $(".hoursStick").rotate(hours); }

        if (!$.browser.msie) {
            setTimeout(function () { secondsAngle(); }, 1000);
            setTimeout(function () { minutesAngle(); }, (1000 * 60));
            function secondsAngle() {
                if (seconds >= 360) { seconds = 0; }
                seconds += 6;
                $(".secondsStick").rotate(seconds);
                setTimeout(secondsAngle, 1000);
            }
            function minutesAngle() {
                if (minutes >= 360) { minutes = 0; }
                minutes += 6;
                if (minutes == 72 || minutes == 144 || minutes == 216 || minutes == 288 || minutes == 360) {
                    setTimeout(hoursAngle, 10);
                }
                $(".minutesStick").rotate(minutes);
                setTimeout(minutesAngle, (1000 * 60));
            }
            function hoursAngle() {
                hours += 6;
                $(".hoursStick").rotate(hours);
            }
        }
    },
    editorClick: function () {
        $(document).on("dblclick", ".myEditorIcon", function () {
            $(".mEditor").show().MWidget({ 
				title: "M-Editor",
                isMinimizeBtn: true,
                isResizable: false,
                isCategoryPanelEnable: false,
                isMaximizeBtn: true,
                 onCloseCallback: function () {
                    $(".HTMLarea").val(""); 
                    $(".cssArea").val("");
                    $(".javascriptArea").val(""); 
                }
            });
        });
        $(".editingArea").MEditor({
            isLeft: true,
            isRight: true,
            isTop: false,
            isBottom: false,
            isContent: true,
            isLeftWidth: 30, // calculate baesd on percentage..........
            isRightWidth: 30, // calculate based on persentage...........
            isContainerMinWidth: null,
            isContainerMinHeight: null,
            isHavePaddingForContianers: 0,
            isLeftRightArrowPosition: "bottom",
           
        });

        $(".runCode").click(function () {

            if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                var xmlhttp = new XMLHttpRequest();
            }
            var htmlContent = $(".HTMLarea").val();
            var cssContent = $(".cssArea").val();
            var javascriptContent = $(".javascriptArea").val();
            $("#outputFrame").contents().find(".ouputContainer").html("<script type='text/javascript'>" + javascriptContent + "</script><style>" + cssContent + " </style>" + htmlContent);
        });


    },
    isMiscClick: function () {
        $(".startMenu").click(function (event) {
           	event.stopImmediatePropagation();
            if (!$(this).hasClass("startMenuActive")) {
                $(".allProgramesArea").show();
                $(this).addClass("startMenuActive");
            }
        });
        $(".allProgramesArea").hover(function () {
            $(this).click(function (event) {
                $(this).show();
            });
        });
        
        $(".dWorksFolderDiv, .AboutmeFolderDiv, .jWorksFolderDiv").McontextMenu({ container: "contextmenu" });
        $("#Mcontainer").McontextMenu({ container: "desktopContextMenu" });
        
        $(document).on("click", ".loginBtn", function() {
            $(".loginArea").fadeOut();
        });
        $(".dWorksFolderDiv, .AboutmeFolderDiv, .jWorksFolderDiv").on("contextmenu",".widgetContent .thumbanilsList li", function(e) {
            $("#contextmenu").find("li.deleteBtn").show();
                dGetClass = $(this).parents("div[title='FolderDivs']").attr("class");
            	if(e.button == "2") {
            		folderId = $(this).find(".folderIndex").text();
                }
			
        });
        $(document).on("click", ".deleteBtn", function(event, showDeleteClass) {
            showDeleteClass = dGetClass;
            mScriptFunction.prototype.methods.ajaxMethod({
				url : "https://api.mongolab.com/api/1/databases/myfirstdb/collections/foldersNameTable/"+folderId+"?apiKey=J7-k1v16eZQ1airGajJcdcdfUMHDGiEj",
				type : "DELETE",
				async : true,
				data : JSON.stringify({"inDesignFolder": {"newFolderNames": [{"folderName": "NewFolder","folderLinkName": "NewFolderLink"}]}}),
				successMethod : function(data) {
				    mScriptFunction.prototype.methods.populateFolderEvent(showDeleteClass); 
				},
				errorMethod : function(error, errorThrown){
					alert("You need a admin access");
				}
			});
            
        });
		$("#contextmenu ul li").mouseover(function(event) {
            $(this).find("ul").show();
        }).mouseout(function(event){ $(this).find("ul").hide();
		
		});
		
		$(document).on("click", ".userTxt", function(){
				if($(this).hasClass("changeUserTxt")){
					$(this).removeClass("changeUserTxt").html("Cancel")
					$(".userBox").hide();
					$(".changeUserBox").show();
				}
				else
				{
					$(this).addClass("changeUserTxt").html("Change User");
					$(".userBox").show();
					$(".changeUserBox").hide();
				}
		});
        $(document).on("click", ".thumbUlIcons li span", function (e) {
            if ($(this).hasClass("myWorksFolderIcon"))
                $(".jWorksFolderDiv").show();
            else if ($(this).hasClass("myDesignFolderIcon"))
                $(".dWorksFolderDiv").show();
        });
        var currentIndex, folderListLength, getImg, currentMethod;
		$(".folderList li").each(function(index){
				$(this).prepend("<span class='imgView'></span>");
			
		});
		
      /*  $(document).on("click", ".folderList li img", function (event) {
            event.stopImmediatePropagation();
            getImg = $(this).attr("src").split("/")[3];
            $(".overlaybg").show();
            $(".lightImg").show().css({ "display": "inline-block" }).find("img").attr({ "src": "images/Templates/Actual/" + getImg });
            folderListLength = $(this).parents("ul").find("li").length;
            currentIndex = $(this).parent().index();
            currentMethod = function () {
                if (currentIndex + 1 == 1) {
                    $(".Lprev").hide();
                    $(".Lnext").show();
                } else if (folderListLength > (currentIndex + 1)) {
                    $(".Lprev").show();
                } else {
                    $(".Lprev").show();
                    $(".Lnext").hide();
                }
            };
            currentMethod();
        });
        */
		
		$(document).on("click", ".Lnext", function (event) {

            currentIndex = parseInt(currentIndex) + 1;
            $(".lightImg").show().find("img").attr({ "src": "images/Templates/Actual/" + (parseInt(currentIndex) + 1) + ".jpg" });
            currentMethod();
        });
        $(document).on("click", ".Lprev", function (event) {

            $(".lightImg").show().find("img").attr({ "src": "images/Templates/Actual/" + (parseInt(currentIndex)) + ".jpg" });
            currentIndex = parseInt(currentIndex) - 1;
            currentMethod();
        });
        $(document).on("click", ".overlaybg", function () {
            $(".lightImg").hide().find("img").attr("src", "");
            $(this).hide();
        });
        $(document).on("click",".startMenuWorksIcon", function() {
            $(".dWorksFolderDiv, .AboutmeFolderDiv, .jWorksFolderDiv, .mEditor, .textFileComments").hide();
        });
        
        $(".shutdown_txt, .shutdownList").hover(function() {
            $(".shutdownList").show();
        }, function() {
            $(".shutdownList").hide();
        });
        $(document).on("click",".shutDownWindow, .restartWindow", function() {
            if ($(this).hasClass("restartWindow")) window.location.href = '';

        });

        $(document).on("click", function (e) {
            if ($(".startMenu").hasClass("startMenuActive")) { $(".allProgramesArea").hide(); $(".startMenu").removeClass("startMenuActive"); }
            $(document).on("click", ".startMenu", function (event) {
                event.stopImmediatePropagation();
                if ($(this).hasClass("startMenuActive")) {
                    $(".allProgramesArea").hide();
                    $(this).removeClass("startMenuActive");
                }
                else {
                    $(".allProgramesArea").show();
                    $(this).addClass("startMenuActive");
                }
            });
            $("#contextmenu").find("li.deleteBtn").hide();

        });

    },
    isWidgetsClick: function () {
        $(".boxClose").click(function () {
            $(this).parent().hide();
        });
        $(".visitorWidget").click(function () {
            $(".visitsDiv").show();
        });
        $(".clockWidget").click(function () {
            $(".clockSpace").show();
        });
    },
    isCalenderClick: function () {
        $(".myCalendar").Mcalender();

        $(document).on("click", function (event) {
            $(".myCalendar").hide();
        });
        $(document).on("click", ".dateTime, .hasMCalender", function (event) {
            event.stopImmediatePropagation();
            $(".myCalendar").show();
        });
    }
};
$(document).ready(function () {
    var mscript = new mScriptFunction();
    mscript.methods.init();
});
