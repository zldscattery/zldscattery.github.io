// kittens anim
var tl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});
tl.from(".contact-instr", {
    duration:2,
    opacity:0,
    y:500,
});
tl.from("#form", {
    duration:2,
    opacity:0,
    y:500,
    stagger: 0.5,
});
tl.from("#nav", {
    duration:2,
    y:-200,
}, "-=2");