function stopwatchnav() {
    var y = document.getElementById("stopwatch");
        $('#navigationbar').display = "none";
        y.style.display = "flex";
        stopwatch.reset();
}
function shownavigation() {
    $('#navigationbar').display = "flex";
    $('#stopwatch').css({
        "display": "none"
    });
    stopwatch.reset()
}

function show($x,$nav) {
    $('.disp').css(
        {
            'display' : 'none'
        }
    );
    $('.een, .twee, .drie, .vier').removeClass("marker");


    $('#'+$x).css({
        "display" : "block"
    });
    $('.'+ $nav).addClass("marker");
}

$('.image').css({
    'height': (cw * 0.3),
    'width': cw + 'px'
});

var breed = $('body').width();
$(".container-contact1").css({
    'height': (screen.height * 0.7) + 'px',
    'width' : (breed * 0.88) + 'px'
});

$("body").css({
    'height': (screen.height) + 'px'
});
$(document).ready(function () {
    $("#save").click(function () {
        $.ajax({
            url: "http://84.197.114.65/db/insert.php",
            type: "post",
            data: $("#myForm").serialize(),

        });
        document.getElementById('result').innerHTML = "sending your messsage!";
        $('#result').css({
            'color': 'green'
        });
        $('.contact1-form-btn').css({
            'background': '#333333'
        });
        setTimeout(function () {
            document.getElementById('result').innerHTML = "click on send to send you message!";
            $('#result').css({
                'color': 'red'
            });
            $('.contact1-form-btn').css({
                'background': '#57b846'
            });
        }, 5000);
    });
});

var img = $('.fotos').width();
$('.fotos').css({
    'height': (img * 0.75)
});

var cw = $('.sizing').width();

$('.sizing').css({
    'min-height': (cw * 0.3) + 'px'
});