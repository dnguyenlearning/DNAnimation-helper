!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}},function(e,t,n){"use strict";n.r(t);var i=function(){var e;return{getMainTimeline:function(t){return e||(e=function(t){return e=new TimelineMax(t)}(t)),e},updateTimeOffset:function(t,n){e.add(t,n)},removeTimeLine:function(t){e.remove(t)},switchBeginningMode:function(){e.seek(0)},switchToEndMode:function(){e.seek(e.duration())},pause:function(){e.pause()},play:function(){e.play()},reverse:function(){e.reverse()},restart:function(){e.restart()},updateStartTime:function(e,t){e.startTime(t)},removeAllTimeLine:function(){var t=e.getChildren();t.length&&(e.pause(),e.progress(1),t.forEach(function(e){"end"===e.name&&e.seek(0),i.removeTimeLine(e)}),e.pause(0),e.remove())},seekingPosition:function(t){e.seek(t)}}}(),a=i,r=n(0),o=n.n(r),s=n(1),u=n.n(s),c=function(){function e(t,n,i){o()(this,e),this.domName=$(t),this.tweenName=n||"end",this.duration=i.duration,this.css=i.css,this.createTween()}return u()(e,[{key:"createTween",value:function(){return this.tween="start"===this.tweenName?new TweenMax.from(this.domName,this.duration,this.css):new TweenMax.to(this.domName,this.duration,this.css),this.tween.name=this.tweenName,this.tween}},{key:"getTween",value:function(){return this.tween}},{key:"updateDuration",value:function(e){this.duration=e,this.tween.duration(e)}},{key:"switchCanvasMode",value:function(){"start"===this.tween.name&&this.tween.seek(this.tween.duration())}},{key:"switchAnimationMode",value:function(){"start"===this.tween.name&&this.tween.seek(0)}},{key:"updateCss",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.css=e,this.tween.updateTo(e),this.switchCanvasMode()}},{key:"updateStartTime",value:function(e){this.tween.startTime(e)}}]),e}(),d=function(){function e(t,n){o()(this,e),this.domName=t,this.tl=new TimelineMax(n),this.tl.name="timeline_"+this.domName}return u()(e,[{key:"registerTweensIntoElementTimeLine",value:function(e){this.tweenStart=new c(this.domName,"start",{duration:e.start.duration,css:e.start.css}),this.tweenEnd=new c(this.domName,"end",{duration:e.end.duration,css:e.end.css}),this.addTweenToTimeline(),this.updateTimeOffsetBetween2Tweens(e.offsetTime||4),this.mode=e.mode||"canvas"}},{key:"addTweenToTimeline",value:function(){this.tl.add(this.tweenStart.getTween()).add(this.tweenEnd.getTween())}},{key:"updateTimeOffsetBetween2Tweens",value:function(e){console.log("offsetValue",Number(this.tweenStart.getTween().duration())+Number(e)),this.tweenEnd.updateStartTime(Number(this.tweenStart.getTween().duration())+Number(e))}},{key:"getTween",value:function(e){return"start"===e?this.tweenStart:this.tweenEnd}},{key:"updateDuration",value:function(e,t){e.updateDuration(t)}},{key:"updateCss",value:function(e,t){e.updateCss(t,this.mode)}},{key:"switchMode",value:function(e,t){this.mode=t,"animation"===t?e.switchAnimationMode():e.switchCanvasMode()}},{key:"getTimeLineInstance",value:function(){return this.tl}},{key:"play",value:function(){this.tl.play()}},{key:"pause",value:function(){this.tl.pause()}},{key:"reverse",value:function(){this.tl.reverse()}},{key:"restart",value:function(){this.tl.restart()}}]),e}();window.DNA=a,window.DNTimeLineElement=d;t.default={DNA:a,DNTimeLineElement:d}}]);