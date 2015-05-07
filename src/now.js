/**
 * @file now
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function now() {
            return +new Date();
        }
        return now;
    }
);
