gsap.registerPlugin(ScrollTrigger);

//Smooth Scrollbar js
const myScroller = document.querySelector("#custom-scroll");
let options = { damping: 0.08 };
const pageScroller = Scrollbar.init(myScroller, options);

// copyright year
const el = document.getElementById("year");
const currentYear = new Date().getFullYear();
el.innerText = currentYear;

// Manual filters
$(document).ready(function () {
  $(".nav-link").click(function () {
    // let accId = $(this).attr('href');
    let accId = $(this).attr("data-acc");
    $(accId).addClass("show");
    $(accId)
      .parents(".accordion-item")
      .find(".accordion-button")
      .removeClass(".collapsed");

    $(accId)
      .parents(".accordion-item")
      .siblings()
      .find(".accordion-collapse")
      .removeClass("show");
    $(accId)
      .parents(".accordion-item")
      .siblings()
      .find(".accordion-button")
      .removeClass("collapsed");

    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".btn-player").click(function () {
    var getLinkType, getElType, getElNotType;

    // Feature-detect for dataset support
    if (!this.dataset) {
      // If IE 10 or lower
      getLinkType = this.getAttribute("data-team");
    } else {
      // For other browsers
      getLinkType = this.dataset.team;
    }

    getElType = $("div[data-players-team~=" + getLinkType + "]");

    getElNotType = $("div[data-players-team!=" + getLinkType + "]");

    $(".player").filter(getElNotType).css("display", "none");
    $(".player").filter(getElType).css("display", "block");
  });


// Contact toggle
$(".contact-toggle li a").unbind('click');
$('.contact-toggle li a').click(function() {
  $(this).toggleClass("active");
  $('.contact-overlay').slideToggle();
})

// Navigation toggle
$(".hamburger").unbind('click');
$('.hamburger').click(function() {
  $(this).toggleClass("active");
  $('.anwa-navOverlay').slideToggle();
  $('.anwa-banner').slideToggle();
  $('.anwa-intro').slideToggle();
  $('.anwa-omniyat').slideToggle();
  $('footer').slideToggle();
  $('.anwa-banner .anwa-banner-caption h1').toggle();
  $('.anwa-banner .anwa-banner-caption a').toggle();
  $('.anwa-banner .anwa-banner-caption h3').toggle();
})

});
$(window).load(function () {
  $(".manualTabs .accordion-item:first-child .btn-player").click();
});






// animation
///////////////////////////////////////
// Update ScrollTrigger
///////////////////////////////////////

pageScroller.setPosition(0, 0);
pageScroller.track.xAxis.element.remove();

// How to get them to work together
ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      pageScroller.scrollTop = value;
    }

    return pageScroller.scrollTop;
  },
});

pageScroller.addListener(ScrollTrigger.update);




///////////////////////////////////////
// Test animation
///////////////////////////////////////

let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});

gsap.set('.lead', {opacity: 0, scale: 0}); 
gsap.to(".lead", {
  scrollTrigger: {
    trigger: "section",
    toggleActions: "restart none none reset",
    scale: 0,
  opacity: 0,
  },
  scale: 1,
  opacity: 1,
  stagger: {
    each: 0.1,
    from: 'start'
  }
  
});
