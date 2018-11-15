//-------------------轮播图-------------------
function task(){
    //查找现在的class为show的img
    var img=slider.getElementsByClassName("show")[0];
    img.className="";//清空img的class
    //如果有下个兄弟
    if(img.nextElementSibling)
        //设置img的下个兄弟的class为show
       img.nextElementSibling.className="show";
    else//否则
        //设置img的父元素的第一个孩子的className为show
      img.parentNode.children[0].className="show";

}
  setInterval(task,5000);
