$('#openmenu').click(function() {
    $('.menu').animate({ width: '17%' }, "slow");
    $('.content').css('width', '83%');
    $('.content').animate({ left: '17%' }, 'slow');
    $('.menuMain').css('display', 'block');

});
$("#close").click(function() {
    $('.content').css('width', '100%');
    $('.content').animate({ left: '0%' }, 'slow')
    $('.menu').animate({ width: '0%' }, "slow", function() {
        $('.menuMain').css('display', 'none');
    });
});
$('#one').click(function() {
    $('#p-one').slideToggle();
    $('#p-two').slideUp();
    $('#p-three').slideUp();
    $('#p-four').slideUp();
});
$('#two').click(function() {
    $('#p-one').slideUp();
    $('#p-two').slideToggle();
    $('#p-three').slideUp();
    $('#p-four').slideUp();
});
$('#three').click(function() {
    $('#p-one').slideUp();
    $('#p-two').slideUp();
    $('#p-three').slideToggle();
    $('#p-four').slideUp();
});
$('#four').click(function() {
    $('#p-one').slideUp();
    $('#p-two').slideUp();
    $('#p-three').slideUp();
    $('#p-four').slideToggle();
});

window.addEventListener('load', function() {
    countDownToTime()
});

function countDownToTime() {

    let nextDate = new Date("1 january 2025 12:00:00");
    nextDate = (nextDate.getTime() / 1000);
    let currentTime = new Date();
    currentTime = (currentTime.getTime() / 1000);

    timeDifference = (nextDate - currentTime);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let minutes = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let seconds = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (minutes * 60)))


    $("#s-one").html(`<h3 class="border border-1 border-white p-5">${days} D</h3>`);
    $("#s-two").html(`<h3 class="border border-1 border-white p-5">${hours} h</h3>`);
    $("#s-three").html(`<h3 class="border border-1 border-white p-5">${minutes} m</h3>`);
    $('#s-four').html(`<h3 class="border border-1 border-white p-5">${seconds} s</h3>`)


    setInterval(function() { countDownToTime(); });
}

let message = document.getElementById('message');
$('#num').html(`<span style="color: #D62E33;">100</span> Characyer Reamining`);
$('textarea').keyup(function(e) {
    let number = $('#message').val().length;
    console.log(e);
    if (number <= 100) {
        $('#num').html(`<span style="color: #D62E33;">${100-number}</span> Characyer Reamining`);
    } else {
        $('#num').html(`<span style="color: #D62E33;" class="fs-5">your available character finished</span> Characyer Reamining`);
    }
});