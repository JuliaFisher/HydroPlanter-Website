/*function clickDetails(id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = "block";
    } else{
        document.getElementById(id).style.display = "none"
    }
}
*/
var b = false;
var openid = "";

function toggle_visibility(id) {
    if (openid) openid.style.display = 'none';

    var e = document.getElementById(id);
     if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    b = true;
    openid = id;
}

function foo() {
    var e = document.getElementById('foo');
    if(!b) e.style.display = 'none';
    b=false;
}