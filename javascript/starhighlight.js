
function highlightStars(selector) {
    selector.mouseover(function() {
        selector.prevAll().addClass('selected');
        selector.addClass('selected');
    });
}

function unhighlightStars(selector) {
    selector.mouseout(function() {
        selector.prevAll().removeClass('selected');
        selector.removeClass('selected');
    });
}

function clickStars(selected) {
    selected.click(function() {
        resetStars();

        selected.addClass('saved');
        selected.prevAll().addClass('saved');
    });
}
function resetStars() {
    $('.starRating').children().removeClass();
}