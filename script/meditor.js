(function () {
    $.fn.MEditor = function (options) {
        var defaults = {
            isLeft: true,
            isRight: true,
            isTop: false,
            isBottom: false,
            isContent: true,
            isLeftWidth: 10, // calculate baesd on percentage..........
            isRightWidth: 30, // calculate based on persentage...........
            isTopHeight: 20, // calculate in percentage ...........
            isBottomHeight: 40, // calculate in percentage ...............
            isLeftContainerClassName: "leftContainer",
            isCenterContainerClassName: "contentArea",
            isRightContainerClassName: "rightContainer",
            isTopContainerClassName: "topContainer",
            isBottomContainerClassName: "bottomContainer",
            isTopArrowClass: "tbcurve",
            isBottomArrowClass: "bbcurve",
            isLeftArrowClass: "lbcurve",
            isRightArrowClass: "rbcurve",
            isContainerMinWidth: 200,
            isContainerMinHeight: 200,
            isHavePaddingForContianers: 10,
            isLeftRightArrowPosition: "center",
            contentinArrowClass: "Close",
            containerClassArray: ["leftContainer", "rightContainer", "topContainer", "bottomContainer", "contentArea"] //update your classnames using this property
        };
        var settings = $.extend(defaults, options);
        var mthis = $(this);
        //alert(mthis.find("."+settings.isLeftContainerClassName).html());
        thisWidth = mthis.width();
        bottomContent = "position:absolute;";
        var leftState, rightState, topState, bottomState, contentState;

        lrCSS = "height:" + (100 - (settings.isTopHeight + settings.isBottomHeight)) + "%; width:100%; top:" + settings.isTopHeight + "%; position:relative; bottom:" + settings.isBottomHeight + "%";
        var findContentWidth = (100 - (settings.isTopHeight + settings.isBottomHeight));
        contentCSS = "height:100%; position:absolute; width : " + (100 - (settings.isLeftWidth + settings.isRightWidth)) + "%; left: " + settings.isLeftWidth + "% ";

        mthis.css({ "min-width": settings.isContainerMinWidth + "px", "min-height": settings.isContainerMinHeight + "px" });
        if (settings.isLeftRightArrowPosition == "top" || settings.isLeftRightArrowPosition == "Top") {
            settings.isLeftRightArrowPosition = "bottom:auto; top:0;"
        }
        if (settings.isLeftRightArrowPosition == "bottom" || settings.isLeftRightArrowPosition == "Bottom") {
            settings.isLeftRightArrowPosition = "bottom:0; top:auto;"
        }
        if (settings.isLeftRightArrowPosition == "center" || settings.isLeftRightArrowPosition == "center") {
            settings.isLeftRightArrowPosition = "bottom:50%; top:auto;"
        }
        leftState = { "width": settings.isLeftWidth + "%", "left": "0" };
        leftStateCurve = "<span class='" + settings.isLeftArrowClass + "' style='" + bottomContent + settings.isLeftRightArrowPosition + " right:0'>" + settings.contentinArrowClass + "</span>";
        rightState = { "width": settings.isRightWidth + "%", "right": "0" }
        rightStateCurve = "<span class='" + settings.isRightArrowClass + "' style='" + bottomContent + settings.isLeftRightArrowPosition + " left:0'>" + settings.contentinArrowClass + "</span>"
        topState = { "width": "100%", "height": settings.isTopHeight + "%", "top": "0" };
        topStateCurve = "<span class='" + settings.isTopArrowClass + "' style='" + bottomContent + "left:50%; bottom:0'>" + settings.contentinArrowClass + "</span>";
        bottomState = { "width": "100%", "height": settings.isBottomHeight + "%", "bottom": "0" }
        bottomStateCurve = "<span class='" + settings.isBottomArrowClass + "' style='" + bottomContent + "left:50%; top:0'>" + settings.contentinArrowClass + "</span>";

        if (!settings.isLeft && !settings.isRight) {
            contentCSS = "height:100%; position:relative; width : 100%";
            findContentWidth = 100;
            mthis.find("." + settings.isLeftContainerClassName).hide();
            mthis.find("." + settings.isRightContainerClassName).hide();
        }
        if (!settings.isLeft && settings.isRight) {
            contentCSS = "height:100%; position:relative; width : " + (100 - (settings.isRightWidth)) + "%; left: 0px ";
            findContentWidth = (100 - (settings.isRightWidth));
            mthis.find("." + settings.isLeftContainerClassName).hide();
        }
        if (settings.isLeft && !settings.isRight) {
            contentCSS = "height:100%; position:relative; width : " + (100 - (settings.isLeftWidth)) + "%; left: " + settings.isLeftWidth + "% ";
            findContentWidth = (100 - (settings.isLeftWidth));
            mthis.find("." + settings.isRightContainerClassName).hide();
        }
        if (settings.isLeft && settings.isRight) {
            findContentWidth = (100 - (settings.isLeftWidth + settings.isRightWidth));
        }
        if (!settings.isTop && !settings.isBottom) {
            lrCSS = "height:100%; position:relative";
        }
        if (!settings.isTop && settings.isBottom) {
            lrCSS = "height:" + (100 - (settings.isBottomHeight)) + "%; position:relative";
            tbHeight = settings.isBottomHeight
        }
        if (settings.isTop && !settings.isBottom) {
            lrCSS = "height:" + (100 - (settings.isTopHeight)) + "%; position:relative; top:" + settings.isTopHeight + "%";
            tbHeight = settings.isTopHeight
        }
        if (settings.isTop && settings.isBottom) {
            tbHeight = settings.isTopHeight + settings.isBottomHeight;
        }
        var centerContentHtml = mthis.find("." + settings.isCenterContainerClassName).html();
        var leftContentHtml = mthis.find("." + settings.isLeftContainerClassName).html();
        var rightContentHtml = mthis.find("." + settings.isRightContainerClassName).html();

        mthis.append("<div class='leftRightwrapper' style='" + lrCSS + "'></div>");
        mthis.find("." + settings.isCenterContainerClassName + ", ." + settings.isLeftContainerClassName + ", ." + settings.isRightContainerClassName).html("");
        mthis.find("." + settings.isCenterContainerClassName).append("<div style='padding:" + settings.isHavePaddingForContianers + "px'>" + centerContentHtml + "</div>");
        mthis.find("." + settings.isLeftContainerClassName).append("<div style='padding:" + settings.isHavePaddingForContianers + "px'>" + leftContentHtml + "</div>");
        mthis.find("." + settings.isRightContainerClassName).append("<div style='padding:" + settings.isHavePaddingForContianers + "px'>" + rightContentHtml + "</div>");

        if (settings.isLeft) {
            mthis.find("." + settings.isLeftContainerClassName).css(leftState).append(leftStateCurve).appendTo(".leftRightwrapper");
        }
        if (settings.isRight) {
            mthis.find("." + settings.isRightContainerClassName).css(rightState).append(rightStateCurve).appendTo(".leftRightwrapper");
        }
        if (settings.isTop) {
            mthis.find("." + settings.isTopContainerClassName).css(topState).append(topStateCurve);
        }
        if (settings.isBottom) {
            mthis.find("." + settings.isBottomContainerClassName).css(bottomState).append(bottomStateCurve);
        }
        if (settings.isContent) {
            mthis.find("." + settings.isCenterContainerClassName).attr("style", contentCSS).appendTo(".leftRightwrapper");
        }
        if (!settings.isTop) {
            $("." + settings.isTopContainerClassName).hide();
        }
        if (!settings.isBottom) {
            $("." + settings.isBottomContainerClassName).hide();
        }
        if (settings.isLeft || settings.isTop || settings.isRight || settings.isBottom || settings.isContent) {

            if (!mthis.find("div").hasClass(settings.isLeftContainerClassName) || !mthis.find("div").hasClass(settings.isRightContainerClassName) || !mthis.find("div").hasClass(settings.isCenterContainerClassName)) {
                alert("Please add required Div(Left, Right, Content, Top, Bottom) Container in your Dom area...");
            }
        }
        if (!settings.isContent) {
            alert("please Intialize the isContent to true");
        }

        $.fn.clickEvent = function (lbCurve, rbCurve, tbCurve, bbCurve) {
            $(document).on("click", "." + lbCurve + ", ." + rbCurve + ", ." + tbCurve + ", ." + bbCurve, function () {
                _this = $(this);
                containerHeight = $(this).parent().height();
                containerWidth = $(this).parent().width();
                contentAreaWidth = mthis.find("." + settings.isCenterContainerClassName).width();
                lrwrapperHeight = mthis.find(".leftRightwrapper").outerHeight();
                lrwrapperWidth = mthis.find(".leftRightwrapper").width();

                if (_this.hasClass(lbCurve)) {
                    if (mthis.find($("." + settings.isLeftContainerClassName)).hasClass("actionContainer")) {
                        if ($("." + settings.isRightContainerClassName).hasClass("actionContainer")) {
                            mthis.find("." + settings.isCenterContainerClassName).animate({ "left": (settings.isLeftWidth) + "%", "width": (findContentWidth + settings.isRightWidth) + "%" });
                        } else {
                            mthis.find("." + settings.isCenterContainerClassName).animate({ "left": (settings.isLeftWidth) + "%", "width": (findContentWidth) + "%" });
                        }
                        _this.css({ "left": "auto", "right": "0" }).appendTo("." + settings.isLeftContainerClassName);
                        mthis.find($("." + settings.isLeftContainerClassName)).removeClass("actionContainer");
                    } else {
                        if ($("." + settings.isRightContainerClassName).hasClass("actionContainer")) {
                            mthis.find("." + settings.isCenterContainerClassName).animate({ "left": "0px", "width": (100) + "%" });
                        } else {
                            mthis.find("." + settings.isCenterContainerClassName).animate({ "left": "0px", "width": (findContentWidth + settings.isLeftWidth) + "%" });
                        }
                        _this.css({ "left": "0", "right": "auto" }).appendTo("." + settings.isCenterContainerClassName);
                        mthis.find($("." + settings.isLeftContainerClassName)).addClass("actionContainer");
                    }
                } else if (_this.hasClass(rbCurve)) {
                    if (mthis.find($("." + settings.isRightContainerClassName)).hasClass("actionContainer")) {
                        if ($("." + settings.isLeftContainerClassName).hasClass("actionContainer")) {
                            mthis.find("." + settings.isCenterContainerClassName).animate({ "right": (settings.isRightWidth) + "%", "width": (findContentWidth + settings.isLeftWidth) + "%" });
                        } else {
                            mthis.find("." + settings.isCenterContainerClassName).animate({ "right": (settings.isRightWidth) + "%", "width": (findContentWidth) + "%" });
                        }
                        _this.css({ "left": "0", "right": "auto" }).appendTo("." + settings.isRightContainerClassName);
                        mthis.find($("." + settings.isRightContainerClassName)).removeClass("actionContainer");
                    } else {
                        if ($("." + settings.isLeftContainerClassName).hasClass("actionContainer")) {
                            mthis.find("." + settings.isCenterContainerClassName).animate({ "right": "0px", "width": (100) + "%" });
                        } else {
                            mthis.find("." + settings.isCenterContainerClassName).animate({ "right": "0px", "width": (findContentWidth + settings.isRightWidth) + "%" });
                        }
                        _this.css({ "left": "auto", "right": "0" }).appendTo("." + settings.isCenterContainerClassName);
                        mthis.find($("." + settings.isRightContainerClassName)).addClass("actionContainer");
                    }
                } else if ($(this).hasClass(tbCurve)) {
                    if (settings.isBottom) {
                        if (mthis.find($("." + settings.isTopContainerClassName)).hasClass("actionContainer")) {

                            if ($("." + settings.isBottomContainerClassName).hasClass("actionContainer")) {
                                mthis.find(".leftRightwrapper").animate({ "top": settings.isTopHeight + "%", "height": (100 - settings.isTopHeight) + "%" });
                            } else {
                                mthis.find(".leftRightwrapper").animate({ "top": settings.isTopHeight + "%", "height": (100 - tbHeight) + "%" });
                            }
                            _this.css({ "top": "auto", "bottom": "0" }).appendTo("." + settings.isTopContainerClassName);
                            mthis.find($("." + settings.isTopContainerClassName)).removeClass("actionContainer");
                        } else {
                            if ($("." + settings.isBottomContainerClassName).hasClass("actionContainer")) {
                                mthis.find(".leftRightwrapper").animate({ "top": "0px", "height": "100%" });
                            } else {
                                mthis.find(".leftRightwrapper").animate({ "top": "0px", "height": (100 - settings.isBottomHeight) + "%" });
                            }
                            _this.css({ "top": "0" }).appendTo("." + settings.isCenterContainerClassName);
                            mthis.find($("." + settings.isTopContainerClassName)).addClass("actionContainer");
                        }
                    } else {
                        if (mthis.find($("." + settings.isTopContainerClassName)).hasClass("actionContainer")) {
                            mthis.find(".leftRightwrapper").animate({ "top": settings.isTopHeight + "%", "height": (100 - settings.isTopHeight) + "%" });
                            _this.css({ "top": "auto", "bottom": "0" }).appendTo("." + settings.isTopContainerClassName);
                            mthis.find($("." + settings.isTopContainerClassName)).removeClass("actionContainer");
                        } else {
                            mthis.find(".leftRightwrapper").animate({ "top": "0px", "height": "100%" });
                            _this.css({ "top": "0" }).appendTo("." + settings.isCenterContainerClassName);
                            mthis.find($("." + settings.isTopContainerClassName)).addClass("actionContainer");
                        }
                    }
                } else if ($(this).hasClass(bbCurve)) {
                    if (settings.isTop) {
                        if (mthis.find($("." + settings.isBottomContainerClassName)).hasClass("actionContainer")) {
                            if ($("." + settings.isTopContainerClassName).hasClass("actionContainer")) {
                                mthis.find(".leftRightwrapper").animate({ "bottom": settings.isBottomHeight + "%", "height": (100 - settings.isBottomHeight) + "%" });
                            } else {
                                mthis.find(".leftRightwrapper").animate({ "bottom": settings.isBottomHeight + "%", "height": (100 - tbHeight) + "%" });
                            }
                            _this.css({ "top": "0" }).appendTo("." + settings.isBottomContainerClassName);
                            mthis.find($("." + settings.isBottomContainerClassName)).removeClass("actionContainer");
                        } else {
                            if ($("." + settings.isTopContainerClassName).hasClass("actionContainer")) {
                                mthis.find(".leftRightwrapper").animate({ "bottom": "0px", "height": "100%" });
                            } else {
                                mthis.find(".leftRightwrapper").animate({ "bottom": "0px", "height": (100 - settings.isTopHeight) + "%" });
                            }
                            _this.css({ "top": "auto", "bottom": "0" }).appendTo("." + settings.isCenterContainerClassName);
                            mthis.find($("." + settings.isBottomContainerClassName)).addClass("actionContainer");
                        }
                    } else {
                        if (mthis.find($("." + settings.isBottomContainerClassName)).hasClass("actionContainer")) {
                            mthis.find(".leftRightwrapper").animate({ "bottom": "0px", "height": (100 - settings.isBottomHeight) + "%" });
                            _this.css({ "top": "0" }).appendTo("." + settings.isBottomContainerClassName);
                            mthis.find($("." + settings.isBottomContainerClassName)).removeClass("actionContainer");
                        } else {
                            mthis.find(".leftRightwrapper").animate({ "bottom": "0px", "height": "100%" });
                            _this.css({ "top": "auto", "bottom": "0" }).appendTo("." + settings.isCenterContainerClassName);
                            mthis.find($("." + settings.isBottomContainerClassName)).addClass("actionContainer");
                        }
                    }
                }
                //mthis.find(".leftRightwrapper").css({"top":"0px"})
            });
        };
        mthis.clickEvent(settings.isLeftArrowClass, settings.isRightArrowClass, settings.isTopArrowClass, settings.isBottomArrowClass);

    }; // Editor Function End here ---------

})(jQuery);