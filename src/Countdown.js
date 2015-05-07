/**
 * @file 倒计时
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var Timer = require('./timer');
        var inherits = require('hf-util/inherits');

        function Countdown(options) {
            Timer.call(this, options.interval);
            var duration = options.duration;
            var parse = require('./parse');
            if (typeof duration === 'string') {
                duration = parse(duration);
            }
            this.duration = duration;
        }

        /**
         * tick
         *
         * @override
         */
        Countdown.prototype.tick = function () {
            this.duration -= this.interval;

            if (this.duration < 0) {
                this.duration = 0;
            }

            var format = require('./format');
            this.emit('tick', format(this.duration));

            if (this.duration === 0) {
                this.stop();
                this.emit('complete');
            }
        };

        inherits(Countdown, Timer);

        return Countdown;
    }
);
