export default class DNATween {
    constructor(domName, initPosition, options) {
        this.domName = $(domName);
        this.tweenName = initPosition || 'end';
        this.duration = options.duration;
        this.css = options.css;
        this.createTween();
    }

    createTween() {
        this.tween = this.tweenName === 'start'
            ? new TweenMax.from(this.domName, this.duration, this.css)
            : new TweenMax.to(this.domName, this.duration, this.css);

        this.tween.name = this.tweenName;
        return this.tween;
    }

    getTween() {
        return this.tween;
    }

    updateDuration(value) {
        this.duration = value;
        this.tween.duration(value);
    }

    switchCanvasMode(){
        if (this.tween.name === "start") this.tween.seek(this.tween.duration());
    }

    switchAnimationMode(){
        if (this.tween.name === "start") this.tween.seek(0);
    }

    updateCss(css, mode = "canvas") {
        this.css = css;
        this.tween.updateTo(css)
        this.switchCanvasMode()
    }

    updateStartTime(value) {
        this.tween.startTime(value);
    }
}