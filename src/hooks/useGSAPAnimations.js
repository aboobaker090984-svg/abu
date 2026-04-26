import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = (isLoading) => {
  useEffect(() => {
    if (isLoading) return;

    // Small delay to ensure DOM is ready and loader animation is finished
    const timer = setTimeout(() => {

      // Fade up on scroll
      gsap.utils.toArray('.gsap-fade-up').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Fade from left
      gsap.utils.toArray('.gsap-fade-left').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Fade from right
      gsap.utils.toArray('.gsap-fade-right').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Scale in
      gsap.utils.toArray('.gsap-scale-in').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Staggered children inside .gsap-stagger-parent
      gsap.utils.toArray('.gsap-stagger-parent').forEach((parent) => {
        const children = parent.querySelectorAll('.gsap-stagger-child');
        gsap.fromTo(children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: parent,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Parallax & Zoom on hero background
      const heroBg = document.querySelector('.hero-parallax');
      if (heroBg) {
        gsap.to(heroBg, {
          yPercent: 20,
          scale: 1.2,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-parallax-container',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

    }, 300);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isLoading]);
};
