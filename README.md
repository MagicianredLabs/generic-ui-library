# generic-ui-library

[English translation](./README_EN.md)

Un esperimento per creare una libreria generica con i *WebComponents* usati in librerie di uno specifico framework (for example React or Angular) e quest'ultime incluse nelle applicazioni finali.

Il processo che utilizzo � dall'alto al basso (dall'applicazione finale andando verso le librerie), passo dopo passo, come se venissero inserite in un progetto gi� esistente.

Per l'applicazione di esempio ho preso spunto da questo tutorial in Angular che creava dei *dumb component* per realizzare un'applicazione Todo.
https://www.sitepoint.com/angular-2-tutorial/

## Descrizione

![Diagram](Project/Diagrams/schema.png)  
[drawio](Project/Diagrams/schema.drawio)  
[png](Project/Diagrams/schema.png)  

L'obbiettivo � poter riutilizzare una serie di *dumb component* creati in Web Components (cos� da poter essere riutilizzati in diversi framework) e creare una o pi� librerie di uno specifico framework cos� da poterle inserire facilmente nel proprio progetto e poter arricchire i componenti fatti in Web Components con le specifiche caratteristiche dei framework (routing, lifecycle, state management, ecc).

## Procedere per gradi nell'esperimento

Questo � un'esperimento, ma verr� effettuato partendo da alcuni progetti finali (inizialmente uno in Angular e uno in React - cos� da poter verificare la riutilizzabilit� dei Web Components creati). E verr� fatto per step simulando una situazione in cui non si pu� cambiare il progetto tutto in una volta, ma gradualmente.

### Primo step
### Angular

Il primo step sar� quello di trasformare i componenti in *dumb component* e spostarli in un modulo cos� da facilitare poi la separazione in libreria e sar� fatto nel branch *feature/frameworkAngular/move-components-into-module*.

### React

Il primo step sar� quello di trasformare i componenti in *dumb component* e spostarli in una cartella separata ed esportare i componenti tramite un file *index.js* sia come libreria completa che come singolo componente (come avviene ad esempio con *react-bootstrap* o *lodash*). Questo render� facile poi sostituire la cartella con una libreria esterna e sar� fatto nel branch *feature/frameworkReact/move-components-into-module*.

### Secondo step

Convertire la cartella (o il modulo per Angular) in una libreria esterna e caricarla in un servizio per essere installata con *npm* o *yarn* o altro package manager.

[TO DO]