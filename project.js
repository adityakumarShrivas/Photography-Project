gsap.fromTo(
    "#text", // Target element
    { opacity: 0, scale: 0.5 }, // Initial state
    { opacity: 1, scale: 1, duration: 3, ease: "power2.out" } // Final state
  );

  let tl2=gsap.timeline({
    scrollTrigger:{
    trigger:".info",
    scroller:"body",
    scrub:2,
    markers:false,
    start:"0% 90%",
    end:"50% 50%"
}
})

tl2.from(".heading",
    { opacity: 0, scale: 0.5 }, // Initial state
    { opacity: 1, scale: 1, duration: 3, ease: "power2.out" }
    ,"a")

tl2.from(".card1",{
        x:-600,
        duration:2,
        scrub:1,
        ease: "power2.inOut"
        },"a")
tl2.from(".card2",{
            y:400,
            duration:2,
            scrub:1,
            ease: "power2.inOut"
            },"a")

tl2.from(".card3",{
                x:600,
                duration:2,
                scrub:1,
                ease: "power2.inOut"
                },"a")

tl2.from(".card4",{
                    x:-600,
                    duration:2,
                    scrub:1,
                    ease: "power2.inOut"
                    },"a")           


tl2.from(".card5",{
                        y:600,
                        duration:2,
                        scrub:1,
                        ease: "power2.inOut"
                        },"a")


tl2.from(".card6",{
    x:600,
    duration:2,
    scrub:1,
    ease: "power2.inOut"
    },"a")


let tl3=gsap.timeline({
    scrollTrigger:{
    trigger:".work",
    scroller:"body",
    scrub:2,
    markers:false,
    start:"0% 90%",
    end:"50% 50%"
}
})

tl3.from(".work h2",{
    x:980,
    duration:1,
    scrub:1,
    ease: "power2.inOut"
},"a")


tl3.from(".category2",{
    x:400,
    duration:1,
    scrub:1,
    ease: "power2.inOut"
},"a")


tl3.from(".category",{
    x:-400,
    duration:1,
    scrub:1,
    ease: "power2.inOut"
},"a")



let tl4=gsap.timeline({
    scrollTrigger:{
    trigger:".contact",
    scroller:"body",
    scrub:2,
    markers:false,
    start:"0% 90%",
    end:"50% 50%"
}
})

tl4.from(".conHeading,.email,.mobile,.social_media_icons",{
    x:-400,
    duration:1,
    scrub:1,
    ease: "power2.inOut"
},"a")

