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







// Simple tabs
$('.tabs-nav a').on('click', function (event) {
    event.preventDefault();

    $('.tab-active').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage div').hide();
    $($(this).attr('href')).show();
});

$('.tabs-nav a:first').trigger('click'); // Default




// Login Box
function opentab(obj) {
    $(".tab__container, .tab").removeClass("active");
    $($(obj).attr("href")).addClass("active");
    $(obj).addClass('active');
}

