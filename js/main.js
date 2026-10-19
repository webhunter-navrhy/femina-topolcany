// Femina: menu, regál (priehradky -> detail), nákupný lístok, formuláre v ukážkovom režime.
(function () {
  document.documentElement.classList.add('js');

  // menu na mobile
  var tl = document.querySelector('.menu-tl'), menu = document.getElementById('menu');
  if (tl && menu) {
    tl.addEventListener('click', function () {
      var otv = tl.getAttribute('aria-expanded') === 'true';
      tl.setAttribute('aria-expanded', String(!otv));
      menu.classList.toggle('je-otvorene', !otv);
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) { tl.setAttribute('aria-expanded', 'false'); menu.classList.remove('je-otvorene'); }
    });
  }

  // nákupný lístok: riadky
  var riadky = document.querySelector('[data-riadky]');
  function cisluj() {
    if (!riadky) return;
    riadky.querySelectorAll('.listok__riadok').forEach(function (r, i) {
      var s = r.querySelectorAll('.sr-only');
      if (s[0]) s[0].textContent = 'Položka ' + (i + 1);
      if (s[1]) s[1].textContent = 'Rozmer alebo typ ' + (i + 1);
      if (s[2]) s[2].textContent = 'Počet kusov ' + (i + 1);
    });
  }
  function novyRiadok(text) {
    var vzor = riadky.querySelector('.listok__riadok');
    var prvy = vzor.querySelector('input');
    if (text && !prvy.value) { prvy.value = text; return prvy; }
    var r = vzor.cloneNode(true);
    r.querySelectorAll('input').forEach(function (i) { i.value = ''; i.removeAttribute('required'); });
    r.classList.add('je-nova');
    riadky.appendChild(r);
    cisluj();
    var inp = r.querySelector('input');
    if (text) inp.value = text;
    return inp;
  }
  if (riadky) {
    document.querySelector('[data-pridaj-riadok]').addEventListener('click', function () { novyRiadok().focus(); });
    riadky.addEventListener('click', function (e) {
      var z = e.target.closest('.listok__zmaz');
      if (!z) return;
      var vsetky = riadky.querySelectorAll('.listok__riadok');
      var r = z.closest('.listok__riadok');
      if (vsetky.length > 1) { r.remove(); cisluj(); }
      else r.querySelectorAll('input').forEach(function (i) { i.value = ''; });
    });
  }

  // regál
  var dataEl = document.getElementById('regal-data');
  if (dataEl) {
    var regal = JSON.parse(dataEl.textContent);
    var det = document.getElementById('regal-detail');
    var kod = det.querySelector('.regal__detail-kod'), naz = det.querySelector('.regal__detail-nazov'),
        txt = det.querySelector('.regal__detail-text'), pridaj = det.querySelector('.js-pridaj');
    document.querySelectorAll('.priehradka').forEach(function (b) {
      b.addEventListener('click', function () {
        var d = regal[+b.dataset.i];
        document.querySelectorAll('.priehradka').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        kod.textContent = 'Priehradka ' + d.kod;
        naz.textContent = d.nazov;
        txt.textContent = d.text;
        pridaj.dataset.polozka = d.polozka || '';
        pridaj.hidden = !d.polozka;
        det.querySelectorAll('[data-foto]').forEach(function (f) { f.hidden = f.dataset.foto !== b.dataset.i; });
        det.classList.remove('je-zmena'); void det.offsetWidth; det.classList.add('je-zmena');
        if (window.matchMedia('(max-width: 64rem)').matches) det.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
    pridaj.addEventListener('click', function () {
      if (!riadky || !pridaj.dataset.polozka) return;
      var inp = novyRiadok(pridaj.dataset.polozka);
      document.getElementById('listok').scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(function () { var r = inp.closest('.listok__riadok').querySelectorAll('input'); (r[1] || inp).focus({ preventScroll: true }); }, 600);
    });
  }

  // prenájom: „Mám záujem“ predvyplní priestor
  document.querySelectorAll('.js-zaujem').forEach(function (a) {
    a.addEventListener('click', function () {
      var s = document.getElementById('priestor');
      if (!s) return;
      Array.prototype.forEach.call(s.options, function (o) { if (o.text === a.dataset.priestor) s.value = o.value; });
    });
  });

  // formuláre: návrh = ukážkový režim
  document.querySelectorAll('form.formular').forEach(function (f) {
    var stav = f.querySelector('.formular-stav');
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if (f.querySelector('.past input').value) return;
      var endpoint = f.getAttribute('data-endpoint');
      if (f.getAttribute('data-demo') === '1' || !endpoint) {
        stav.textContent = 'Ukážka: v návrhu sa nič neodosiela. Po spustení webu príde lístok e-mailom priamo do predajne.';
        return;
      }
      stav.textContent = 'Odosielam…';
      fetch(endpoint, { method: 'POST', body: new FormData(f), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); f.reset(); stav.textContent = 'Ďakujeme, predajňa sa vám ozve.'; })
        .catch(function () { stav.textContent = 'Odoslanie sa nepodarilo. Zavolajte prosím 038 5324 797.'; });
    });
  });

})();
