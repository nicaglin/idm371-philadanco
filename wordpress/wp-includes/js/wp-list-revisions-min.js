!function(e){var t=function(){var e=document.getElementById("post-revisions"),n=e?e.getElementsByTagName("input"):[];e.onclick=function(){var e,t=0,i;for(e=0;e<n.length;e++)t+=n[e].checked?1:0,i=n[e].getAttribute("name"),n[e].checked||!("left"==i&&t<1||"right"==i&&1<t&&(!n[e-1]||!n[e-1].checked))||n[e+1]&&n[e+1].checked&&"right"==n[e+1].getAttribute("name")?"left"!=i&&"right"!=i||(n[e].style.visibility="visible"):n[e].style.visibility="hidden"},e.onclick()};e&&e.addEventListener?e.addEventListener("load",t,!1):e&&e.attachEvent&&e.attachEvent("onload",t)}(window);