document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.markdown-content pre').forEach(function (pre) {
    var btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'copy-btn'
    btn.textContent = 'Copy'
    btn.addEventListener('click', function () {
      var code = pre.querySelector('code')
      navigator.clipboard.writeText((code || pre).innerText).then(function () {
        btn.textContent = 'Copied'
        setTimeout(function () { btn.textContent = 'Copy' }, 1500)
      })
    })
    pre.appendChild(btn)
  })
})
