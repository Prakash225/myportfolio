//   On scroll header fixed
var nav = document.getElementById('custheader');

window.onscroll = function () {

    if (window.pageYOffset > 57) {
        nav.style.position = "fixed";
        nav.style.top = "0px";
    } else {
        nav.style.position = "";
        nav.style.top = "";
    }
}


// Top Navigation Code

function toggleMenu() {
    let menuIcon = document.getElementById('toggleIcon');
    menuIcon.classList.toggle('active');
    // alert('toggleMenu');
}


// Top Navigation Hover Code
const marker = document.querySelector('#marker');
const item = document.querySelectorAll('#toggleIcon ul li a');

function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}
item.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        indicator(e.target);
    })
});


// On scroll indicator window 
$(window).scroll(function () {

    var wintop = $(window).scrollTop(), docheight =

        $(document).height(), winheight = $(window).height();

    var scrolled = (wintop / (docheight - winheight)) * 100;

    $('.scroll-line').css('width', (scrolled + '%'));

});


// Birth Day Countdown Time
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('May 22, 2024 03:00:00').getTime(),
    x = setInterval(function () {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

    }, second)



// Class counter
function Counter(data) {
    var _default = {
        fps: 20,
        from: 0,
        time: 2000,
    }

    for (var attr in _default) {
        if (typeof data[attr] === 'undefined') {
            data[attr] = _default[attr];
        }
    }

    if (typeof data.to === 'undefined')
        return;

    data.fps = typeof data.fps === 'undefined' ? 20 : parseInt(data.fps);
    data.from = typeof data.from === 'undefined' ? 0 : parseFloat(data.from);

    var frames = data.time / data.fps,
        inc = (data.to - data.from) / frames,
        val = data.from;

    if (typeof data.start === 'function') {
        data.start(data.from, data)
    }
    var interval = setInterval(function () {
        frames--;
        val += inc;

        if (val >= data.to) {
            if (typeof data.complete === 'function') {
                console.log('complete');
                data.complete(data.to, data)
            }
            console.log(interval);
            clearInterval(interval);
        } else if (typeof data.progress === 'function') {
            data.progress(val, data)
        }
    }, data.fps);
}



// Auto-counter from HTML API
var counters = document.getElementsByClassName('counter'),
    print = function (val, data) {
        data.element.innerHTML = val;
    }

for (var i = 0, l = counters.length; i < l; i++) {
    // Loads from HTML dataset
    var data = {};
    for (var attr in counters[i].dataset) {
        data[attr] = counters[i].dataset[attr];
    }

    // Save element and callbacks
    data.element = counters[i];
    data.start = print;
    data.progress = print;
    data.complete = print;

    // Creates the counter
    new Counter(data);
}

// Form Animated
$('input,textarea').focus(function () {
    $(this).parent().addClass('focus');
}).blur(function () {
    $(this).parent().removeClass('focus');
});



// Accordion
$('.parent-menu').click(function (e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .sub-menu').removeClass('show');
        $this.parent().parent().find('li .sub-menu').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});



// Simple tabs
$('.tabs-nav a').on('click', function (event) {
    event.preventDefault();

    $('.tab-active').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage div').hide();
    $($(this).attr('href')).show();
});

$('.tabs-nav a:first').trigger('click'); // Default


// On Hover Background Change
$('.bxHoverBgChange ul li').hover(
    function () {
        var tr = jQuery(this).attr('class');
        $(".bg-body").addClass(tr);
    },

    function () {
        var trr = jQuery(this).attr('class');
        $(".bg-body").removeClass(trr);
    }
);

// Login Box
function opentab(obj) {
    $(".tab__container, .tab").removeClass("active");
      $($(obj).attr("href")).addClass("active");
      $(obj).addClass('active');
   }
