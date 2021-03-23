gsap.registerPlugin(CSSRulePlugin);
let preloaderRule = CSSRulePlugin.getRule("#preLoader::before");
let imgRule = CSSRulePlugin.getRule(".imgWrapper::before");
let tl = gsap.timeline();


tl.to(preloaderRule,{
    height:'0%',
    duration:2,
    delay:5,
    ease:"expo.inOut"
})
.to('.textWrapper',{
    opacity:0,
    visibility:'hidden',
    duration:0.2,
},'-=1')

.to('#preLoader',{
    height:'0vh',
    duration:2,
    ease:'expo.inOut'
},'-=1.8')

.to('#landingTaareImg',{
    visibility:'visible',
    opacity:0.5,
    scale:1,
    duration:1,
    ease:'expo.inOut'
})
.fromTo('#landingLogo',{
    opacity : 0,
},{
    opacity:1,
    duration:2,
    ease:'expo.out',
})

.fromTo('.landingLink',{
    opacity : 0,
    y:20,
},{
    opacity:1,
    y:0,

    duration:2,
    ease: "power4.inOut",
    stagger:0.25
},'-=2')

.fromTo('.lsLink',{
    y:10,
    opacity:0
},{
    y:0,
    opacity:1,

    duration:1,
    ease:'power4.inOut',
    stagger:0.25
},'-=2')

.from('.upcomingProjects',{
    opacity:0,
    duration:1,
    ease:'power4.inOut'
},'-=1')
