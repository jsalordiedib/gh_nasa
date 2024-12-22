# gh_nasa
Projecte Curs Github i Copilot

## Descripció

Aquest projecte és una aplicació web anomenada "Visor de Dades de la NASA". L'aplicació permet als usuaris explorar dades i imatges proporcionades per la NASA, incloent-hi la imatge astronòmica del dia (APOD) i altres dades interessants.

## Funcionalitats

- **Visor de Dades de la NASA**: Permet veure imatges i dades dels darrers 30 dies proporcionades per la NASA.
- **APOD (Astronomy Picture of the Day)**: Mostra la imatge astronòmica del dia amb una descripció detallada.
- **Calendari**: Permet veure les imatges astronòmiques de diversos dies en un format de calendari.

## Construcció del Projecte

Aquest projecte ha estat generat amb [Angular CLI](https://github.com/angular/angular-cli) versió 16.0.0. Utilitza diverses tecnologies i eines per proporcionar una experiència d'usuari rica i interactiva.

### Estructura del Projecte

L'estructura del projecte és la següent:
.github/
docs/
visor_dades_nasa/
  .angular/
  .vscode/
  src/
    app/
    assets/
    index.html
    main.ts
    styles.css
  angular.json
  package.json
  README.md
  tsconfig.json


### Components Principals

- **AppComponent**: Component principal que gestiona la navegació i el disseny general de l'aplicació.
- **NasaDataComponent**: Component que mostra les dades i imatges dels darrers 30 dies.
- **ApodComponent**: Component que mostra la imatge astronòmica del dia.
- **CalendarComponent**: Component que mostra les imatges astronòmiques en un format de calendari.
- **WelcomeComponent**: Component de benvinguda que introdueix l'aplicació als usuaris.

### Serveis

- **NasaService**: Servei que gestiona les peticions a l'API de la NASA per obtenir les dades necessàries.

## Desenvolupament

### Servidor de Desenvolupament

Executa `ng serve` per iniciar un servidor de desenvolupament. Navega a `http://localhost:4200/`. L'aplicació es recarregarà automàticament si canvies algun dels fitxers de font.

### Generació de Components

Executa `ng generate component component-name` per generar un nou component. També pots utilitzar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Construcció

Executa `ng build` per construir el projecte. Els artefactes de construcció es desaran al directori `dist/`.

### Execució de Tests

Executa `ng test` per executar els tests unitats via [Karma](https://karma-runner.github.io).

### Execució de Tests End-to-End

Executa `ng e2e` per executar els tests end-to-end via una plataforma de la teva elecció. Per utilitzar aquest comandament, primer has d'afegir un paquet que implementi capacitats de test end-to-end.

## Ajuda Addicional

Per obtenir més ajuda sobre l'Angular CLI utilitza `ng help` o consulta la [documentació oficial d'Angular CLI](https://angular.io/cli).