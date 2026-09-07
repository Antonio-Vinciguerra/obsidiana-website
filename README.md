# OBSIDIANA — Production Website Candidate

Sito statico one-page responsive che traduce in una reale esperienza web la direzione approvata per OBSIDIANA — Maison Mediterranea.

Il sito include contenuti completi in italiano, inglese, spagnolo e olandese. Il selettore compatto rileva automaticamente la lingua del browser al primo accesso; una scelta manuale viene ricordata e ha sempre la precedenza. I browser configurati in altre lingue ricevono automaticamente la versione inglese.

## Struttura

- `index.html` — contenuto e metadati della pagina
- `css/styles.css` — sistema visivo e comportamento responsive
- `js/config.js` — configurazione di dominio ed email
- `js/site.js` — navigazione, header e animazioni leggere
- `assets/images` — immagini ottimizzate per il web
- `assets/icons` — favicon

## Anteprima locale

Dalla cartella del progetto:

```bash
python3 -m http.server 8080
```

Aprire quindi `http://localhost:8080` nel browser.

## Prima della pubblicazione

Aggiornare in `js/config.js`:

- `contactEmail` con l’indirizzo confermato della maison;
- `siteUrl` con il dominio definitivo, comprensivo di `https://`.

Il dominio configura automaticamente canonical URL e immagini social assolute. Titolo, descrizione e altri metadati editoriali sono in `index.html`. Le immagini possono essere sostituite mantenendo nomi, proporzioni e percorsi oppure aggiornando i relativi riferimenti HTML.

Prima del lancio pubblico devono essere forniti e approvati gli eventuali contenuti legali e privacy. Il sito non utilizza cookie, analytics, tracker, moduli, database o servizi esterni oltre al caricamento dei font.

## GitHub Pages

1. Copiare il contenuto di questa cartella nella root del repository.
2. Eseguire commit e push sul branch scelto.
3. In **Settings → Pages**, selezionare **Deploy from a branch** e la cartella `/ (root)`.
4. Inserire l’URL finale in `js/config.js` e verificare nuovamente i metadati social.

Tutti i percorsi sono relativi e compatibili con una pubblicazione statica in sottocartella.
