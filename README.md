# DNAnimation-helper
    This animation helps to create layer timeline animation for dom element

# Exmple

# Create Options for Main Timeline, each timeline
    var defaultOptions = {
        delay: 0,
        paused: false,
        onComplete: function () {
            console.log('onComplete')
        },
        onCompleteScope: {},
        tweens: [],
        stagger: 0,
        align: 'normal',
        useFrames: false,
        onStart: function () {
            console.log('on start called');
        },
        onStartScope: {},
        onUpdate: function () {
            console.log('on update called');
        },
        onUpdateScope: {},
        onRepeat: function () {
            console.log('on repeat called');
        },
        onRepeatScope: {},
        onReverseComplete: function () {
            console.log('on reverse complete');
        },
        onReverseCompleteScope: {},
        autoRemoveChildren: false,
        smoothChildTiming: false,
        repeat: 0,
        repeatDelay: 0,
        yoyo: false,
        onCompleteParams: [],
        onReverseCompleteParams: [],
        onStartParams: [],
        onUpdateParams: [],
        onRepeatParams: []
    };

# Create array of elements

    let objects = [
        {
            domName: "#box1",
            start: {
                duration: startBox1,
                css: { left: '100px', top: "300px" }
            },
            end: {
                duration: endBox1,
                css: { left: "1000px" }
            },
            offsetTime: offsetTimeBox1,
            startTime: 3
        },
        {
            domName: "#box2",
            start: {
                duration: startBox2,
                css: { left: '200px', top: '300px' }
            },
            end: {
                duration: endBox2,
                css: { left: "-20px", top: "0px" }
            },
            offsetTime: offsetTimeBox2,
            startTime: 1
        }
    ]


# Create MaintimeLine

     let mainTimeline = DNA.getMainTimeline(defaultOptions);

# Register Element into timelineElement
    objects.forEach(element => {
        let timeline = new DNTimeLineElement(element.domName, elementTimelineOptions);
        timeline.registerTweensIntoElementTimeLine({
            start: element.start,
            end: element.end,
            offsetTime: element.offsetTime
        })
        DNA.updateTimeOffset(timeline.getTimeLineInstance(), element.startTime);
    })

     mainTimeline.pause()

# play maintimeline
    DNA.play //function to play maintimeline
    DNA.pause //function to pause maintimeline
    DNA.reverse //function to reverse maintimeline
    DNA.restart //function to restart maintimeline
    DNA.removeAllTimeLine //function to go back current elemtns position
    DNA.seekingPosition  // to preview animation in any second.


# a lot of feature will coming soon.

