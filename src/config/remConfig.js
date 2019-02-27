export default function () {
    function remChange() {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 750) {
            deviceWidth = 7.5 * 100;
        }

        document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    }
    remChange();
    window.onresize = remChange;

    // 禁止双击放大
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        var now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}