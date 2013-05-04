var basePath = "images/Folders/";
var basePathDesignsTemplates = basePath+"Designs/Templates/";
var basePathDesignsLogos = basePath+"Designs/Logos/";
var basePathDesignsMISC = basePath+"Designs/MISC/";

var templatesInnerFolderArray = [basePathDesignsTemplates+"1.jpg", basePathDesignsTemplates+"2.jpg", basePathDesignsTemplates+"babiesPlanet.jpg", basePathDesignsTemplates+"03.jpg", basePathDesignsTemplates+"7.jpg", basePathDesignsTemplates+"3.jpg", basePathDesignsTemplates+"5.jpg", basePathDesignsTemplates+"6.jpg", basePathDesignsTemplates+"11.jpg", basePathDesignsTemplates+"12.jpg", basePathDesignsTemplates+"16.jpg", basePathDesignsTemplates+"audric1.jpg", basePathDesignsTemplates+"final_BBtemplate.jpg", basePathDesignsTemplates+"soais1.jpg", basePathDesignsTemplates+"soais2.jpg", basePathDesignsTemplates+"soais3.jpg", basePathDesignsTemplates+"suntech1.jpg", basePathDesignsTemplates+"back_endNR.jpg"];

var logosInnerFolderArray = [basePathDesignsLogos+"SkillsLogo1.jpg", basePathDesignsLogos+"SkillsLogo2.jpg", basePathDesignsLogos+"SkillsLogo3.jpg", basePathDesignsLogos+"RGET_2.jpg", basePathDesignsLogos+"RGET_3.jpg", basePathDesignsLogos+"RGET_4.jpg", basePathDesignsLogos+"RGET_5.jpg", basePathDesignsLogos+"RGET_6.jpg", basePathDesignsLogos+"RGET_7.jpg", basePathDesignsLogos+"RGET_8.jpg", basePathDesignsLogos+"RGET_9.jpg", basePathDesignsLogos+"RGET_10.jpg", basePathDesignsLogos+"RGET_11.jpg", basePathDesignsLogos+"RGET_12.jpg", basePathDesignsLogos+"RGET_13.jpg", basePathDesignsLogos+"RGET_14.jpg", basePathDesignsLogos+"RGET_15.jpg", basePathDesignsLogos+"SS_logo1.jpg", basePathDesignsLogos+"SS_logo2.jpg", basePathDesignsLogos+"SS_logo3.jpg", basePathDesignsLogos+"SS_logo4.jpg", basePathDesignsLogos+"SS_logo5.jpg", basePathDesignsLogos+"SS_logo6.jpg", basePathDesignsLogos+"SS_logo7.jpg", basePathDesignsLogos+"SS_logo8.jpg", basePathDesignsLogos+"SS_logo9.jpg", basePathDesignsLogos+"SS_logo10.jpg"];

var MISCDesignInnerFolderArray = [basePathDesignsMISC+"donaldduck.jpg", basePathDesignsMISC+"alladin&jasmin.jpg", basePathDesignsMISC+"balaji.jpg", basePathDesignsMISC+"ART_926.jpg", basePathDesignsMISC+"CAT.jpg", basePathDesignsMISC+"CELL.jpg", basePathDesignsMISC+"chiranjivi.jpg", basePathDesignsMISC+"interior.jpg",  basePathDesignsMISC+"2honeyfront.jpg", basePathDesignsMISC+"FISH.jpg", basePathDesignsMISC+"ganesh.jpg", basePathDesignsMISC+"horse.jpg", basePathDesignsMISC+"water fall.jpg"];

var treeListContent = '<div class="widgetTreeListArea"><ul class="treeListArea">';
	treeListContent += '<li><span class="showPlus"></span><span class="smallFolderOpenIcon"></span>	<span class="treeTitle templatesLink">Templates</span> <ul class="treeSubListArea">';
	for(treeListTemplates=0; treeListTemplates<templatesInnerFolderArray.length; treeListTemplates++)
	{
		 treeListContent += '<li><span class="imgThumbcon"></span><span class="treeTitle templatesLink">'+templatesInnerFolderArray[treeListTemplates].split("/")[4]+'</span></li>';
	}
	treeListContent += '</ul></li>';
	treeListContent += '<li><span class="showPlus"></span><span class="smallFolderOpenIcon"></span>	<span class="treeTitle logosLink">Logos</span> <ul class="treeSubListArea">';
	for(treeListTemplates2=0; treeListTemplates2<logosInnerFolderArray.length; treeListTemplates2++)
	{
		 treeListContent += '<li><span class="imgThumbcon"></span><span class="treeTitle templatesLink">'+logosInnerFolderArray[treeListTemplates2].split("/")[4]+'</span></li>';
	}
	treeListContent += '</ul></li>';
	treeListContent += '<li><span class="showPlus"></span><span class="smallFolderOpenIcon"></span>	<span class="treeTitle MISCDesignsLink">MISC Designs</span> <ul class="treeSubListArea">';
	for(treeListTemplates3=0; treeListTemplates3<MISCDesignInnerFolderArray.length; treeListTemplates3++)
	{
		 treeListContent += '<li><span class="imgThumbcon"></span><span class="treeTitle templatesLink">'+MISCDesignInnerFolderArray[treeListTemplates3].split("/")[4]+'</span></li>';
	}
	treeListContent += '</ul></li>';
	treeListContent += '</ul></div>';

var FolderListContent = ' <div class="FolderShowDiv"> <div class="folderFrontArea foldersInner" historystatus="jfolderHistory"><ul class="thumbanilsList"></ul></div></div>';


var templatesInnerFolderContent = '<div class="templatesFolderDiv foldersInner" style="display: none" historystatus="2"><ul class="folderList">';
for(templatesDesigns=0; templatesDesigns<templatesInnerFolderArray.length; templatesDesigns++)
{
	 templatesInnerFolderContent += "<li><img src="+templatesInnerFolderArray[templatesDesigns]+" alt='"+templatesDesigns+".jpg' /></li>";
}
templatesInnerFolderContent += '</ul></div>';


var logosInnerFolderContent = ' <div class="logosFolderDiv  foldersInner" style="display: none" historystatus="3"><ul class="folderList">';
for(logosDesigns=0; logosDesigns<logosInnerFolderArray.length; logosDesigns++)
{
	 logosInnerFolderContent += "<li><img src="+logosInnerFolderArray[logosDesigns]+" alt='"+logosDesigns+".jpg' /></li>";
}
logosInnerFolderContent += '</ul></div>';

var MISCDesignInnerFolderContent = ' <div class="DesignMISCFolderDiv  foldersInner" style="display: none" historystatus="4"><ul class="folderList">';

for(MISCDesigns=0; MISCDesigns<MISCDesignInnerFolderArray.length; MISCDesigns++)
{
	 MISCDesignInnerFolderContent += "<li><img src="+MISCDesignInnerFolderArray[MISCDesigns]+" alt='"+MISCDesigns+".jpg' /></li>";
}
MISCDesignInnerFolderContent += '</ul></div>';

var photosInnerFolderContent = '<div class="photosFolderDiv  foldersInner" style="display: none" historystatus="5"><ul class="folderList"><li><img src="images/Photos/Thumbnails/1.jpg" alt="1.jpg" /></li><li><img src="images/Photos/Thumbnails/2.jpg" alt="2.jpg" /></li><li><img src="images/Photos/Thumbnails/3.jpg" alt="3.jpg" /></li><li><img src="images/Photos/Thumbnails/4.jpg" alt="4.jpg" /></li><li><img src="images/Photos/Thumbnails/5.jpg" alt="5.jpg" /></li><li><img src="images/Photos/Thumbnails/6.jpg" alt="6.jpg" /></li></ul></div>';

var pluginInnerFolderContent = '<div class="pluginsFolderDiv  foldersInner" style="display: none" historystatus="6"><ul class="folderList"><li><span class="wFolder thumbnailFolderIcon"></span><span class="thumbTitle">Calender</span></li><li><span class="wFolder thumbnailFolderIcon"></span><span class="thumbTitle">Rotating images</span></li><li><span class="wFolder thumbnailFolderIcon"></span><span class="thumbTitle">Silders</span></li><li><span class="wFolder thumbnailFolderIcon"></span><span class="thumbTitle">Draggable</span></li><li><span class="wFolder thumbnailFolderIcon"></span><span class="thumbTitle">Grid System</span></li><li><span class="wFolder thumbnailFolderIcon"></span><span class="thumbTitle">Tabs</span></li></ul></div>';

var tutorialInnerFolderContent = '<div class="tutorialFolderDiv  foldersInner" style="display: none" historystatus="7"><ul class="folderList"><li><span class="wFolder thumbnailFolderIcon"></span><span class="thumbTitle">Javascript</span></li><li><span class="wFolder thumbnailFolderIcon"></span><span class="thumbTitle">Jquery</span></li><li><span class="wFolder thumbnailFolderIcon"></span><span class="thumbTitle">Backbone</span></li><li><span class="wFolder thumbnailFolderIcon"></span><span class="thumbTitle">Angualr JS</span></li><li><span class="wFolder thumbnailFolderIcon"></span><span class="thumbTitle">HTML5</span></li><li><span class="wFolder thumbnailFolderIcon"></span><span class="thumbTitle">CSS3</span></li></ul></div>';

var MISCJSInnerFolderContent = ' <div class="JSMISCFolderDiv  foldersInner" style="display: none" historystatus="8"><ul class="folderList"><li>Coming Soon...</li></ul></div>';










/*

 <!-- photosFolderDiv Start here -->
                        <div class="aboutTxtDiv  foldersInner" style="display: none" historystatus="9">
                            This is my Profile
                        </div>


{
"_id": {
"$oid": "5137213fe4b04da0f280c678"
},
"MOSfolderName": {
"myDesignFolder": {
"folderNames": [
{
"folderName": "Templates",
"folderLinkName": "templatesLink"
},
{
"folderName": "Layouts",
"folderLinkName": "layoutLink"
}
]
},
"myJSFolder": {
"folderNames": [
{
"folderName": "Plugins",
"folderLinkName": "pluginLink"
},
{
"folderName": "Tutorials",
"folderLinkName": "tutorialLink"
}
]
},
"aboutMeFolder": {
"folderNames": [
{
"folderName": "AboutMe",
"folderLinkName": "aboutMeLink"
},
{
"folderName": "My Pictures",
"folderLinkName": "myPicturesLink"
}
]
}
}
}
*/
/*
{
    "_id": {
        "$oid": "51374f94e4b0d2b919452134"
    },
    "inDesignFolder": {
        "newFolderNames": [
            {
                "folderName": "NewFolder",
                "folderLinkName": "NewFolderLink"
            }
        ]
    }
}
*/






