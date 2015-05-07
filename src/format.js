/**
 * @file format
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function format(time) {
            var pad = require('hf-util/pad');

            time = time / 10;

            var hour = 60 * 60 * 100;
            var minute = 60 * 100;
            var second = 100;

            var h = Math.floor(time / hour);
            var m = Math.floor((time - h * hour) / minute);
            var s = Math.floor((time - h * hour - m * minute) / second);
            var ms = time - h * hour - m * minute - s * second;

            return {
                h: pad(h),
                m: pad(m),
                s: pad(s),
                ms: pad(ms)
            };
        }
        return format;
    }
);
