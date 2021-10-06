import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CSSRulePlugin from "gsap/CSSRulePlugin";


const expandLineAnimation = ({selector, trigger, endTrigger, start, end, markers, stagger,  transformOrigin, delay }) => {
    gsap.registerPlugin(CSSRulePlugin);

    const rule = CSSRulePlugin.getRule(selector);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger,
            endTrigger,
            start,
            end,
            markers
        }
    });
    
        tl.fromTo( rule, {
            cssRule: { scaleX: 0 }
        },
        {
            delay,
            ease: "none",
            cssRule: {
                scaleX: 1,
                transformOrigin,
            }
        }, ">")

    return tl;
}

export default expandLineAnimation;

