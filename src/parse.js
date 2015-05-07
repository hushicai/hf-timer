/**
 * @file parse
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        // hh:mm:ss.mmm
        function parse(str) {
            str = str.split('.');

            // mmm
            var mmm = str[1];
            mmm = mmm ? parseInt(mmm, 10) : 0;

            // hh:mm:ss
            str = str[0].split(':');
            var base = [
                60 * 60 * 1000,
                60 * 1000,
                1000
            ];
            var result = 0;
            for (var i = 2; i >= 0; i--) {
                var item = parseInt(str[i], 10);
                result += item * base[i];
            }
            return result + mmm;
        }
        return parse;
    }
);
