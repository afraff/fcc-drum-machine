(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(7),o=a.n(r),i=(a(14),a(1)),d=a(2),c=a(4),l=a(3),m=a(5),p=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).clickHandler=function(){a.audio.play(),a.props.handleDisplay(a.props.id)},a.keyPressHandler=function(e){e.keyCode===a.props.keyCode&&(a.audio.play(),a.props.handleDisplay(a.props.id))},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyPressHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.keyPressHandler)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"drum-pad",id:this.props.id,onClick:this.clickHandler},n.a.createElement("h1",null,this.props.letter),n.a.createElement("audio",{id:this.props.letter,className:"clip",src:this.props.src,ref:function(t){return e.audio=t}}))}}]),t}(s.Component)),u=[{id:"Chewbacca",letter:"q",keyCode:81,src:"https://www.myinstants.com/media/sounds/chewbacca_PaZrPCY.mp3"},{id:"R2D2",letter:"w",keyCode:87,src:"https://www.myinstants.com/media/sounds/r2d2.swf.mp3"},{id:"Lightsaber",letter:"e",keyCode:69,src:"https://www.myinstants.com/media/sounds/sithignition.mp3"},{id:"Blasters",letter:"a",keyCode:65,src:"https://www.myinstants.com/media/sounds/star-wars-blaster-sound-effects-star-wars-sound-effects-mp3cut.mp3"},{id:"Star Destroyer",letter:"s",keyCode:83,src:"https://www.myinstants.com/media/sounds/star-wars-stardestroyer-blaster-sound-effect-1.mp3"},{id:"C3Po",letter:"d",keyCode:68,src:"https://www.myinstants.com/media/sounds/hello-c3po.mp3"},{id:"Yoda",letter:"z",keyCode:90,src:"https://www.myinstants.com/media/sounds/seek-him-out-you-must-yoda.mp3"},{id:"Battle Droid",letter:"x",keyCode:88,src:"https://www.myinstants.com/media/sounds/star-wars-b1-battle-droid_kampfdroide-roger-roger-sound.mp3"},{id:"Admiral Ackbar",letter:"c",keyCode:67,src:"https://www.myinstants.com/media/sounds/adm-ackbar-its-a-trap.mp3"}],y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={display:"Click or Press a Key"},a.displayHandler=function(e){a.setState({display:e})},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"drum-machine",className:"App"},n.a.createElement("h1",{id:"display"},this.state.display),n.a.createElement("div",{id:"drum-pads",className:"stars"},u.map(function(t){return n.a.createElement(p,{key:t.id,id:t.id,letter:t.letter,src:t.src,keyCode:t.keyCode,clickHandler:e.clickHandler,handleDisplay:e.displayHandler})})))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.8cc087e5.chunk.js.map