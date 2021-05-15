
Splitting();

// let blocks = document.getElementsByClassName('block')
// let blocksContainer = document.getElementsByClassName('block-container')

// let hs = new HorizontalScroll.default({
//     blocks: blocks,
//     container: blocksContainer,
//     isAnimated: true,
//     springEffect: 0.8
// })

gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

// locoScroll.on('scroll', ScrollTrigger.update)

// ScrollTrigger.scrollerProxy("[data-scroll-container]", {
//     scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
//     },
//     getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
// })

console.log("I'm Working!")

gsap.to('.projects-container', {
    scrollTrigger: {
        trigger: '.projects-container',
        start: 'center center',
        // scroller: '[data-scroll-container]',
        scrub: 1,
        // pin: true
        pin: '#projects',
        // horizontal: true
    },
    x: '-65%',
    duration: 20
})

const horStrips = document.querySelectorAll('#roles [data-scroll-direction="horizontal"]')
console.log(horStrips)

let tl = gsap.timeline({
    duration: 3
})

tl.to(horStrips[0], {
    scrollTrigger: {
        trigger: '#roles',
        start: 'top bottom',
        scrub: 2,
    },
    x: '-30%',
    duration: 10
})

tl.to(horStrips[1], {
    scrollTrigger: {
        trigger: '#roles',
        start: 'top bottom',
        scrub: 2,
    },
    x: '30%',
    duration: 10
})

tl.to(horStrips[2], {
    scrollTrigger: {
        trigger: '#roles',
        start: 'top bottom',
        scrub: 2,
    },
    x: '-10%',
    duration: 7
})