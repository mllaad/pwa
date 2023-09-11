const timer = {
  interval: null,
  start: function (cb) {
    let minutes = 2;
    let seconds = 0;
    this.interval = setInterval(() => {
      seconds -= 1;
      if (minutes < 0) return cb(minutes, seconds);
      else if (+seconds < 0 && +minutes != 0) {
        minutes -= 1;
        seconds = 59;
      } else if (seconds < 10 && seconds.length != 2) seconds = "0" + seconds;
      if (minutes == 0 && seconds == 0) this.clear();
      return cb(minutes, seconds);
    }, 1000);
  },
  clear: function () {
    clearInterval(this.interval);
  },
};

export default timer;
