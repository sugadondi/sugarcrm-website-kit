// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style');
  msViewportStyle .appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
  document.querySelector('head').appendChild(msViewportStyle);
}

$(document).ready(function() {
  if ($(window).width() >= 768) {
    $('.dropdown-toggle').click(function() {
      var location = $(this).attr('href');
      window.location.href = location;
      return false;
    });
  }
});

// $('ul.nav li.dropdown').hover(function() {
//   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
// }, function() {
//   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
// });

// var timer;

// function openSubmenu() {
//   $('.dropdown').addClass('open');
// }
// function closeSubmenu() {
//   $('.dropdown').removeClass('open');
// }

// $('.dropdown-menu').on('mouseover', function() {
//   clearTimeout(timer);
//   openSubmenu();
// }).on('mouseleave', function() {
//   timer = setTimeout(closeSubmenu, 1000);
// });

// $('.nav-pills-first a').hover(function (e) {
//   e.preventDefault();
//   $(this).tab('show');
// });

// $(document).ready(function() {
//   if ($(window).width() >= 768) {
//     $('.dropdown-toggle').dropdownHover();
//   }
// });

// $(window).resize(function() {
//   if ($(window).width() >= 768 ) {
//     $('.dropdown-toggle').dropdownHover();
//   }
// });

// $(window).bind('resize', function() {
//     window.resizeEvt;
//     $(window).resize(function() {
//         clearTimeout(window.resizeEvt);
//         window.resizeEvt = setTimeout(function() {
//           if ($(window).width() >= 768 ) {
//             $('.dropdown-toggle').dropdownHover();
//             $(window).load(function() { $('.dropdown-toggle').dropdownHover(); });
//           } else {
//             $(window).unload(function() { $('.dropdown-toggle').dropdownHover(); });
//           }
//         }, 250);
//     });
// });

// $(window).bind('resize', function() {
//   if (window.RT) clearTimeout(window.RT);
//   window.RT = setTimeout(function() {
//     this.location.reload(false);
//   }, 200);
// });

// $(document).ready(function() {
//   if ($(window).width() >= 768) {
//     $('.dropdown-toggle').dropdownHover();
//   }
// });

// $(document).ready(function() {
//   $(window).resize(function() {
//     if (window.width < 768) {
//       $(window).unload(function() { $('.dropdown-toggle').dropdownHover(); });
//       console.log('< 768');
//     } else if (window.width >= 768) {
//       $('.dropdown-toggle').dropdownHover();
//       console.log ('>= 768');
//     }
//   });
// });

// $(window).bind('resizeEnd', function() {
//     //do something, window hasn't changed size in 500ms
// });

// $(window).resize(function() {
//     if(this.resizeTO) clearTimeout(this.resizeTO);
//     this.resizeTO = setTimeout(function() {
//         $(this).trigger('resizeEnd');
//     }, 500);
// });
