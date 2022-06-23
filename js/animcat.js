// kittens anim
var tl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});
tl.from("#cats-title", {
    duration:2,
    opacity:0,
    y:500,
    stagger:0.5,
});
tl.from("#nav", {
    duration:2,
    y:-200,
}, "-=1");
tl.from("#cat-intro", {
    duration:2,
    opacity:0,
    y: 500,
    stagger:0.5,
}, "-=2");


// SCROLL-ANIMATIONS
// defaults
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    start: "top bottom",
    end: "center bottom",
    toggleActions: "restart none none reverse",
});

gsap.to("#cat-r1", {
    scrollTrigger: ".cat1",
    duration:1,
    x:0,
    opacity:1,
    stagger:0.5,
});
gsap.to("#cat-l", {
    scrollTrigger: ".cat2",
    duration:1,
    x:0,
    opacity:1,
    stagger:0.5,
});
gsap.to("#cat-r2", {
    scrollTrigger: ".cat3",
    duration:1,
    x:0,
    opacity:1,
    stagger:0.5,
});