function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 100);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.opacity = 1;
}

onReady(function() {
  setVisible('body', true);
});
