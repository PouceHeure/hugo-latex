document.addEventListener('DOMContentLoaded', function () {
  var q = document.getElementById('q')
  var pills = Array.prototype.slice.call(document.querySelectorAll('[data-filter]'))
  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-card]'))
  var active = 'all'

  function apply () {
    var text = q ? q.value.toLowerCase().trim() : ''
    cards.forEach(function (c) {
      var okTag = active === 'all' || (c.dataset.tags || '').split(' ').indexOf(active) !== -1
      var okText = !text || (c.dataset.text || '').indexOf(text) !== -1
      c.style.display = okTag && okText ? '' : 'none'
    })
    document.querySelectorAll('[data-group]').forEach(function (g) {
      var any = g.querySelector('[data-card]:not([style*="display: none"])')
      g.style.display = any ? '' : 'none'
    })
  }

  pills.forEach(function (p) {
    p.addEventListener('click', function (e) {
      e.preventDefault()
      active = p.dataset.filter
      pills.forEach(function (x) { x.classList.toggle('on', x === p) })
      apply()
    })
  })
  if (q) q.addEventListener('input', apply)
})
