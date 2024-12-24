document.addEventListener('DOMContentLoaded', function () {
    // For toggling the navbar in mobile mode
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    const navbarMenu = document.getElementById('navbar-sticky');
    const cancelBtn = document.getElementById('cancelBtn');

    gsap.set(navbarMenu, { x: '100%', display: 'none' });

    toggleButton.addEventListener('click', function () {
        gsap.set(navbarMenu, { display: 'block' });
        gsap.to(navbarMenu, {
            x: 0,
            duration: 0.5,
            ease: 'power2.out'
        });

        gsap.from('.links', {
            opacity: 0,
            duration: 1,
            stagger: .1,
            delay: .2
        })
    });

    cancelBtn.addEventListener('click', () => {
        gsap.to(navbarMenu, {
            x: '100%',
            duration: 0.5,
            ease: 'power2.in',
            onComplete: () => {
                gsap.set(navbarMenu, { display: 'none' });
            }
        });
    })
    

    gsap.registerPlugin(ScrollTrigger);

    // Body Section animations
    const animations = [
        {
            target: ".navDown",
            props: {opacity: 0, y: -150, duration: 1.3, ease: "power2.out", delay: 2.5, stagger: 0.2 }
        },
        {
            target: "#welcomeText",
            scrollTrigger: { trigger: "#welcomeText", start: "top 90%" },
            props: { opacity: 0, y: 250, duration: 1.5, ease: "power2.out", delay: 0.5, skewY: 30 }
        },
        {
            target: ".heroText",
            props: { opacity: 0, y: 250, duration: 2, ease: "power2.out", delay: 1.5, skewY: 30, stagger: .5 }
        },
        {
            target: ".heroText2",
            props: { opacity: 0, y: 250, duration: 2, ease: "power2.out", delay: 2.5, skewY: 30, }
        },
        {
            target: "#btnBox .btnSkew",
            props: { opacity: 0, y: 250, duration: 1.3, ease: "power2.out", delay: 2.5, skewY: 30, stagger: .3 }
        },
    ];

    animations.forEach(animation => {
        if (animation.scrollTrigger) {
            gsap.from(animation.target, { ...animation.props, scrollTrigger: animation.scrollTrigger });
        } else {
            gsap.from(animation.target, animation.props);
        }
    });

    // Backbones Section animation
    const backboneText = {
        target: ".overflow-hidden .sectionText",
        scrollTrigger: { trigger: ".overflow-hidden .sectionText", start: "top 80%" },
        props: { opacity: 0, y: 250, duration: 2, delay: 0.5, ease: "power2.out", skewY: 30, stagger: .8 }
    };
    gsap.from(backboneText.target, { ...backboneText.props, scrollTrigger: backboneText.scrollTrigger });

    // Define animations for mobile and desktop
    const createBackAnimations = (elements, props) => {
        elements.forEach(el => {
            gsap.from(el, { ...props, scrollTrigger: { trigger: el, start: "top 90%" } });
        });
    };

    let mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
        createBackAnimations([".back1", ".back2", ".back3"], { opacity: 0, x: 100, duration: 2, ease: "power2.out" });
    });

    mm.add("(min-width: 768px)", () => {
        createBackAnimations([".back1", ".back2", ".back3"], { opacity: 0, y: 100, duration: 2, delay: 0.5, ease: "power2.out" });
    });

    // NEC Winner Section animations
    const necAnimations = [
        {
            target: "#necText",
            scrollTrigger: { trigger: "#necText", start: "top 90%" },
            props: { opacity: 0, y: 250, duration: 2, delay: 0.5, ease: "power2.out", skewY: 30 }
        },
        {
            target: "#necText1",
            scrollTrigger: { trigger: "#necText1", start: "top 90%" },
            props: { opacity: 0, x: 50, duration: 1, delay: 0.5, ease: "power2.out" }
        },
        {
            target: "#necText2",
            scrollTrigger: { trigger: "#necText2", start: "top 90%" },
            props: { opacity: 0, x: 50, duration: 1, delay: 0.6, ease: "power2.out" }
        },
        {
            target: "#necImage",
            scrollTrigger: { trigger: "#necImage", start: "top 90%" },
            props: { opacity: 0, y: 100, duration: 1, ease: "power2.out" }
        },
    ];

    necAnimations.forEach(animation => {
        gsap.from(animation.target, { ...animation.props, scrollTrigger: animation.scrollTrigger });
    });

    // Contact Us Section animation
    gsap.from("#contactText", {
        scrollTrigger: { trigger: "#contactText", start: "top 90%" },
        opacity: 0,
        y: 250,
        duration: 2,
        ease: "power2.out",
        skewY: 30
    });
});
