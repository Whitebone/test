var SHEEP_2048;
(function() {
  'use strict';
  if (SHEEP_2048) {
    SHEEP_2048();
  } else {
    function applyStyles(elem,obj) {
      for (var prop in obj) elem.style[prop]=obj[prop];
    }
    var wrapper=document.createElement("div"),
    frame=document.createElement("iframe");
    frame.src="data:text/html;charset=utf-8,%0A<html>%0A<head> <title>My text editor</title>%0A<style>%0Abody{height: 80vh;background:%232E2E2E;padding: 1.5rem; margin: 0;}%0Adiv:focus{ outline: none; }%0A.editor { background: %231E1E1E; height: 90%; width: 90%; border-radius: 10px; padding: 1rem; overflow: scroll; max-height:80%; font-family: Courier New; font-weight:bold; color:%23FFFFFF; font-size:1rem;  line-height:1.4;  max-width:90%;  height: 90%;  max-height:90%;  margin:0 auto;  }  %0A.editor::before { counter-reset: listing; }%0A.editor div { counter-increment: listing; }%0A.editor div::before { color: %23555; white-space: pre-wrap;  content: counter(listing) ". ";  display: inline-block;  width: 3em;  padding-left: auto;  margin-left: auto;  text-align: right; }  %0A.buttons {  padding-left: 5%;  padding-right: 5%;  padding-top: 0.5rem;  padding-bottom: 0.5rem;  }  %0Abutton { background: %23555;  color: %23EEE;  font-family: Courier New;  font-weight:bold;  padding: 8px 16px;  border-radius: 5px;  text-align: center;  font-size: 16px;  margin: 4px 2px;  opacity: 0.6;  transition: 0.3s;  display: inline-block;  text-decoration: none;  cursor: pointer;  }  %0Abutton:hover {opacity: 1}%0A::-webkit-scrollbar { height: 0px;  width: 20px;  background-color: %23222; }%0A::-webkit-scrollbar-thumb { background-color: %235E5E5E;  border-radius: 20px;  border: 6px solid transparent;  background-clip: content-box; }%0A</style>%0A</head>%0A<body>%0A<div class="editor" spellcheck="false"> <div contenteditable="true"> </div> </div>%0A<div class="buttons"> <button onclick="downloadContent(1)">Save</button> <button onclick="changeFontSize(2)">Text Size +</button> <button onclick="changeFontSize(-2)">Text Size -</button> </div>%0A<script>%0Afunction changeFontSize(val){ let txt = document.getElementsByClassName('editor')[0]; let style = window.getComputedStyle(txt).getPropertyValue('font-size'); let currentSize = parseFloat(style); txt.style.fontSize = (currentSize + val) + 'px'; }%0Afunction downloadContent(tmp){ let a = document.body.appendChild(document.createElement("a")); let today = new Date(); let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + "-" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); a.download = "export" + date.toString() + ".txt"; let textToSave = document.getElementsByClassName("editor")[0]; a.href = "data:text/plain;charset=utf-8," + textToSave.innerText; a.click(); }%0A</script>%0A</body>%0A</html>";
    frame.width=500; // additional 30px to hide scrollbars
    frame.height=500;
    frame.scrolling="no";
    applyStyles(frame,{
      position:'absolute',
      top:'-151.5px',
      left:'-27px',
      border:"none"
    });
    applyStyles(wrapper,{
      position:"fixed",
      zIndex:2147483647,
      display:"block",
      bottom:"10px",
      left:"10px",
      width:"280px",
      height:"280px",
      overflow:"hidden",
      transition:"opacity 0.1s",
      borderRadius:"6px",
      transform:"scale(1)"
    });
    wrapper.appendChild(frame);
    document.body.parentNode.appendChild(wrapper);
    function enter() {wrapper.style.opacity="1";}
    function leave() {wrapper.style.opacity="0";frame.blur();}
    wrapper.addEventListener("mouseenter",enter,false);
    wrapper.addEventListener("mouseleave",leave,false);
    SHEEP_2048=()=>{
      wrapper.removeEventListener("mouseenter",enter,false);
      wrapper.removeEventListener("mouseleave",leave,false);
      wrapper.parentNode.removeChild(wrapper);
      frame=null;
      wrapper=null;
      SHEEP_2048=undefined;
      for (var script of document.querySelectorAll('script[src="https://white-bone.github.io/test/javascript/2048.js"]')) script.parentNode.removeChild(script);
    };
  }
}());
