// TEST FOR TEXT ANIMATION
class TxtRotate {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
        else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap" style="border-right: 0.08em solid #666">' + this.txt + '</span>';
        var that = this;
        var delta = 300 - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            that.tick();
        }, delta);
    }
}
window.onload = function () {

    const elements = document.querySelectorAll('.txt-rotate');

    elements.forEach(span => {
        const toRotate = span.getAttribute('data-rotate');
        const period = span.getAttribute('data-period')
        if (toRotate) {
            new TxtRotate(span, JSON.parse(toRotate), period)
        }
    })


};

    // INJECT CSS
    // const textH1 = $('<h1>').text('testing testing');
    // document.body.append(textH1);
    // const css = $("<style>");
    // css.attr("type", "text/css");

    // css.html(".txt-rotate > .wrap { border-right: 0.08em solid #666 }");
    // console.log('css inject: ', css)
    // document.body.append(css.outerHTML);

