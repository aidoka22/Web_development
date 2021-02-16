
var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("span");
  var box=document.createElement("input");
  box.type="checkbox";
  //var txt = document.createTextNode("\u00D7");
  var x = document.createElement("IMG");
  x.setAttribute("src", "https://www.onespy.in/images/feature-trash.png?v=20200101-2");
  x.setAttribute("width", "20");
  x.setAttribute("height", "20");
  x.setAttribute("alt", "The Pulpit Rock");
  span.className = "close";
  box.className="box";
  span.appendChild(x);
  mylist[i].appendChild(span);
  mylist[i].appendChild(box);

}

var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("ss").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Write something(");
  } else {
    document.getElementById("listitem").appendChild(li);
  }
  document.getElementById("ss").value = "";

  var span = document.createElement("span");
  var box=document.createElement("input");
  box.type="checkbox";
  //var txt = document.createTextNode("\u00D7");
  var x = document.createElement("IMG");
  x.setAttribute("src", "https://www.onespy.in/images/feature-trash.png?v=20200101-2");
  x.setAttribute("width", "20");
  x.setAttribute("height", "20");
  x.setAttribute("alt", "The Pulpit Rock");
  span.className = "close";
  box.className="box";
  span.appendChild(x);
  li.appendChild(span);
  li.appendChild(box);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}
;