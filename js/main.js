const timeLine = gsap.timeline();

timeLine.from(".text-1 div", {
    delay: 0.3,
    duration: 0.5,
    stagger: 0.1,
    y: 60
});

timeLine.from(".text-2 div", {
    delay: 0.1,
    duration: 0.5,
    stagger: 0.1,
    y: 60
});