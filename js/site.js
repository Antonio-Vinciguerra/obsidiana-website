(() => {
  'use strict';
  const $ = (selector) => document.querySelector(selector);
  const config = window.OBSIDIANA_CONFIG || {};
  const wines = [
    { name: 'OMBRA', type: 'Rosso' }, { name: 'MERIDIO', type: 'Bianco' },
    { name: 'BREZZA', type: 'Sparkling White' }, { name: 'AURA', type: 'Sparkling Rosé' }
  ];
  const copy = {
    it: {
      locale:'it_IT', skip:'Vai ai vini', homeAria:'OBSIDIANA — inizio', navAria:'Navigazione principale', mobileAria:'Navigazione mobile', menuAria:'Apri il menu', languageAria:'Seleziona la lingua',
      maison:'La Maison', collection:'I vini', contact:'Contatti', experience:'L’esperienza', collectionKicker:'La collezione',
      heroLine1:'Il Mediterraneo,', heroLine2:'da vivere.', exploreWines:'Esplora i vini', scroll:'Scorri per entrare',
      maisonLine1:'La Sicilia è l’origine.', maisonLine2:'Il Mediterraneo è il mondo.', collectionTitle:'Quattro espressioni. Una maison.',
      experienceLine:'Il piacere di restare.', experienceAria:'Il tempo condiviso', contactTitle:'Il prossimo calice, insieme.', write:'Scrivici',
      close:'Chiudi', enquire:'Informazioni su questo vino', prev:'Vino precedente', next:'Vino successivo', explore:'Esplora', subject:'Informazioni sulla collezione OBSIDIANA',
      seaAlt:'Luce sul mare mediterraneo', thresholdAlt:'Una soglia di pietra scura attraversata da luce dorata', oliveAlt:'Ombre d’ulivo sulla pietra chiara', tableAlt:'Una bottiglia aperta di AURA e due calici di rosé fresco sul Mediterraneo al tramonto', region:'SICILIA · MEDITERRANEO'
    },
    en: {
      locale:'en_GB', skip:'Skip to the wines', homeAria:'OBSIDIANA — home', navAria:'Main navigation', mobileAria:'Mobile navigation', menuAria:'Open menu', languageAria:'Select language',
      maison:'The Maison', collection:'The wines', contact:'Contact', experience:'The experience', collectionKicker:'The collection',
      heroLine1:'The Mediterranean,', heroLine2:'a way of life.', exploreWines:'Explore the wines', scroll:'Scroll to enter',
      maisonLine1:'Our roots are Sicilian.', maisonLine2:'Our world is Mediterranean.', collectionTitle:'Four expressions. One maison.',
      experienceLine:'The pleasure of lingering.', experienceAria:'Time shared', contactTitle:'The next glass, together.', write:'Write to us',
      close:'Close', enquire:'Enquire about this wine', prev:'Previous wine', next:'Next wine', explore:'Explore', subject:'Enquiry about the OBSIDIANA collection',
      seaAlt:'Light on the Mediterranean Sea', thresholdAlt:'A dark stone threshold crossed by golden light', oliveAlt:'Olive shadows on pale stone', tableAlt:'An open bottle of AURA and two glasses of chilled sparkling rosé on a Mediterranean terrace at sunset', region:'SICILY · MEDITERRANEAN'
    },
    es: {
      locale:'es_ES', skip:'Ir a los vinos', homeAria:'OBSIDIANA — inicio', navAria:'Navegación principal', mobileAria:'Navegación móvil', menuAria:'Abrir el menú', languageAria:'Seleccionar idioma',
      maison:'La Maison', collection:'Los vinos', contact:'Contacto', experience:'La experiencia', collectionKicker:'La colección',
      heroLine1:'El Mediterráneo,', heroLine2:'para vivirlo.', exploreWines:'Explora los vinos', scroll:'Desliza para entrar',
      maisonLine1:'Sicilia es el origen.', maisonLine2:'El Mediterráneo, nuestro mundo.', collectionTitle:'Cuatro expresiones. Una maison.',
      experienceLine:'El placer de quedarse.', experienceAria:'El tiempo compartido', contactTitle:'La próxima copa, juntos.', write:'Escríbenos',
      close:'Cerrar', enquire:'Información sobre este vino', prev:'Vino anterior', next:'Vino siguiente', explore:'Explora', subject:'Información sobre la colección OBSIDIANA',
      seaAlt:'Luz sobre el mar Mediterráneo', thresholdAlt:'Un umbral de piedra oscura atravesado por luz dorada', oliveAlt:'Sombras de olivo sobre piedra clara', tableAlt:'Una botella abierta de AURA y dos copas de rosado espumoso fresco en una terraza mediterránea al atardecer', region:'SICILIA · MEDITERRÁNEO'
    },
    nl: {
      locale:'nl_NL', skip:'Ga naar de wijnen', homeAria:'OBSIDIANA — begin', navAria:'Hoofdnavigatie', mobileAria:'Mobiele navigatie', menuAria:'Menu openen', languageAria:'Taal selecteren',
      maison:'De Maison', collection:'De wijnen', contact:'Contact', experience:'De beleving', collectionKicker:'De collectie',
      heroLine1:'Mediterraan,', heroLine2:'een manier van leven.', exploreWines:'Ontdek de wijnen', scroll:'Scroll om binnen te komen',
      maisonLine1:'Onze oorsprong ligt op Sicilië.', maisonLine2:'Onze wereld is mediterraan.', collectionTitle:'Vier expressies. Eén maison.',
      experienceLine:'Het plezier van blijven.', experienceAria:'Tijd voor elkaar', contactTitle:'Het volgende glas, samen.', write:'Schrijf ons',
      close:'Sluiten', enquire:'Meer over deze wijn', prev:'Vorige wijn', next:'Volgende wijn', explore:'Ontdek', subject:'Vraag over de OBSIDIANA-collectie',
      seaAlt:'Licht op de Middellandse Zee', thresholdAlt:'Een donkere stenen doorgang met een smalle strook gouden licht', oliveAlt:'Olijfschaduwen op lichte steen', tableAlt:'Een geopende fles AURA en twee glazen gekoelde mousserende rosé op een mediterraan terras bij zonsondergang', region:'SICILIË · MIDDELLANDSE ZEE'
    }
  };
  const languageMenu = $('[data-language-menu]');
  const mobileMenu = $('.mobile-menu');
  const dialog = $('.wine-dialog');
  let currentWine = 0;
  let lang = 'it';
  const emailHref = (subject) => 'mailto:' + (config.contactEmail || '') + '?subject=' + encodeURIComponent(subject);
  function updateWine(index) {
    currentWine = (index + wines.length) % wines.length;
    const wine = wines[currentWine];
    $('#wine-dialog-name').textContent = wine.name;
    $('.dialog-type').textContent = wine.type;
    const dialogImage = $('.dialog-image img');
    dialogImage.src = currentWine === 0 ? 'assets/images/wines-ombra-v3.jpg' : 'assets/images/wines-v2.jpg';
    dialogImage.style.setProperty('--bottle', currentWine);
    $('[data-wine-count]').textContent = '0' + (currentWine + 1) + ' / 04';
    $('[data-wine-enquiry]').href = emailHref(copy[lang].enquire + ' — OBSIDIANA ' + wine.name);
  }
  function setLanguage(value, persist = false) {
    lang = copy[value] ? value : 'en';
    const t = copy[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { if (t[el.dataset.i18n]) el.textContent = t[el.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t[el.dataset.i18nAria]));
    document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = t[el.dataset.i18nAlt]; });
    document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === lang)));
    document.querySelectorAll('[data-wine]').forEach(el => {
      const wine = wines[Number(el.dataset.wine)];
      el.setAttribute('aria-label', t.explore + ' ' + wine.name + ' — ' + wine.type);
    });
    $('[data-current-language]').textContent = lang.toUpperCase();
    $('meta[property="og:locale"]').content = t.locale;
    const description = 'OBSIDIANA. Maison Mediterranea. ' + t.heroLine1 + ' ' + t.heroLine2;
    $('meta[name="description"]').content = description;
    $('meta[property="og:description"]').content = description;
    $('meta[name="twitter:description"]').content = description;
    $('[data-contact-link]').href = emailHref(t.subject);
    updateWine(currentWine);
    if (persist) { try { localStorage.setItem('obsidiana-language-preference-v2', lang); } catch {} }
  }
  let preference = '';
  try { preference = localStorage.getItem('obsidiana-language-preference-v2') || ''; } catch {}
  const browserLanguage = String(navigator.languages?.[0] || navigator.language || 'en').split('-')[0].toLowerCase();
  setLanguage(copy[preference] ? preference : (copy[browserLanguage] ? browserLanguage : 'en'));
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
    setLanguage(button.dataset.lang, true); languageMenu.open = false; languageMenu.querySelector('summary').focus();
  }));
  [languageMenu, mobileMenu].forEach(menu => menu.addEventListener('toggle', () => {
    if (menu.open) (menu === languageMenu ? mobileMenu : languageMenu).open = false;
  }));
  document.addEventListener('click', event => {
    [languageMenu, mobileMenu].forEach(menu => { if (!menu.contains(event.target)) menu.open = false; });
  });
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobileMenu.open = false; }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { languageMenu.open = false; mobileMenu.open = false; }
    if (dialog.open && event.key === 'ArrowRight') updateWine(currentWine + 1);
    if (dialog.open && event.key === 'ArrowLeft') updateWine(currentWine - 1);
  });
  document.querySelectorAll('[data-wine]').forEach(button => button.addEventListener('click', () => {
    updateWine(Number(button.dataset.wine)); dialog.showModal(); document.body.classList.add('dialog-open');
  }));
  $('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  dialog.addEventListener('click', event => {
    if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); }
  });
  $('[data-prev]').addEventListener('click', () => updateWine(currentWine - 1));
  $('[data-next]').addEventListener('click', () => updateWine(currentWine + 1));
  if (config.siteUrl) {
    const url = config.siteUrl.replace(/\/$/, '');
    const canonical = document.createElement('link'); canonical.rel = 'canonical'; canonical.href = url + '/'; document.head.appendChild(canonical);
    [['property','og:url',url + '/'],['property','og:image',url + '/assets/images/sea.jpg'],['name','twitter:image',url + '/assets/images/sea.jpg']].forEach(([attribute,key,value]) => {
      const meta = document.createElement('meta'); meta.setAttribute(attribute,key); meta.content = value; document.head.appendChild(meta);
    });
  }
  const root = document.documentElement;
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  const arrival = $('.arrival');
  const stage = $('.arrival-stage');
  const phrase = $('.arrival-phrase');
  const collection = $('.collection');
  const daylight = $('.daylight');
  const header = $('[data-header]');
  const clamp = value => Math.max(0, Math.min(1, value));
  const smooth = value => { const n = clamp(value); return n * n * (3 - 2 * n); };
  let scheduled = false;
  function paintScroll() {
    scheduled = false;
    const a = arrival.getBoundingClientRect();
    const range = Math.max(1, arrival.offsetHeight - stage.offsetHeight);
    const p = clamp(-a.top / range);
    if (!motionPreference.matches) {
      const sea = smooth((p - .12) / .6);
      const text = smooth((p - .43) / .28);
      arrival.style.setProperty('--journey', p.toFixed(4));
      arrival.style.setProperty('--sea', sea.toFixed(4));
      arrival.style.setProperty('--identity', (1 - smooth(p / .36)).toFixed(4));
      arrival.style.setProperty('--phrase', text.toFixed(4));
      arrival.style.setProperty('--exit', smooth((p - .85) / .15).toFixed(4));
      phrase.classList.toggle('is-active', text > .8);
      phrase.inert = text < .5;
      phrase.setAttribute('aria-hidden', String(text < .5));
    } else {
      phrase.inert = false; phrase.removeAttribute('aria-hidden');
    }
    const day = daylight.getBoundingClientRect();
    header.classList.toggle('is-light', day.top < 60 && day.bottom > 60);
    const c = collection.getBoundingClientRect();
    collection.style.setProperty('--collection-progress', smooth((innerHeight - c.top) / (innerHeight * .7)).toFixed(4));
  }
  function requestPaint() { if (!scheduled) { scheduled = true; requestAnimationFrame(paintScroll); } }
  root.classList.add('js');
  function applyMotion() { root.classList.toggle('motion', !motionPreference.matches); requestPaint(); }
  applyMotion(); motionPreference.addEventListener('change', applyMotion);
  window.addEventListener('scroll', requestPaint, { passive:true });
  window.addEventListener('resize', requestPaint);
  window.addEventListener('pageshow', requestPaint);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold:.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else { document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible')); }
})();
