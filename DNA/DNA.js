const DNA = (function () {
    let tl;
    function createInstance(options) {
        tl = new TimelineMax(options);
        return tl;
    };
    return {
        getMainTimeline: function (options) {
            if (!tl) {
                tl = createInstance(options);
            }
            return tl;
        },
        updateTimeOffset: function (timeline, relativeTime) {
            tl.add(timeline, relativeTime);
        },
        removeTimeLine: function (tweenName) {
            tl.remove(tweenName);
        },
        switchBeginningMode: function () {
            tl.seek(0)
        },
        switchToEndMode: function () {
            tl.seek(tl.duration());
        },
        pause: function(){
            tl.pause();
        },
        play: function(){
            tl.play()
        },
        reverse: function(){
            tl.reverse()
        },
        restart: function(){
            tl.restart()
        },
        updateStartTime: function (tween, value) {
            tween.startTime(value);
        },
        removeAllTimeLine: function(){
            let children = tl.getChildren();
            if (!children.length) return;
            tl.pause();
            tl.progress(1);
            children.forEach(tween => {
                if (tween.name === 'end') {
                    tween.seek(0);
                }
                DNA.removeTimeLine(tween)
            });
            tl.pause(0);
            tl.remove();
        },
        seekingPosition: function(value){
            tl.seek(value);
        }
    };
})();


export default DNA;

