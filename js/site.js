(() => {
  const config = window.OBSIDIANA_CONFIG || {};
  const header = document.querySelector('[data-header]');
  const contactLink = document.querySelector('[data-contact-link]');
  const mobileNav = document.querySelector('.mobile-nav');
  const languageMenu = document.querySelector('[data-language-menu]');
  const currentLanguage = document.querySelector('[data-current-language]');

  const translations = {
    it: {
      locale: 'it_IT', metaDescription: 'OBSIDIANA è una maison mediterranea nata da una sensibilità siciliana. Quattro espressioni di vino, una sola idea di misura.',
      socialDescription: 'La Sicilia è l’origine. Il Mediterraneo è il mondo. Il vino è la prima espressione.', twitterDescription: 'Una terra intensa. Un’eleganza naturale.',
      skip: 'Vai al contenuto', homeAria: "OBSIDIANA — torna all’inizio", mainNavAria: 'Navigazione principale', mobileNavAria: 'Navigazione mobile', footerNavAria: 'Navigazione nel piè di pagina', menuAria: 'Apri il menu', languageAria: 'Seleziona la lingua',
      navMaison: 'La Maison', navCollection: 'La Collezione', navMaterial: 'La Materia', navExperience: 'L’Esperienza', navContact: 'Contatti',
      heroTitle: 'Una terra intensa.<br>Un’eleganza naturale.', discoverMaison: 'Scopri la maison', scroll: 'Scorri', scrollAria: 'Scorri verso La Maison',
      maisonTitle: 'La Sicilia è l’origine.<br>Il Mediterraneo è il mondo.', maisonBody: 'OBSIDIANA nasce da una sensibilità siciliana e guarda al Mediterraneo: alla sua luce, alle sue materie, al suo modo di vivere il tempo.', maisonClose: 'Il vino è la prima espressione di questo sguardo.',
      collectionTitle: 'Quattro espressioni,<br>una maison.', collectionBody: 'Quattro vini, un’unica idea di misura. Caratteri diversi, la stessa origine, lo stesso sguardo sul Mediterraneo.',
      ombraType: 'Etna Rosso', meridioType: 'Etna Bianco', brezzaType: 'Bollicine bianche', auraType: 'Bollicine rosé',
      materialTitle: 'Il dettaglio<br>fa la differenza.', materialBody: 'Carta naturale. Superfici opache. Un segno sottile in oro discreto.', materialClose: 'Ogni elemento è scelto per come risponde alla luce, non per come appare in fotografia.', materialPaper: 'Carta', materialLight: 'Luce', materialDetail: 'Dettaglio', materialListAria: 'Principi materici',
      experienceKicker: 'L’Esperienza · Il Dono', experienceTitle: 'Un gesto<br>che resta.', experienceBody: 'Una bottiglia da portare a cena.<br>Un dono personale.<br>Un’attenzione di lavoro.', experienceClose: 'L’esperienza comincia prima che la bottiglia venga aperta.',
      contactTitle: 'Iniziamo una conversazione.', contactBody: 'Per informazioni sulla maison e sulla collezione, per collaborazioni o semplicemente per conoscerci.', contactCta: 'Scrivi alla maison',
      heroAlt: 'Una soglia in pietra affacciata sul mare mediterraneo', oliveAlt: "Ramo d’ulivo nella luce mediterranea su una parete materica", thresholdAlt: 'Una soglia architettonica attraversata da una luce calda', collectionAlt: 'Le quattro bottiglie OBSIDIANA: OMBRA, MERIDIO, BREZZA e AURA', paperAlt: 'Carta naturale color avorio con un sottile dettaglio in oro opaco', giftAlt: 'Cofanetto OBSIDIANA nero con bottiglia e biglietto su una superficie materica', shippingAlt: 'Packaging OBSIDIANA progettato per proteggere la consegna'
    },
    en: {
      locale: 'en_GB', metaDescription: 'OBSIDIANA is a Mediterranean maison born from a Sicilian sensibility. Four wine expressions, one distinctive sense of measure.',
      socialDescription: 'Sicily is the origin. The Mediterranean is the world. Wine is the first expression.', twitterDescription: 'An intense land. A natural elegance.',
      skip: 'Skip to content', homeAria: 'OBSIDIANA — return to the beginning', mainNavAria: 'Main navigation', mobileNavAria: 'Mobile navigation', footerNavAria: 'Footer navigation', menuAria: 'Open menu', languageAria: 'Select language',
      navMaison: 'The Maison', navCollection: 'The Collection', navMaterial: 'The Material', navExperience: 'The Experience', navContact: 'Contact',
      heroTitle: 'An intense land.<br>A natural elegance.', discoverMaison: 'Discover the maison', scroll: 'Scroll', scrollAria: 'Scroll to The Maison',
      maisonTitle: 'Sicily is the origin.<br>The Mediterranean is the world.', maisonBody: 'OBSIDIANA is born from a Sicilian sensibility and looks to the Mediterranean: to its light, its materials and its way of experiencing time.', maisonClose: 'Wine is the first expression of this perspective.',
      collectionTitle: 'Four expressions,<br>one maison.', collectionBody: 'Four wines, one distinctive sense of measure. Different characters, the same origin, the same Mediterranean outlook.',
      ombraType: 'Etna Red', meridioType: 'Etna White', brezzaType: 'White sparkling wine', auraType: 'Rosé sparkling wine',
      materialTitle: 'The difference<br>is in the detail.', materialBody: 'Natural paper. Matt surfaces. A fine accent of discreet gold.', materialClose: 'Every element is chosen for the way it responds to light, not for the way it appears in a photograph.', materialPaper: 'Paper', materialLight: 'Light', materialDetail: 'Detail', materialListAria: 'Material principles',
      experienceKicker: 'The Experience · The Gift', experienceTitle: 'A gesture<br>that remains.', experienceBody: 'A bottle to bring to dinner.<br>A personal gift.<br>A thoughtful business gesture.', experienceClose: 'The experience begins before the bottle is opened.',
      contactTitle: 'Let’s begin a conversation.', contactBody: 'For information about the maison and the collection, for collaborations or simply to get to know us.', contactCta: 'Write to the maison',
      heroAlt: 'A stone threshold overlooking the Mediterranean Sea', oliveAlt: 'An olive branch in Mediterranean light against a textured wall', thresholdAlt: 'An architectural threshold crossed by warm light', collectionAlt: 'The four OBSIDIANA bottles: OMBRA, MERIDIO, BREZZA and AURA', paperAlt: 'Natural ivory paper with a fine matt-gold detail', giftAlt: 'Black OBSIDIANA gift box with bottle and card on a textured surface', shippingAlt: 'OBSIDIANA packaging designed to protect the delivery'
    },
    es: {
      locale: 'es_ES', metaDescription: 'OBSIDIANA es una maison mediterránea nacida de una sensibilidad siciliana. Cuatro expresiones de vino, una misma idea de mesura.',
      socialDescription: 'Sicilia es el origen. El Mediterráneo es el mundo. El vino es la primera expresión.', twitterDescription: 'Una tierra intensa. Una elegancia natural.',
      skip: 'Ir al contenido', homeAria: 'OBSIDIANA — volver al inicio', mainNavAria: 'Navegación principal', mobileNavAria: 'Navegación móvil', footerNavAria: 'Navegación del pie de página', menuAria: 'Abrir el menú', languageAria: 'Seleccionar idioma',
      navMaison: 'La Maison', navCollection: 'La Colección', navMaterial: 'La Materia', navExperience: 'La Experiencia', navContact: 'Contacto',
      heroTitle: 'Una tierra intensa.<br>Una elegancia natural.', discoverMaison: 'Descubre la maison', scroll: 'Desliza', scrollAria: 'Desliza hasta La Maison',
      maisonTitle: 'Sicilia es el origen.<br>El Mediterráneo es el mundo.', maisonBody: 'OBSIDIANA nace de una sensibilidad siciliana y mira al Mediterráneo: a su luz, a sus materias y a su forma de vivir el tiempo.', maisonClose: 'El vino es la primera expresión de esta mirada.',
      collectionTitle: 'Cuatro expresiones,<br>una maison.', collectionBody: 'Cuatro vinos, una misma idea de mesura. Caracteres distintos, el mismo origen, la misma mirada al Mediterráneo.',
      ombraType: 'Etna Tinto', meridioType: 'Etna Blanco', brezzaType: 'Espumoso blanco', auraType: 'Espumoso rosado',
      materialTitle: 'El detalle<br>marca la diferencia.', materialBody: 'Papel natural. Superficies mate. Un fino acento de oro discreto.', materialClose: 'Cada elemento se elige por cómo responde a la luz, no por cómo aparece en una fotografía.', materialPaper: 'Papel', materialLight: 'Luz', materialDetail: 'Detalle', materialListAria: 'Principios matéricos',
      experienceKicker: 'La Experiencia · El Regalo', experienceTitle: 'Un gesto<br>que permanece.', experienceBody: 'Una botella para llevar a una cena.<br>Un regalo personal.<br>Una atención profesional.', experienceClose: 'La experiencia comienza antes de abrir la botella.',
      contactTitle: 'Iniciemos una conversación.', contactBody: 'Para información sobre la maison y la colección, para colaboraciones o simplemente para conocernos.', contactCta: 'Escribe a la maison',
      heroAlt: 'Un umbral de piedra con vistas al mar Mediterráneo', oliveAlt: 'Una rama de olivo bajo la luz mediterránea sobre una pared con textura', thresholdAlt: 'Un umbral arquitectónico atravesado por una luz cálida', collectionAlt: 'Las cuatro botellas OBSIDIANA: OMBRA, MERIDIO, BREZZA y AURA', paperAlt: 'Papel natural color marfil con un fino detalle en oro mate', giftAlt: 'Estuche negro OBSIDIANA con botella y tarjeta sobre una superficie con textura', shippingAlt: 'Packaging OBSIDIANA diseñado para proteger la entrega'
    },
    nl: {
      locale: 'nl_NL', metaDescription: 'OBSIDIANA is een mediterrane maison, ontstaan vanuit een Siciliaanse gevoeligheid. Vier wijnexpressies, één herkenbaar gevoel voor maat.',
      socialDescription: 'Sicilië is de oorsprong. De Middellandse Zee is de wereld. Wijn is de eerste expressie.', twitterDescription: 'Een intens land. Een natuurlijke elegantie.',
      skip: 'Ga naar de inhoud', homeAria: 'OBSIDIANA — terug naar het begin', mainNavAria: 'Hoofdnavigatie', mobileNavAria: 'Mobiele navigatie', footerNavAria: 'Navigatie in de voettekst', menuAria: 'Menu openen', languageAria: 'Taal selecteren',
      navMaison: 'De Maison', navCollection: 'De Collectie', navMaterial: 'De Materie', navExperience: 'De Ervaring', navContact: 'Contact',
      heroTitle: 'Een intens land.<br>Een natuurlijke elegantie.', discoverMaison: 'Ontdek de maison', scroll: 'Scroll', scrollAria: 'Scroll naar De Maison',
      maisonTitle: 'Sicilië is de oorsprong.<br>De Middellandse Zee is de wereld.', maisonBody: 'OBSIDIANA ontstaat uit een Siciliaanse gevoeligheid en richt haar blik op de Middellandse Zee: op haar licht, haar materialen en haar manier om tijd te beleven.', maisonClose: 'Wijn is de eerste expressie van deze blik.',
      collectionTitle: 'Vier expressies,<br>één maison.', collectionBody: 'Vier wijnen, één gevoel voor maat. Verschillende karakters, dezelfde oorsprong, dezelfde mediterrane blik.',
      ombraType: 'Etna rood', meridioType: 'Etna wit', brezzaType: 'Witte mousserende wijn', auraType: 'Rosé mousserende wijn',
      materialTitle: 'Het verschil<br>zit in het detail.', materialBody: 'Natuurlijk papier. Matte oppervlakken. Een verfijnd accent van ingetogen goud.', materialClose: 'Elk element wordt gekozen om de manier waarop het op licht reageert, niet om hoe het op een foto oogt.', materialPaper: 'Papier', materialLight: 'Licht', materialDetail: 'Detail', materialListAria: 'Principes van materialiteit',
      experienceKicker: 'De Ervaring · Het Geschenk', experienceTitle: 'Een gebaar<br>dat blijft.', experienceBody: 'Een fles om mee te nemen naar een diner.<br>Een persoonlijk geschenk.<br>Een attent zakelijk gebaar.', experienceClose: 'De ervaring begint voordat de fles wordt geopend.',
      contactTitle: 'Laten we een gesprek beginnen.', contactBody: 'Voor informatie over de maison en de collectie, voor samenwerkingen of gewoon om kennis te maken.', contactCta: 'Schrijf naar de maison',
      heroAlt: 'Een stenen drempel met uitzicht op de Middellandse Zee', oliveAlt: 'Een olijftak in mediterraan licht tegen een wand met textuur', thresholdAlt: 'Een architectonische drempel waar warm licht doorheen valt', collectionAlt: 'De vier OBSIDIANA-flessen: OMBRA, MERIDIO, BREZZA en AURA', paperAlt: 'Natuurlijk ivoorkleurig papier met een fijn detail in mat goud', giftAlt: 'Zwarte OBSIDIANA-geschenkdoos met fles en kaart op een oppervlak met textuur', shippingAlt: 'OBSIDIANA-verpakking ontworpen om de levering te beschermen'
    }
  };

  const setMeta = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.content = value;
  };

  const setLanguage = (language, persist = false) => {
    const lang = translations[language] ? language : 'en';
    const copy = translations[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = copy[element.dataset.i18n];
      if (value) element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const value = copy[element.dataset.i18nHtml];
      if (value) element.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const value = copy[element.dataset.i18nAria];
      if (value) element.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const value = copy[element.dataset.i18nAlt];
      if (value) element.alt = value;
    });
    document.querySelectorAll('[data-lang]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    if (currentLanguage) currentLanguage.textContent = lang.toUpperCase();
    setMeta('meta[name="description"]', copy.metaDescription);
    setMeta('meta[property="og:locale"]', copy.locale);
    setMeta('meta[property="og:description"]', copy.socialDescription);
    setMeta('meta[name="twitter:description"]', copy.twitterDescription);
    if (persist) {
      try { localStorage.setItem('obsidiana-language-preference-v2', lang); } catch {}
    }
  };

  const detectBrowserLanguage = () => {
    const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const language of browserLanguages) {
      const code = String(language || '').toLowerCase().split('-')[0];
      if (translations[code]) return code;
    }
    return 'en';
  };

  document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => {
    setLanguage(button.dataset.lang, true);
    languageMenu?.removeAttribute('open');
    languageMenu?.querySelector('summary')?.focus();
  }));

  let preferredLanguage = '';
  try { preferredLanguage = localStorage.getItem('obsidiana-language-preference-v2') || ''; } catch {}
  setLanguage(preferredLanguage || detectBrowserLanguage());

  languageMenu?.addEventListener('toggle', () => {
    if (languageMenu.open) mobileNav?.removeAttribute('open');
  });
  mobileNav?.addEventListener('toggle', () => {
    if (mobileNav.open) languageMenu?.removeAttribute('open');
  });
  document.addEventListener('click', (event) => {
    if (languageMenu?.open && !languageMenu.contains(event.target)) languageMenu.removeAttribute('open');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      languageMenu?.removeAttribute('open');
      mobileNav?.removeAttribute('open');
    }
  });

  if (config.contactEmail && contactLink) {
    contactLink.href = `mailto:${config.contactEmail}`;
  }

  if (config.siteUrl) {
    const siteUrl = config.siteUrl.replace(/\/$/, '');
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = `${siteUrl}/`;
    document.head.appendChild(canonical);

    const metadata = [
      ['property', 'og:url', `${siteUrl}/`],
      ['property', 'og:image', `${siteUrl}/assets/images/sea.jpg`],
      ['name', 'twitter:image', `${siteUrl}/assets/images/sea.jpg`]
    ];
    metadata.forEach(([attribute, key, value]) => {
      const meta = document.createElement('meta');
      meta.setAttribute(attribute, key);
      meta.content = value;
      document.head.appendChild(meta);
    });
  }

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 32);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mobileNav.removeAttribute('open'));
  });

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  }
})();
