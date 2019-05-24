

var myElement = document.getElementById("intro");
document.getElementById("demo1a").innerHTML = 
"The text from the intro paragraph is " + myElement.innerHTML;

var x = document.getElementsByTagName("p");
document.getElementById("demo1b").innerHTML = 
'The text in first paragraph (index 0) is: ' + x[0].innerHTML;

var x = document.getElementById("main1c");
var y = x.getElementsByTagName("p");
document.getElementById("demo1c").innerHTML = 
'The first paragraph (index 0) inside "main1c" is: ' + y[0].innerHTML;

var x = document.getElementsByClassName("intro1d");
document.getElementById("demo1d").innerHTML = 
'The first paragraph (index 0) with class="intro1d": ' + x[0].innerHTML;

var x = document.querySelectorAll("p.intro1e");
document.getElementById("demo1e").innerHTML = 
'The first paragraph (index 0) with class="intro1e": ' + x[0].innerHTML;

function myFunction1f() {
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo1f").innerHTML = text;
  }












  document.getElementById("p2").style.color = "blue";
  document.getElementById("p2").style.fontFamily = "Arial";
  document.getElementById("p2").style.fontSize = "larger";












  function myMove() {
    var elem = document.getElementById("animate1g");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }






  function changeText2a(id) {
    id.innerHTML = "Ooops!";
  }

  function displayDate2b() {
    document.getElementById("demo").innerHTML = Date();
  }

  function checkCookies2b() {
    var text = "";
    if (navigator.cookieEnabled == true) {
      text = "Cookies are enabled.";
    } else {
      text = "Cookies are not enabled.";
    }
    document.getElementById("demo2b").innerHTML = text;
  }


  function myFunction2c() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }

  function mOver2d(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut2d(obj) {
    obj.innerHTML = "Mouse Over Me"
  }

   
  function mDown2e(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp2e(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }


















  document.getElementById("myBtn3a").addEventListener("click", displayDate);
  function displayDate() {
    document.getElementById("demo3a").innerHTML = Date();
  }

  document.getElementById("myBtn3b").addEventListener("click", function() {
    alert("Hello World!");
  });

  var x = document.getElementById("myBtn3c");
  x.addEventListener("click", myFunction3c);
  x.addEventListener("click", someOtherFunction3c);
  function myFunction3c() {
    alert ("Hello World!");
  }
  function someOtherFunction3c() {
    alert ("This function was also executed!");
  }

  var x = document.getElementById("myBtn3d");
  x.addEventListener("mouseover", myFunction);
  x.addEventListener("click", mySecondFunction);
  x.addEventListener("mouseout", myThirdFunction);
  function myFunction() {
    document.getElementById("demo3d").innerHTML = "Moused over!<br>";
  }
  function mySecondFunction() {
    document.getElementById("demo3d").innerHTML = "Clicked!<br>";
  }
  function myThirdFunction() {
    document.getElementById("demo3d").innerHTML = "Moused out!<br>";
  }


//   OR
// var x = document.getElementById("myBtn3d");
// x.addEventListener("mouseover", myFunction);
// x.addEventListener("click", mySecondFunction);
// x.addEventListener("mouseout", myThirdFunction);
// function myFunction() {
//   document.getElementById("demo3d").innerHTML += "Moused over!<br>";
// }
// function mySecondFunction() {
//   document.getElementById("demo3d").innerHTML += "Clicked!<br>";
// }
// function myThirdFunction() {
//   document.getElementById("demo3d").innerHTML += "Moused out!<br>";
// }

window.addEventListener("resize", function(){
    document.getElementById("demo3e").innerHTML = Math.random();
  });

  var p1 = 5;
  var p2 = 7;
  document.getElementById("myBtn3f").addEventListener("click", function() {
    myFunction3f(p1, p2);
  });
  function myFunction3f(a, b) {
    var result = a * b;
    document.getElementById("demo3f").innerHTML = result;
  }


  document.getElementById("myP1").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, false);
  
  document.getElementById("myDiv1").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, false);
  
  document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, true);
  
  document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, true);

  document.getElementById("myDIV3g").addEventListener("mousemove", myFunction);
  function myFunction() {
    document.getElementById("demo3g").innerHTML = Math.random();
  }
  function removeHandler() {
    document.getElementById("myDIV3g").removeEventListener("mousemove", myFunction);
  }















  document.getElementById("id024a").innerHTML = document.getElementById("id014a").innerHTML;

  document.getElementById("id024b").innerHTML = document.getElementById("id014b").firstChild.nodeValue;

  document.getElementById("id024c").innerHTML = document.getElementById("id014c").childNodes[0].nodeValue;

  document.getElementById("id024d").innerHTML = document.getElementById("id014d").nodeName;

  document.getElementById("id024e").innerHTML = document.getElementById("id014e").nodeType;



















  var para = document.createElement("p");
  var node = document.createTextNode("This is new.");
  para.appendChild(node);
  var element = document.getElementById("div15a");
  element.appendChild(para);

  var para5b = document.createElement("p");
  var node5b = document.createTextNode("This is new.");
  para5b.appendChild(node5b);
  var element5b = document.getElementById("div15b");
  var child5b = document.getElementById("p25b");
  element.insertBefore(para5b,child5b);

  var parent5c = document.getElementById("div15c");
  var child5c = document.getElementById("p15c");
  parent.removeChild(child5c);

  var parent5d = document.getElementById("div15d");
  var child5d = document.getElementById("p15d");
  var para5d = document.createElement("p");
  var node5d = document.createTextNode("This is new.");
  para5d.appendChild(node5d);
  parent5d.replaceChild(para5d,child5d);

















  var myCollection = document.getElementsByTagName("p");
  document.getElementById("demo6a").innerHTML =
  "The innerHTML of the second paragraph is: " +
  myCollection[1].innerHTML;

  var myCollection = document.getElementsByTagName("p");
  document.getElementById("demo6b").innerHTML = 
  "This document contains " + myCollection.length + " paragraphs.";

  function myFunctio6cn() {
    var myCollection = document.getElementsByTagName("p");
    var i;
    for (i = 0; i < myCollection.length; i++) {
      myCollection[i].style.color = "red";
    }
  }
















  


















































