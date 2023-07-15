var words = ["PROJECT", "BUSINESS", "COMPANY"],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 100;
var wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        } else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        $(".word").text(part);
    }, speed);
};

$(document).ready(function () {
    wordflick();
});

// document.getElementById("edit-button-section-one").addEventListener("mouseenter", function() {
//     document.getElementById("edit-button-section-one").innerHTML = '<img class="arrow-img" src="/images/arrow.png" alt="">';
// });
// document.getElementById("edit-button-section-one").addEventListener("mouseleave", function() {
//     document.getElementById("edit-button-section-one").innerHTML = '<span>Our Services</span>';
// });

