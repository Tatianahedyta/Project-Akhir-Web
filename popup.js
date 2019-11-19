a.popup-link{
	padding:17px 0;
	text-align:center;
	margin:7% auto;
	position:relative;
	width:300px;
	color:#fff;
	text-decoration:none;
	background-color:#FFBA00;
	border-radius:3px;
	box-shadow:0 5px 0 0 #eea900;
	display:block
}
a.popup-link:hover{background-color:#ff9900;box-shadow:0 3px 0 0 #eea900;-webkit-transition:all 1s;-moz-transition:all 1s;transition:all 1s}
#popup{visibility:hidden;opacity:0;margin-top:-200px;}
#popup:target{visibility:visible;opacity:1;background-color:rgba(255,255,255,0.7);position:fixed;top:0;left:0;right:0;bottom:0;margin:0;z-index:999;-webkit-transition:all 1s;-moz-transition:all 1s;transition:all 1s}
@media (min-width:768px){.popup-container{width:300px}}
@media (max-width:767px){.popup-container{width:90%}}
.popup-container{position:relative;margin:7% auto;padding:15px 30px;background-color:#8dbb90;color:#fff;border-radius:3px;line-height:normal;font-size:130%;width:30%;border:5px solid #fff;box-shadow:0 0 10px rgba(0,0,0,.15);}
a.popup-close{position:absolute;top:-3px;right:-3px;background-color:#fff;padding:7px 10px;font-size:20px;text-decoration:none;line-height:1;color:#333;border-bottom-left-radius:3px;}
a.popup-close:hover{border-radius:3px;transform:scale(1.5)}