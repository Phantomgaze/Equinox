// $(".cntr-p").scramble(4000, 20, "alphabet", true);
// $(".cntr-p2").scramble(4000, 20, "alphabet", true);

var tl = gsap.timeline();


tl.to(".text-loader", {
    opacity: 1,
    duration: 0.07,
    stagger: {
        each: 0.14, //0.07 to show + 0.07 to hide = 0.14
        repeat: 1,
        yoyo: true
    }
})
    .to(".loader", {
        display: "none",
    })
    .to(".cntr-p", {
        onStart: function () {
            $(".cntr-p").scramble(2000, 50, "alphabet", true);

        }
    }, 'scr')
    .to(".cntr-p2", {
        onStart: function () {
            $(".cntr-p2").scramble(2000, 50, "alphabet", true);

        }
    }, 'scr')
    .to(".info", {
        onStart: function () {
            $(".info").scramble(2000, 50, "alphabet", true);

        }
    }, 'scr')
    .to(".contact", {
        onStart: function () {
            $(".contact").scramble(2000, 50, "alphabet", true);

        }
    }, 'scr')


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#one",
        pin: true,
        // markers: true,
        start: "50% 50%",
        end: "150% 50%",
        scrub: true
    }
});

tl2.to(".flex-p-content", {
    scale: "0.8"
})
    .to("#one-text", {
        top: "50%"
    })


gsap.timeline({
    scrollTrigger: {
        trigger: "#img-one",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-one", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-two",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-two", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-three",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-three", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-four",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-four", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-five",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-five", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-six",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-six", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-seven",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-seven", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#last",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to(".flex-p-content", {
        scale: "1.2",
    });


document.querySelector("#img-one").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#dfd2be";
})

document.querySelector("#img-one").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
})


document.querySelector("#img-two").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#1a354e";
})

document.querySelector("#img-two").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
})


document.querySelector("#img-three").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#b11215";
  })
  
  document.querySelector("#img-three").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
  })
  
  
  document.querySelector("#img-four").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#062529";
  })
  
  document.querySelector("#img-four").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
  })
  
  
  document.querySelector("#img-five").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#b05d22";
  })
  
  document.querySelector("#img-five").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
  })
  
  
  document.querySelector("#img-six").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#281069";
  })
  
  document.querySelector("#img-six").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
  })
  
  
  
  document.querySelector("#img-seven").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#333";
  })
  
  document.querySelector("#img-seven").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
  })
  










// This is first long process using through only GSAP .to

// tl.to(".text-1", {
//     opacity: 1,
//     duration: 0.07,
//   })
//     .to(".text-1", {
//       duration: 0.07,
//       opacity: 0,
//     })
//     .to(".text-2", {
//       duration: 0.07,
//       opacity: 1,
//     })
//     .to(".text-2", {
//       duration: 0.07,
//       opacity: 0,
//     })
//     .to(".text-3", {
//       duration: 0.07,
//       opacity: 1,
//     })
//     .to(".text-3", {
//       duration: 0.07,
//       opacity: 0,
//     })
//     .to(".text-4", {
//       duration: 0.07,
//       opacity: 1,
//     })
//     .to(".text-4", {
//       duration: 0.07,
//       opacity: 0,
//     })
//     .to(".text-5", {
//       duration: 0.07,
//       opacity: 1,
//     })
//     .to(".text-5", {
//       duration: 0.07,
//       opacity: 0,
//     })
//     .to(".text-6", {
//       duration: 0.07,
//       opacity: 1,
//     })
//     .to(".text-6", {
//       duration: 0.07,
//       opacity: 0,
//     })
//     .to(".text-7", {
//       duration: 0.07,
//       opacity: 1,
//     })
//     .to(".text-7", {
//       duration: 0.07,
//       opacity: 0,
//     })
//     .to(".text-8", {
//       duration: 0.07,
//       opacity: 1,
//     })
//     .to(".text-8", {
//       duration: 0.07,
//       opacity: 0,
//     })
//     .to(".text-9", {
//       duration: 0.07,
//       opacity: 1,
//     })
//     .to(".text-9", {
//       duration: 0.07,
//       opacity: 0,
//     })
//     .to(".text-10", {
//       duration: 0.07,
//       opacity: 1,
//     })
//     .to(".text-10", {
//       duration: 0.07,
//       opacity: 0,
//     })
//     .to(".text-23", {
//       duration: 0.07,
//       opacity: 1,
//     })
//     .to(".text-23", {
//       duration: 0.07,
//       opacity: 0,
//     })
//     .to(".text-63", {
//       duration: 0.07,
//       opacity: 1,
//     })
//     .to(".text-63", {
//       duration: 0.07,
//       opacity: 0,
//     })
//     .to(".text-97", {
//       duration: 0.07,
//       opacity: 1,
//     })
//     .to(".text-97", {
//       duration: 0.07,
//       opacity: 0,
//     })
//     .to(".text-100", {
//       duration: 0.07,
//       opacity: 1,
//     })
//     .to(".loader", {
//       display: "none",
//     })