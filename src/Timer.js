/**
 * @file timer
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var Emitter = require('hf-emitter/main');
        var inherits = require('hf-util/inherits');
        var bind = require('hf-function/bind');

        function Timer(interval) {
            Emitter.call(this);
            this.interval = interval;
            this._running = false;
        }

        /**
         * 开始计时
         *
         * @public
         */
        Timer.prototype.start = function () {
            this._running = true;
            this._intervalId = setInterval(bind(this.tick, this), this.interval);
            // first tick
            this.tick();
        };

        /**
         * 结束
         *
         * @public
         */
        Timer.prototype.stop = function () {
            this._running = false;
            clearInterval(this._intervalId);
            this._intervalId = null;
        };
        /**
         * 暂停
         *
         * @public
         */
        Timer.prototype.pause = function () {
            this._running = false;
        };
        /**
         * 恢复
         *
         * @public
         */
        Timer.prototype.resume = function () {
            this._running = true;
        };
        /**
         * tick
         *
         * @public
         */
        Timer.prototype.tick = function () {
            var now = require('./now');
            var nowTime = now();
            if (this._running) {
                this.emit('tick', {timestamp: nowTime});
            }
            else {}
        };

        inherits(Timer, Emitter);

        return Timer;
    }
);
