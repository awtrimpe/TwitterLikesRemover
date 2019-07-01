// ==UserScript==
// @name         Twitter Likes Remover
// @version      0.1
// @description  Run to remove all likes from your Twitter account
// @author       You
// @match        https://twitter.com/usernName/likes
// @grant        none
// ==/UserScript==

(function () {
    let done = false;
    var i = 1;
    var b = 2;

    function myLoop() {
        setTimeout(function () {
            window.scrollTo(0, document.body.scrollHeight);
            console.log("Scrolling");
            i++;
            if (i < 10) {
                myLoop();
            } else {
                done = true;
            }
            if (done) {
                console.log("Removing");
                var divs = document.getElementsByTagName('div');
                var arr = Array.prototype.slice.call(divs);
                var hearts = arr.filter(x => x.getAttribute('data-testid') == 'unlike');
                hearts.forEach(h => h.click());
                reloaded();
            };
        }, 3000);
    }

    function reloaded() {
        setTimeout(function () {
            if (b > 1) {
                location.reload();
            } else {
                b++;
                reloaded()
            }
        }, 3000);
    }
    myLoop();
})();