var config=new Object();var tt_Debug=true;var tt_Enabled=true;var TagsToTip=true;config.Above=false;config.BgColor="#E4E7FF";config.BgImg="";config.BorderColor="#002299";config.BorderStyle="solid";config.BorderWidth=1;config.CenterMouse=false;config.ClickClose=false;config.CloseBtn=false;config.CloseBtnColors=["#990000","#FFFFFF","#DD3333","#FFFFFF"];config.CloseBtnText="&nbsp;X&nbsp;";config.CopyContent=true;config.Delay=400;config.Duration=0;config.FadeIn=0;config.FadeOut=0;config.FadeInterval=30;config.Fix=null;config.FollowMouse=true;config.FontColor="#000044";config.FontFace="Verdana,Geneva,sans-serif";config.FontSize="8pt";config.FontWeight="normal";config.Left=false;config.OffsetX=14;config.OffsetY=8;config.Opacity=100;config.Padding=3;config.Shadow=false;config.ShadowColor="#C0C0C0";config.ShadowWidth=5;config.Sticky=false;config.TextAlign="left";config.Title="";config.TitleAlign="left";config.TitleBgColor="";config.TitleFontColor="#ffffff";config.TitleFontFace="";config.TitleFontSize="";config.Width=0;function Tip(){tt_Tip(arguments,null)}function TagToTip(){if(TagsToTip){var a=tt_GetElt(arguments[0]);if(a){tt_Tip(arguments,a)}}}var tt_aElt=new Array(10),tt_aV=new Array(),tt_sContent,tt_scrlX=0,tt_scrlY=0,tt_musX,tt_musY,tt_over,tt_x,tt_y,tt_w,tt_h;function tt_Extension(){tt_ExtCmdEnum();tt_aExt[tt_aExt.length]=this;return this}function tt_SetTipPos(b,d){var c=tt_aElt[0].style;tt_x=b;tt_y=d;c.left=b+"px";c.top=d+"px";if(tt_ie56){var a=tt_aElt[tt_aElt.length-1];if(a){a.style.left=c.left;a.style.top=c.top}}}function tt_Hide(){if(tt_db&&tt_iState){if(tt_iState&2){tt_aElt[0].style.visibility="hidden";tt_ExtCallFncs(0,"Hide")}tt_tShow.EndTimer();tt_tHide.EndTimer();tt_tDurt.EndTimer();tt_tFade.EndTimer();if(!tt_op&&!tt_ie){tt_tWaitMov.EndTimer();tt_bWait=false}if(tt_aV[CLICKCLOSE]){tt_RemEvtFnc(document,"mouseup",tt_HideInit)}tt_AddRemOutFnc(false);tt_ExtCallFncs(0,"Kill");if(tt_t2t&&!tt_aV[COPYCONTENT]){tt_t2t.style.display="none";tt_MovDomNode(tt_t2t,tt_aElt[6],tt_t2tDad)}tt_iState=0;tt_over=null;tt_ResetMainDiv();if(tt_aElt[tt_aElt.length-1]){tt_aElt[tt_aElt.length-1].style.display="none"}}}function tt_GetElt(a){return(document.getElementById?document.getElementById(a):document.all?document.all[a]:null)}function tt_GetDivW(a){return(a?(a.offsetWidth||a.style.pixelWidth||0):0)}function tt_GetDivH(a){return(a?(a.offsetHeight||a.style.pixelHeight||0):0)}function tt_GetScrollX(){return(window.pageXOffset||(tt_db?(tt_db.scrollLeft||0):0))}function tt_GetScrollY(){return(window.pageYOffset||(tt_db?(tt_db.scrollTop||0):0))}function tt_GetClientW(){return(document.body&&(typeof(document.body.clientWidth)!=tt_u)?document.body.clientWidth:(typeof(window.innerWidth)!=tt_u)?window.innerWidth:tt_db?(tt_db.clientWidth||0):0)}function tt_GetClientH(){return(document.body&&(typeof(document.body.clientHeight)!=tt_u)?document.body.clientHeight:(typeof(window.innerHeight)!=tt_u)?window.innerHeight:tt_db?(tt_db.clientHeight||0):0)}function tt_GetEvtX(a){return(a?((typeof(a.pageX)!=tt_u)?a.pageX:(a.clientX+tt_scrlX)):0)}function tt_GetEvtY(a){return(a?((typeof(a.pageY)!=tt_u)?a.pageY:(a.clientY+tt_scrlY)):0)}function tt_AddEvtFnc(b,a,c){if(b){if(b.addEventListener){b.addEventListener(a,c,false)}else{b.attachEvent("on"+a,c)}}}function tt_RemEvtFnc(b,a,c){if(b){if(b.removeEventListener){b.removeEventListener(a,c,false)}else{b.detachEvent("on"+a,c)}}}var tt_aExt=new Array(),tt_db,tt_op,tt_ie,tt_ie56,tt_bBoxOld,tt_body,tt_flagOpa,tt_maxPosX,tt_maxPosY,tt_iState=0,tt_opa,tt_bJmpVert,tt_t2t,tt_t2tDad,tt_elDeHref,tt_tShow=new Number(0),tt_tHide=new Number(0),tt_tDurt=new Number(0),tt_tFade=new Number(0),tt_tWaitMov=new Number(0),tt_bWait=false,tt_u="undefined";function tt_Init(){tt_MkCmdEnum();if(!tt_Browser()||!tt_MkMainDiv()){return}tt_IsW3cBox();tt_OpaSupport();tt_AddEvtFnc(document,"mousemove",tt_Move);if(TagsToTip||tt_Debug){tt_SetOnloadFnc()}tt_AddEvtFnc(window,"scroll",function(){tt_scrlX=tt_GetScrollX();tt_scrlY=tt_GetScrollY();if(tt_iState&&!(tt_aV[STICKY]&&(tt_iState&2))){tt_HideInit()}});tt_Hide()}function tt_MkCmdEnum(){var n=0;for(var i in config){eval("window."+i.toString().toUpperCase()+" = "+n++)}tt_aV.length=n}function tt_Browser(){var n,nv,n6,w3c;n=navigator.userAgent.toLowerCase(),nv=navigator.appVersion;tt_op=(document.defaultView&&typeof(eval("window.opera"))!=tt_u);tt_ie=n.indexOf("msie")!=-1&&document.all&&!tt_op;if(tt_ie){var ieOld=(!document.compatMode||document.compatMode=="BackCompat");tt_db=!ieOld?document.documentElement:(document.body||null);if(tt_db){tt_ie56=parseFloat(nv.substring(nv.indexOf("MSIE")+5))>=5.5&&typeof document.body.style.maxHeight==tt_u}}else{tt_db=document.documentElement||document.body||(document.getElementsByTagName?document.getElementsByTagName("body")[0]:null);if(!tt_op){n6=document.defaultView&&typeof document.defaultView.getComputedStyle!=tt_u;w3c=!n6&&document.getElementById}}tt_body=(document.getElementsByTagName?document.getElementsByTagName("body")[0]:(document.body||null));if(tt_ie||n6||tt_op||w3c){if(tt_body&&tt_db){if(document.attachEvent||document.addEventListener){return true}}else{tt_Err("wz_tooltip.js must be included INSIDE the body section, immediately after the opening <body> tag.")}}tt_db=null;return false}function tt_MkMainDiv(){if(tt_body.insertAdjacentHTML){tt_body.insertAdjacentHTML("afterBegin",tt_MkMainDivHtm())}else{if(typeof tt_body.innerHTML!=tt_u&&document.createElement&&tt_body.appendChild){tt_body.appendChild(tt_MkMainDivDom())}}if(window.tt_GetMainDivRefs&&tt_GetMainDivRefs()){return true}tt_db=null;return false}function tt_MkMainDivHtm(){return('<div id="WzTtDiV"></div>'+(tt_ie56?('<iframe id="WzTtIfRm" src="javascript:false" scrolling="no" frameborder="0" style="filter:Alpha(opacity=0);position:absolute;top:0px;left:0px;display:none;"></iframe>'):""))}function tt_MkMainDivDom(){var a=document.createElement("div");if(a){a.id="WzTtDiV"}return a}function tt_GetMainDivRefs(){tt_aElt[0]=tt_GetElt("WzTtDiV");if(tt_ie56&&tt_aElt[0]){tt_aElt[tt_aElt.length-1]=tt_GetElt("WzTtIfRm");if(!tt_aElt[tt_aElt.length-1]){tt_aElt[0]=null}}if(tt_aElt[0]){var a=tt_aElt[0].style;a.visibility="hidden";a.position="absolute";a.overflow="hidden";return true}return false}function tt_ResetMainDiv(){var a=(window.screen&&screen.width)?screen.width:10000;tt_SetTipPos(-a,0);tt_aElt[0].innerHTML="";tt_aElt[0].style.width=(a-1)+"px"}function tt_IsW3cBox(){var a=tt_aElt[0].style;a.padding="10px";a.width="40px";tt_bBoxOld=(tt_GetDivW(tt_aElt[0])==40);a.padding="0px";tt_ResetMainDiv()}function tt_OpaSupport(){var a=tt_body.style;tt_flagOpa=(typeof(a.filter)!=tt_u)?1:(typeof(a.KhtmlOpacity)!=tt_u)?2:(typeof(a.KHTMLOpacity)!=tt_u)?3:(typeof(a.MozOpacity)!=tt_u)?4:(typeof(a.opacity)!=tt_u)?5:0}function tt_SetOnloadFnc(){tt_AddEvtFnc(document,"DOMContentLoaded",tt_HideSrcTags);tt_AddEvtFnc(window,"load",tt_HideSrcTags);if(tt_body.attachEvent){tt_body.attachEvent("onreadystatechange",function(){if(tt_body.readyState=="complete"){tt_HideSrcTags()}})}if(/WebKit|KHTML/i.test(navigator.userAgent)){var a=setInterval(function(){if(/loaded|complete/.test(document.readyState)){clearInterval(a);tt_HideSrcTags()}},10)}}function tt_HideSrcTags(){if(!window.tt_HideSrcTags||window.tt_HideSrcTags.done){return}window.tt_HideSrcTags.done=true;if(!tt_HideSrcTagsRecurs(tt_body)){tt_Err("To enable the capability to convert HTML elements to tooltips, you must set TagsToTip in the global tooltip configuration to true.")}}function tt_HideSrcTagsRecurs(c){var b,f,e;b=c.childNodes||c.children||null;for(var d=b?b.length:0;d;){--d;if(!tt_HideSrcTagsRecurs(b[d])){return false}f=b[d].getAttribute?b[d].getAttribute("onmouseover"):(typeof b[d].onmouseover=="function")?b[d].onmouseover:null;if(f){e=f.toString().match(/TagToTip\s*\(\s*'[^'.]+'\s*[\),]/);if(e&&e.length){if(!tt_HideSrcTag(e[0])){return false}}}}return true}function tt_HideSrcTag(b){var c,a;c=b.replace(/.+'([^'.]+)'.+/,"$1");a=tt_GetElt(c);if(a){if(tt_Debug&&!TagsToTip){return false}else{a.style.display="none"}}else{tt_Err("Invalid ID\n'"+c+"'\npassed to TagToTip(). There exists no HTML element with that ID.")}return true}function tt_Tip(a,b){if(!tt_db){return}if(tt_iState){tt_Hide()}if(!tt_Enabled){return}tt_t2t=b;if(!tt_ReadCmds(a)){return}tt_iState=1|4;tt_AdaptConfig1();tt_MkTipContent(a);tt_MkTipSubDivs();tt_FormatTip();tt_bJmpVert=false;tt_maxPosX=tt_GetClientW()+tt_scrlX-tt_w-1;tt_maxPosY=tt_GetClientH()+tt_scrlY-tt_h-1;tt_AdaptConfig2();tt_Move();tt_ShowInit()}function tt_ReadCmds(b){var d;d=0;for(var c in config){tt_aV[d++]=config[c]}if(b.length&1){for(d=b.length-1;d>0;d-=2){tt_aV[b[d-1]]=b[d]}return true}tt_Err("Incorrect call of Tip() or TagToTip().\nEach command must be followed by a value.");return false}function tt_AdaptConfig1(){tt_ExtCallFncs(0,"LoadConfig");if(!tt_aV[TITLEBGCOLOR].length){tt_aV[TITLEBGCOLOR]=tt_aV[BORDERCOLOR]}if(!tt_aV[TITLEFONTCOLOR].length){tt_aV[TITLEFONTCOLOR]=tt_aV[BGCOLOR]}if(!tt_aV[TITLEFONTFACE].length){tt_aV[TITLEFONTFACE]=tt_aV[FONTFACE]}if(!tt_aV[TITLEFONTSIZE].length){tt_aV[TITLEFONTSIZE]=tt_aV[FONTSIZE]}if(tt_aV[CLOSEBTN]){if(!tt_aV[CLOSEBTNCOLORS]){tt_aV[CLOSEBTNCOLORS]=new Array("","","","")}for(var a=4;a;){--a;if(!tt_aV[CLOSEBTNCOLORS][a].length){tt_aV[CLOSEBTNCOLORS][a]=(a&1)?tt_aV[TITLEFONTCOLOR]:tt_aV[TITLEBGCOLOR]}}if(!tt_aV[TITLE].length){tt_aV[TITLE]=" "}}if(tt_aV[OPACITY]==100&&typeof tt_aElt[0].style.MozOpacity!=tt_u&&!Array.every){tt_aV[OPACITY]=99}if(tt_aV[FADEIN]&&tt_flagOpa&&tt_aV[DELAY]>100){tt_aV[DELAY]=Math.max(tt_aV[DELAY]-tt_aV[FADEIN],100)}}function tt_AdaptConfig2(){if(tt_aV[CENTERMOUSE]){tt_aV[OFFSETX]-=((tt_w-(tt_aV[SHADOW]?tt_aV[SHADOWWIDTH]:0))>>1)}}function tt_MkTipContent(b){if(tt_t2t){if(tt_aV[COPYCONTENT]){tt_sContent=tt_t2t.innerHTML}else{tt_sContent=""}}else{tt_sContent=b[0]}tt_ExtCallFncs(0,"CreateContentString")}function tt_MkTipSubDivs(){var b="position:relative;margin:0px;padding:0px;border-width:0px;left:0px;top:0px;line-height:normal;width:auto;",a=' cellspacing=0 cellpadding=0 border=0 style="'+b+'"><tbody style="'+b+'"><tr><td ';tt_aElt[0].innerHTML=(""+(tt_aV[TITLE].length?('<div id="WzTiTl" style="position:relative;z-index:1;"><table id="WzTiTlTb"'+a+'id="WzTiTlI" style="'+b+'">'+tt_aV[TITLE]+"</td>"+(tt_aV[CLOSEBTN]?('<td align="right" style="'+b+'text-align:right;"><span id="WzClOsE" style="padding-left:2px;padding-right:2px;cursor:'+(tt_ie?"hand":"pointer")+';" onmouseover="tt_OnCloseBtnOver(1)" onmouseout="tt_OnCloseBtnOver(0)" onclick="tt_HideInit()">'+tt_aV[CLOSEBTNTEXT]+"</span></td>"):"")+"</tr></tbody></table></div>"):"")+'<div id="WzBoDy" style="position:relative;z-index:0;"><table'+a+'id="WzBoDyI" style="'+b+'">'+tt_sContent+"</td></tr></tbody></table></div>"+(tt_aV[SHADOW]?('<div id="WzTtShDwR" style="position:absolute;overflow:hidden;"></div><div id="WzTtShDwB" style="position:relative;overflow:hidden;"></div>'):""));tt_GetSubDivRefs();if(tt_t2t&&!tt_aV[COPYCONTENT]){tt_t2tDad=tt_t2t.parentNode||tt_t2t.parentElement||tt_t2t.offsetParent||null;if(tt_t2tDad){tt_MovDomNode(tt_t2t,tt_t2tDad,tt_aElt[6]);tt_t2t.style.display="block"}}tt_ExtCallFncs(0,"SubDivsCreated")}function tt_GetSubDivRefs(){var b=new Array("WzTiTl","WzTiTlTb","WzTiTlI","WzClOsE","WzBoDy","WzBoDyI","WzTtShDwB","WzTtShDwR");for(var a=b.length;a;--a){tt_aElt[a]=tt_GetElt(b[a-1])}}function tt_FormatTip(){var d,b,a,c;if(tt_aV[TITLE].length){d=tt_aElt[1].style;d.background=tt_aV[TITLEBGCOLOR];d.paddingTop=(tt_aV[CLOSEBTN]?2:0)+"px";d.paddingBottom="1px";d.paddingLeft=d.paddingRight=tt_aV[PADDING]+"px";d=tt_aElt[3].style;d.color=tt_aV[TITLEFONTCOLOR];d.fontFamily=tt_aV[TITLEFONTFACE];d.fontSize=tt_aV[TITLEFONTSIZE];d.fontWeight="bold";d.textAlign=tt_aV[TITLEALIGN];if(tt_aElt[4]){d.paddingRight=(tt_aV[PADDING]<<1)+"px";d=tt_aElt[4].style;d.background=tt_aV[CLOSEBTNCOLORS][0];d.color=tt_aV[CLOSEBTNCOLORS][1];d.fontFamily=tt_aV[TITLEFONTFACE];d.fontSize=tt_aV[TITLEFONTSIZE];d.fontWeight="bold"}if(tt_aV[WIDTH]>0){tt_w=tt_aV[WIDTH]+((tt_aV[PADDING]+tt_aV[BORDERWIDTH])<<1)}else{tt_w=tt_GetDivW(tt_aElt[3])+tt_GetDivW(tt_aElt[4]);if(tt_aElt[4]){tt_w+=tt_aV[PADDING]}}a=-tt_aV[BORDERWIDTH]}else{tt_w=0;a=0}d=tt_aElt[5].style;d.top=a+"px";if(tt_aV[BORDERWIDTH]){d.borderColor=tt_aV[BORDERCOLOR];d.borderStyle=tt_aV[BORDERSTYLE];d.borderWidth=tt_aV[BORDERWIDTH]+"px"}if(tt_aV[BGCOLOR].length){d.background=tt_aV[BGCOLOR]}if(tt_aV[BGIMG].length){d.backgroundImage="url("+tt_aV[BGIMG]+")"}d.padding=tt_aV[PADDING]+"px";d.textAlign=tt_aV[TEXTALIGN];d=tt_aElt[6].style;d.color=tt_aV[FONTCOLOR];d.fontFamily=tt_aV[FONTFACE];d.fontSize=tt_aV[FONTSIZE];d.fontWeight=tt_aV[FONTWEIGHT];d.background="";d.textAlign=tt_aV[TEXTALIGN];if(tt_aV[WIDTH]>0){b=tt_aV[WIDTH]+((tt_aV[PADDING]+tt_aV[BORDERWIDTH])<<1)}else{b=tt_GetDivW(tt_aElt[6])+((tt_aV[PADDING]+tt_aV[BORDERWIDTH])<<1)}if(b>tt_w){tt_w=b}if(tt_aV[SHADOW]){tt_w+=tt_aV[SHADOWWIDTH];c=Math.floor((tt_aV[SHADOWWIDTH]*4)/3);d=tt_aElt[7].style;d.top=a+"px";d.left=c+"px";d.width=(tt_w-c-tt_aV[SHADOWWIDTH])+"px";d.height=tt_aV[SHADOWWIDTH]+"px";d.background=tt_aV[SHADOWCOLOR];d=tt_aElt[8].style;d.top=c+"px";d.left=(tt_w-tt_aV[SHADOWWIDTH])+"px";d.width=tt_aV[SHADOWWIDTH]+"px";d.background=tt_aV[SHADOWCOLOR]}else{c=0}tt_SetTipOpa(tt_aV[FADEIN]?0:tt_aV[OPACITY]);tt_FixSize(a,c)}function tt_FixSize(a,c){var e,d,b;tt_aElt[0].style.width=tt_w+"px";tt_aElt[0].style.pixelWidth=tt_w;d=tt_w-((tt_aV[SHADOW])?tt_aV[SHADOWWIDTH]:0);e=d;if(!tt_bBoxOld){e-=((tt_aV[PADDING]+tt_aV[BORDERWIDTH])<<1)}tt_aElt[5].style.width=e+"px";if(tt_aElt[1]){e=d-(tt_aV[PADDING]<<1);if(!tt_bBoxOld){d=e}tt_aElt[1].style.width=d+"px";tt_aElt[2].style.width=e+"px"}tt_h=tt_GetDivH(tt_aElt[0])+a;if(tt_aElt[8]){tt_aElt[8].style.height=(tt_h-c)+"px"}b=tt_aElt.length-1;if(tt_aElt[b]){tt_aElt[b].style.width=tt_w+"px";tt_aElt[b].style.height=tt_h+"px"}}function tt_DeAlt(c){var a;if(c.alt){c.alt=""}if(c.title){c.title=""}a=c.childNodes||c.children||null;if(a){for(var b=a.length;b;){tt_DeAlt(a[--b])}}}function tt_OpDeHref(a){if(!tt_op){return}if(tt_elDeHref){tt_OpReHref()}while(a){if(a.hasAttribute("href")){a.t_href=a.getAttribute("href");a.t_stats=window.status;a.removeAttribute("href");a.style.cursor="hand";tt_AddEvtFnc(a,"mousedown",tt_OpReHref);window.status=a.t_href;tt_elDeHref=a;break}a=a.parentElement}}function tt_ShowInit(){tt_tShow.Timer("tt_Show()",tt_aV[DELAY],true);if(tt_aV[CLICKCLOSE]){tt_AddEvtFnc(document,"mouseup",tt_HideInit)}}function tt_OverInit(a){tt_over=a.target||a.srcElement;tt_DeAlt(tt_over);tt_OpDeHref(tt_over);tt_AddRemOutFnc(true)}function tt_Show(){var a=tt_aElt[0].style;a.zIndex=Math.max((window.dd&&dd.z)?(dd.z+2):0,1010);if(tt_aV[STICKY]||!tt_aV[FOLLOWMOUSE]){tt_iState&=~4}if(tt_aV[DURATION]>0){tt_tDurt.Timer("tt_HideInit()",tt_aV[DURATION],true)}tt_ExtCallFncs(0,"Show");a.visibility="visible";tt_iState|=2;if(tt_aV[FADEIN]){tt_Fade(0,0,tt_aV[OPACITY],Math.round(tt_aV[FADEIN]/tt_aV[FADEINTERVAL]))}tt_ShowIfrm()}function tt_ShowIfrm(){if(tt_ie56){var a=tt_aElt[tt_aElt.length-1];if(a){var b=a.style;b.zIndex=tt_aElt[0].style.zIndex-1;b.display="block"}}}function tt_Move(a){a=window.event||a;if(a){tt_musX=tt_GetEvtX(a);tt_musY=tt_GetEvtY(a)}if(tt_iState){if(!tt_over&&a){tt_OverInit(a)}if(tt_iState&4){if(!tt_op&&!tt_ie){if(tt_bWait){return}tt_bWait=true;tt_tWaitMov.Timer("tt_bWait = false;",1,true)}if(tt_aV[FIX]){tt_iState&=~4;tt_SetTipPos(tt_aV[FIX][0],tt_aV[FIX][1])}else{if(!tt_ExtCallFncs(a,"MoveBefore")){tt_SetTipPos(tt_PosX(),tt_PosY())}}tt_ExtCallFncs([tt_musX,tt_musY],"MoveAfter")}}}function tt_PosX(){var a;a=tt_musX;if(tt_aV[LEFT]){a-=tt_w+tt_aV[OFFSETX]-(tt_aV[SHADOW]?tt_aV[SHADOWWIDTH]:0)}else{a+=tt_aV[OFFSETX]}if(a>tt_maxPosX){a=tt_maxPosX}return((a<tt_scrlX)?tt_scrlX:a)}function tt_PosY(){var a;if(tt_aV[ABOVE]&&(!tt_bJmpVert||tt_CalcPosYAbove()>=tt_scrlY+16)){a=tt_DoPosYAbove()}else{if(!tt_aV[ABOVE]&&tt_bJmpVert&&tt_CalcPosYBelow()>tt_maxPosY-16){a=tt_DoPosYAbove()}else{a=tt_DoPosYBelow()}}if(a>tt_maxPosY){a=tt_DoPosYAbove()}if(a<tt_scrlY){a=tt_DoPosYBelow()}return a}function tt_DoPosYBelow(){tt_bJmpVert=tt_aV[ABOVE];return tt_CalcPosYBelow()}function tt_DoPosYAbove(){tt_bJmpVert=!tt_aV[ABOVE];return tt_CalcPosYAbove()}function tt_CalcPosYBelow(){return(tt_musY+tt_aV[OFFSETY])}function tt_CalcPosYAbove(){var a=tt_aV[OFFSETY]-(tt_aV[SHADOW]?tt_aV[SHADOWWIDTH]:0);if(tt_aV[OFFSETY]>0&&a<=0){a=1}return(tt_musY-tt_h-a)}function tt_OnOut(){tt_AddRemOutFnc(false);if(!(tt_aV[STICKY]&&(tt_iState&2))){tt_HideInit()}}function tt_HideInit(){tt_ExtCallFncs(0,"HideInit");tt_iState&=~4;if(tt_flagOpa&&tt_aV[FADEOUT]){tt_tFade.EndTimer();if(tt_opa){var a=Math.round(tt_aV[FADEOUT]/(tt_aV[FADEINTERVAL]*(tt_aV[OPACITY]/tt_opa)));tt_Fade(tt_opa,tt_opa,0,a);return}}tt_tHide.Timer("tt_Hide();",1,false)}function tt_OpReHref(){if(tt_elDeHref){tt_elDeHref.setAttribute("href",tt_elDeHref.t_href);tt_RemEvtFnc(tt_elDeHref,"mousedown",tt_OpReHref);window.status=tt_elDeHref.t_stats;tt_elDeHref=null}}function tt_Fade(b,c,d,e){if(e){c+=Math.round((d-c)/e);if((d>b)?(c>=d):(c<=d)){c=d}else{tt_tFade.Timer("tt_Fade("+b+","+c+","+d+","+(e-1)+")",tt_aV[FADEINTERVAL],true)}}c?tt_SetTipOpa(c):tt_Hide()}function tt_SetTipOpa(a){tt_SetOpa(tt_aElt[5].style,a);if(tt_aElt[1]){tt_SetOpa(tt_aElt[1].style,a)}if(tt_aV[SHADOW]){a=Math.round(a*0.8);tt_SetOpa(tt_aElt[7].style,a);tt_SetOpa(tt_aElt[8].style,a)}}function tt_OnCloseBtnOver(b){var a=tt_aElt[4].style;b<<=1;a.background=tt_aV[CLOSEBTNCOLORS][b];a.color=tt_aV[CLOSEBTNCOLORS][b+1]}function tt_Int(a){var b;return(isNaN(b=parseInt(a))?0:b)}function tt_AddRemOutFnc(a){var b=a?tt_AddEvtFnc:tt_RemEvtFnc;if(a!=tt_AddRemOutFnc.bOn){b(tt_over,"mouseout",tt_OnOut);tt_AddRemOutFnc.bOn=a;if(!a){tt_OpReHref()}}}tt_AddRemOutFnc.bOn=false;Number.prototype.Timer=function(c,b,a){if(!this.value||a){this.value=window.setTimeout(c,b)}};Number.prototype.EndTimer=function(){if(this.value){window.clearTimeout(this.value);this.value=0}};function tt_SetOpa(b,a){tt_opa=a;if(tt_flagOpa==1){if(a<100){var c=b.visibility!="hidden";b.zoom="100%";if(!c){b.visibility="visible"}b.filter="alpha(opacity="+a+")";if(!c){b.visibility="hidden"}}else{b.filter=""}}else{a/=100;switch(tt_flagOpa){case 2:b.KhtmlOpacity=a;break;case 3:b.KHTMLOpacity=a;break;case 4:b.MozOpacity=a;break;case 5:b.opacity=a;break}}}function tt_MovDomNode(b,a,c){if(a){a.removeChild(b)}if(c){c.appendChild(b)}}function tt_Err(a){if(tt_Debug){alert("Tooltip Script Error Message:\n\n"+a)}}function tt_ExtCmdEnum(){var s;for(var i in config){s="window."+i.toString().toUpperCase();if(eval("typeof("+s+") == tt_u")){eval(s+" = "+tt_aV.length);tt_aV[tt_aV.length]=null}}}function tt_ExtCallFncs(c,d){var a=false;for(var e=tt_aExt.length;e;){--e;var f=tt_aExt[e]["On"+d];if(f&&f(c)){a=true}}return a}tt_Init();