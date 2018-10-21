import DNATween from './DNATween';

export default class DNTimeLineElement {
    constructor(domeName, options) {
        this.domName = domeName;
        this.tl = new TimelineMax(options);
        this.tl.name = "timeline_" + this.domName;
    }

    registerTweensIntoElementTimeLine(options) {
        this.tweenStart = new DNATween(this.domName, "start", { duration: options.start.duration, css: options.start.css || {} });
        this.tweenEnd = new DNATween(this.domName, "end", { duration: options.end.duration, css: options.end.css || {} });
        this.addTweenToTimeline();
        this.updateTimeOffsetBetween2Tweens(options.offsetTime || 4);
        this.mode = options.mode || "canvas";
    }

    addTweenToTimeline() {
        this.tl
            .add(this.tweenStart.getTween())
            .add(this.tweenEnd.getTween());
    }

    updateTimeOffsetBetween2Tweens(value) {
        console.log('offsetValue', Number(this.tweenStart.getTween().duration()) + Number(value));
        this.tweenEnd.updateStartTime(Number(this.tweenStart.getTween().duration()) + Number(value));
    }

    getTween(name) {
        return (name === "start") ? this.tweenStart : this.tweenEnd;
    }

    updateDuration(tween, value) {
        tween.updateDuration(value)
    }

    updateCss(tween, css) {
        tween.updateCss(css, this.mode);
    }

    switchMode(tween, mode){
        this.mode = mode;
        if(mode === "animation"){
            tween.switchAnimationMode()
        }else{
            tween.switchCanvasMode();
        }
    }


    removeTween(tl, tween){
        tl.remove(tween)
    }
    removeTimeLine(tl){
        let children = tl.getChildren();
            if (!children.length) return;
            tl.pause();
            tl.progress(1);
            children.forEach(tween => {
                if (tween.name === 'end') {
                    tween.seek(0);
                }
                this.removeTween(tl,tween);
            });
            tl.pause(0);
            tl.remove();
    }

    startPosition(value){
        this.tl.seek(value);
    }

    getTweenStartDuration(){
        return this.getTween("start").getTween().duration();
    }

    getTimeLineInstance() {
        return this.tl;
    }

    getDuration(){
        return this.tl.duration()
    }

    getProgress(){
        return this.tl.progress();
    }

    play() {
        this.tl.play();
    }

    pause() {
        this.tl.pause();
    }

    reverse() {
        this.tl.reverse();
    }

    restart() {
        this.tl.restart()
    }
}

