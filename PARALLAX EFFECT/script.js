gsap.to("#lower-part-1>.lower1",{
    scrollTrigger:{
        trigger:"#main",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:2,
    },
    y: "-60vw",
    duration:10
},"anim")
gsap.to("#upper-part-1>.upper1", {
  scrollTrigger: {
    trigger: "#main",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 2,
  },
  y: "-40vw",
  duration: 7,
},"anim");

gsap.to("#lower-part-2>.lower2", {
  scrollTrigger: {
    trigger: "#main",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 2,
  },
  y: "-60vw",
  duration: 10,
},"anim");
gsap.to("#upper-part-2>.upper2", {
  scrollTrigger: {
    trigger: "#main",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 2,
  },
  y: "-40vw",
  duration: 7,
},"anim");