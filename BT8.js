<!DOCTYPE html>
<html>
<body>

<p>Video to use:</p>
<video id="video1" controls width="270" >
  <source src="mov_bbb.mp4" type='video/mp4'>
  <source src="mov_bbb.ogg" type='video/ogg'>
  <source src="mov_bbb.webm" type='video/webm'>
</video>

<p>Canvas:</p>
<canvas id="myCanvas" width="270" height="135" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<script>

var v = document.getElementById("video1");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var i;

v.addEventListener("play", function() {i = window.setInterval(function() {ctx.drawImage(v,5,5,260,125)},20);}, false);
v.addEventListener("pause", function() {window.clearInterval(i);}, false);
v.addEventListener("ended", function() {clearInterval(i);}, false); 
 
</script>