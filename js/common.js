var fadeOpacityTime;
//ep:elem=domobject,type=1 or -1,time=50,to=true or 缺省该参数则不会应用往返循环的动画
function fadeOpacity(elem,type,time,to){
  var pos=0;
   fadeOpacityTime=setInterval(function(){
     setOpacity(elem,(type>0?pos:100-pos));
     pos+=5;
    if(pos==105){if(to){pos=0;type*=-1;}else clearFadeOpacity();}
   },time);
}
function clearFadeOpacity(){if(fadeOpacityTime){clearInterval(fadeOpacityTime);fadeOpacityTime=null;}}
function setOpacity(elem,level){
  if(elem.filters) elem.style.filter = 'alpha(opacity='+level+')';
  else elem.style.opacity=level/100;
}

var fadeSizeTime;
//ep:elem=domobject,type=1 or -1,toSize={width:100,height:200,top:{from:10,to:20},left:{from:10,to:20}} 可以省略不想对其应用动画的属性,time=50,to=true or 缺省该参数则不会应用往返循环的动画
function fadeSize(elem,type,toSize,time,to){
  var pos=0;
   fadeSizeTime=setInterval(function(){
     setSize(elem,{width:toSize.width,height:toSize.height,left:toSize.left,top:toSize.top,pos:(type>0?pos:100-pos)});
     pos+=5;
    if(pos==105){if(to){pos=0;type*=-1;}else clearFadeSize();}
   },time);
}
function clearFadeSize(){if(fadeSizeTime){clearInterval(fadeSizeTime);fadeSizeTime=null;}}
function setSize(elem,size){
  if(size.width) elem.style.width=size.width*size.pos/100+"px";
  if(size.height) elem.style.height=size.height*size.pos/100+"px";
  if(size.left) elem.style.left=size.left.from+(size.left.to-size.left.from)*size.pos/100+"px";
  if(size.top) elem.style.top=size.top.from+(size.top.to-size.top.from)*size.pos/100+"px";
}