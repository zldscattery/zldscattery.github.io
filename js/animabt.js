// kittens anim
var tl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});
tl.from(".abt-img", {
    duration:2,
    opacity:0,
    x:-500,
});
tl.from(".abt-text", {
    duration:2,
    opacity:0,
    x:500,
}, "-=2");
tl.from("#nav", {
    duration:2,
    y:-200,
}, "-=1");
tl.from(".abt-grnt", {
    duration:2,
    opacity:0,
    y: 500,
    stagger: 0.5,
}, "-=2");
tl.from(".abt-txt", {
    duration:2,
    opacity:0,
    y: 500,
}, "-=2");