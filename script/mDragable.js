(function () {

    /*
    widget method is used for dragging, resizing, minimizing, Maximizing and Closing.
    .........................................
    variables
    -----------------------------------------
    settings => for setting the varible like dragClassName and title, Resizable, minimizeBtn, Maximize, closebuttons are set to true here .....
    var documentTop,  documentLeft, documentWidth ,documentHeight   ==> finding the document scroll Top, left position and document width, height and assigned to this vaible
    var selectorWidth, selectorHeight, selectorLeft , selectorTop   ==> Finding the document Selector width and height and position of selector(Left, Top);
    isDragableTrue ==> is used for Draggable state,
    isResizableTrue => is used for Resizable state,

    pressedMouseDown pressedMouseUp moveMouse   ==> this methods are used for drag the widget...
    resizeMouseDown resizeMouseUp resizeMouseMove ==> this methods are used for resiz the widget.......

    isminimizeBtnBtn || isMaximizeBtn || isCloseBtn = Minimize and Maximize, closebuttonsfor showing the buttons on widget


    */
    $.fn.MWidget = function (options) {

        var settings = {
            isTitleEnabled: true,
            title: "MyHeader",
            isDragable: true,
            isResizable: true,
            isMinimizeBtn: true,
            isMaximizeBtn: true,
            isCloseBtn: true,
            isMinimumWidth: 400,
            isMinimumHeight: 400,
            isCategoryPanelEnable: true,
            onCloseCallback: function () {
               
                $this.find(".widgetContent").removeClass("listView thumbanilsListView thumbanilsView");
            },
            onMinimizeCallback: function () {
            },
            onMaximizeCallback: function () {
            },
            onLoadCallback: function () { $this.find(".widgetContent").addClass("thumbanilsListView"); },
            isHeaderPositionTop: 40
        };

        var defaults = $.fn.extend(settings, options);

        //Variable Declaration for  settings......
        var $this = $(this);
        var isDragableTrue = defaults.isDragable, isResizable = defaults.isResizable, isTitleEnabled = defaults.isTitleEnabled;
        var title = defaults.title, isMinimizeBtn = defaults.isMinimizeBtn, isMaximizeBtn = defaults.isMaximizeBtn, isCloseBtn = defaults.isCloseBtn;

        var documentTop = $(document).scrollTop();
        var documentLeft = $(document).scrollLeft();
        var documentWidth = $(document).width();
        var documentHeight = $(document).height();
        var selectorWidth = $this.width();
        var selectorHeight = $this.height();
        var selectorLeft = $this.position().left;
        var selectorTop = $this.position().top;
        var zindex = 1;
        $this.css({ "min-width": defaults.isMinimumWidth + "px", "min-height": defaults.isMinimumHeight + "px" });
        $(window).resize(function () {
            documentWidth = $(window).width();
            documentHeight = $(window).height();
        })

        $this.attr("dragDiv", "true");
        if (isTitleEnabled) {
            $this.prepend("<div class='widgetHeader'><h1 class=''>" + title + "</h1></div>");
        }
        else {
            $this.prepend("<div class='widgetHeader'><h1 class=''></h1></div>");
        }
        if (isDragableTrue) {
            //MousePressed Method function started here...
            var pressedMouseDown = function (e) {

                //Flag Set to True on MousePressed.....
                isDragableTrue = true;

                // Finding  Mouse Left and Top Points and Positions on MousePressed.....
                mouseLeftPoint = e.pageX;
                mouseTopPoint = e.pageY;
                getLeftPos = $this.position().left;
                getTopPos = $this.position().top;
                //Calling the MouseMove Function on MousePressed.....
                $(document).mousemove(moveMouse);
            };

            //MousePressed Release Method function started here...           
            var pressedMouseUp = function (e) {
                isDragableTrue = false;

            };

            //MouseMove Method function started here...
            var moveMouse = function (e) {
                if (isDragableTrue) {
                    selectorLeft = mouseleftPos = getLeftPos + (e.pageX - mouseLeftPoint);
                    selectorTop = mouseTopPos = getTopPos + (e.pageY - mouseTopPoint);
                    //console.log(mouseTopPos +" == "+documentTop);
                    if (mouseleftPos <= documentLeft)
                    { mouseleftPos = documentLeft }
                    else if (mouseTopPos <= documentTop) {
                        mouseTopPos = documentTop;

                    }
                    else if (mouseleftPos >= documentWidth - 50)
                    { mouseleftPos = documentWidth - 50; }
                    //alert($this.data("title"))
                    $("[dragDiv = true]").css({ "z-index": 444 });
                    $this.css({ "position": "absolute", "left": mouseleftPos + "px", "top": mouseTopPos + "px", "z-index": 555 });
                    $("body").css({ "overflow-x": "hidden" })
                }
            };
            $this.find(".widgetHeader").mousedown(pressedMouseDown);
            $(document).mouseup(pressedMouseUp);
        } //If Draggable set to True only......
        if (defaults.isCategoryPanelEnable) {
            var cPanel = '<div class="categoryPanel"><span class="thumbnailCategoryIcon"></span><span class="treeCategoryIcon treeCategoryIconActive"></span>	<span class="listCategoryIcon"></span></div>';
            $this.find(".widgetHeader").append(cPanel);
        }
        if (isResizable) {
            $this.append("<span class='resize'></span>");

            //MousePressed Method function started here...
            var resizeMouseDown = function (e) {

                //Flag Set to True on MousePressed.....
                isResizableTrue = true;
                resize = $("." + $this.attr("class"));
                // Finding  Mouse Left and Top Points and Positions on MousePressed.....
                mouseLeftPoint = e.pageX;
                mouseTopPoint = e.pageY;
                getWidth = $this.width();
                getHeight = $this.height();
                //Calling the MouseMove Function on MousePressed.....
                $(document).mousemove(resizeMoveMouse);
            };
            //MousePressed Release Method function started here...
            var resizeMouseUp = function (e) {
                isResizableTrue = false;
            };
            //MouseMove Method function started here...
            var resizeMoveMouse = function (e) {
                if (isResizableTrue) {
                    resize.css({ "width": (getWidth + (e.pageX - mouseLeftPoint)) + "px", "height": getHeight + (e.pageY - mouseTopPoint) + "px" });
                    selectorWidth = getWidth + (e.pageX - mouseLeftPoint);
                    selectorHeight = getHeight + (e.pageY - mouseTopPoint);
                }
            };
            $this.find(".resize").mousedown(resizeMouseDown);
            $(document).mouseup(resizeMouseUp);
            //$this.css({"width":"px", "height":"px"})		
        } //If Selector Resize set to True only.........
        if (isMinimizeBtn || isMaximizeBtn || isCloseBtn) {
            $this.find(".widgetHeader").prepend("<div class='buttonsPanel'></div>");
        }
        if (isMinimizeBtn) {
            $this.find(".buttonsPanel").append("<span class='minimizeBtn'></span>");
            $this.find(".minimizeBtn").click(function () {
                $this.css({ "position": "absolute", "bottom": "10px", "float": "left", "left": selectorLeft + "px" });
                $this.css({ "top": (documentHeight - 40) + "px", "min-width": "100px", "min-height": "36px", "z-index": "666" });
                $this.width("200px").height("36px");
                $this.children().hide();
                $this.find(".widgetHeader").css({ "height": "40px", "z-index": "666" }).show().find(".categoryPanel").hide();
                if (isResizable) {
                    $this.find(".resize").hide();
                }
                $this.find(".widgetHeader").unbind("mousedown", pressedMouseDown);
                defaults.onMinimizeCallback();


            });
        } // isminimizeBtn button isSet to TRUE
        if (isMaximizeBtn) {
            $this.find(".buttonsPanel").prepend("<span class='maximizeBtn'></span>");
            $this.find(".maximizeBtn").click(function () {
                $("[dragDiv = true]").css({ "z-index": 444 });
                $this.find(".widgetHeader").bind("mousedown", pressedMouseDown);
                $this.children().show();
                $this.find(".widgetHeader").find(".categoryPanel").show();
                if (parseInt($this.css("width")) < selectorWidth) {
                    $this.css({ "width": selectorWidth + "px", "height": selectorHeight + "px", "left": selectorLeft + "px", "top": selectorTop + "px", "position": "absolute", "z-index": 555 })
                } else if (parseInt($this.css("width")) == selectorWidth) {
                    $this.css({ "width": documentWidth + "px", "height": documentHeight + "px", "left": "0px", "top": "0px", "position": "absolute", "z-index": 555 });
                    $this.find(".widgetHeader").unbind("mousedown", pressedMouseDown);
                } else if (parseInt($this.css("width")) > selectorWidth) {
                    $this.css({ "width": selectorWidth + "px", "height": selectorHeight + "px", "left": selectorLeft + "px", "top": selectorTop + "px", "position": "absolute", "z-index": 555 })
                }
                $this.find(".resize").show();
                defaults.onMaximizeCallback();
            });

        }
        if (isCloseBtn) {
            $this.find(".buttonsPanel").prepend("<span class='closeBtn'></span>");
            $this.find(".closeBtn").click(function () {
                $this.hide();
				$this.css({ "width": selectorWidth + "px", "height": selectorHeight + "px" });
                $this.css({ "top": selectorTop + "px", "left": selectorLeft + "px" });
                $this.find(".widgetHeader").remove();
                $this.find(".resize").remove();
                defaults.onCloseCallback();
            });
        }
        defaults.onLoadCallback();
        widgetLength = $this.find('.widgetHeader').length;
        if ($this.find(".widgetHeader").length != 1) {
            $this.find(".widgetHeader:eq(" + (widgetLength - 1) + ")").remove();
            $this.find(".resize:eq(" + (widgetLength - 1) + ")").remove();
        }
        $this.find(".widgetContent, .resize").show()
        $this.click(function () {
            $this.css({ "z-index": 666 });
        })
    } // widget function end here ................





})(jQuery)