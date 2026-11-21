// Event photo slideshows
document.querySelectorAll('.slider').forEach(function (s) {
  var imgs = s.querySelectorAll('img'), dots = s.querySelectorAll('.dots i'), i = 0;
  if (imgs.length < 2) return;
  function show(n) {
    i = (n + imgs.length) % imgs.length;
    imgs.forEach(function (im, k) { im.classList.toggle('on', k === i); });
    dots.forEach(function (d, k) { d.classList.toggle('on', k === i); });
  }
  s.querySelector('.prev').onclick = function () { show(i - 1); };
  s.querySelector('.next').onclick = function () { show(i + 1); };
  show(0);
});
