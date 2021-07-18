# generic-ui-library

[English translation](./README_EN.md)

Un esperimento per creare una libreria generica con i *WebComponents* usati in librerie di uno specifico framework (for example React or Angular) e quest'ultime incluse nelle applicazioni finali.

Il processo che utilizzo è dall'alto al basso (dall'applicazione finale andando verso le librerie), passo dopo passo, come se venissero inserite in un progetto già esistente.

Per l'applicazione di esempio ho preso spunto da questo tutorial in Angular che creava dei *dumb component* per realizzare un'applicazione Todo.
https://www.sitepoint.com/angular-2-tutorial/

## Descrizione

![Diagram](Project/Diagrams/schema.png)  
[drawio](Project/Diagrams/schema.drawio)  
[png](Project/Diagrams/schema.png)  

L'obbiettivo è poter riutilizzare una serie di *dumb component* creati in Web Components (così da poter essere riutilizzati in diversi framework) e creare una o più librerie di uno specifico framework così da poterle inserire facilmente nel proprio progetto e poter arricchire i componenti fatti in Web Components con le specifiche caratteristiche dei framework (routing, lifecycle, state management, ecc).

## Procedere per gradi nell'esperimento

Questo è un'esperimento, ma verrà effettuato partendo da alcuni progetti finali (inizialmente uno in Angular e uno in React - così da poter verificare la riutilizzabilità dei Web Components creati). E verrà fatto per step simulando una situazione in cui non si può cambiare il progetto tutto in una volta, ma gradualmente.

### Primo step
### Angular

Il primo step sarà quello di trasformare i componenti in *dumb component* e spostarli in un modulo così da facilitare poi la separazione in libreria e sarà fatto nel branch *feature/frameworkAngular/move-components-into-module*.

### React

Il primo step sarà quello di trasformare i componenti in *dumb component* e spostarli in una cartella separata ed esportare i componenti tramite un file *index.js* sia come libreria completa che come singolo componente (come avviene ad esempio con *react-bootstrap* o *lodash*). Questo renderà facile poi sostituire la cartella con una libreria esterna e sarà fatto nel branch *feature/frameworkReact/move-components-into-module*.

### Secondo step

Convertire la cartella (o il modulo per Angular) in una libreria esterna e caricarla in un servizio per essere installata con *npm* o *yarn* o altro package manager.

#### Angular

[TO DO]

#### React



## Credits

- Thanks to [jawblia](https://github.com/jawblia) for her guide to make npm package for react
https://levelup.gitconnected.com/publish-react-components-as-an-npm-package-7a671a2fb7f

- Thanks to *Suprada Urval*
https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f

- Thanks to *benjaminwfox*
https://benjaminwfox.medium.com/creating-a-react-component-library-by-abstracting-a-react-component-library-45290114d22a