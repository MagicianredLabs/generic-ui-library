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

Il primo step sarà quello di trasformare i componenti in *dumb component*. Per ogni linguaggio ci sarà un approccio diverso, secondo le caratteristiche proprie della tecnologia.

### Angular

Spostare, i componenti creati, in un modulo così da facilitare poi la separazione in libreria e sarà fatto nel branch *feature/frameworkAngular/move-components-into-module*.

### React

Spostare, i componenti creati, in una cartella separata ed esportare i componenti tramite un file *index.js* sia come libreria completa che come singolo componente (come avviene ad esempio con *react-bootstrap* o *lodash*). Questo renderà facile poi sostituire la cartella con una libreria esterna e sarà fatto nel branch *feature/frameworkReact/move-components-into-module*.

### Secondo step

Convertire la cartella (o il modulo per Angular) in una libreria esterna e caricarla in un servizio per essere installata con *npm* o *yarn* o altro package manager. Una volta creato l'npm package andare ad importarlo ed utilizzarlo nei progetti.

#### Angular

[TO DO]

#### React

Per creare la libreria npm react seguire le seguenti istruzioni per creare il progetto:
https://fathomtech.io/blog/create-a-react-component-library-using-create-react-app/

Modificare nel *package.json* le seguenti dipendenze:

```json
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
  },
  "devDependencies": {
    "@babel/cli": "^7.14.8",
    "@babel/core": "^7.15.0",
    "@babel/preset-env": "^7.15.0",
    "@babel/preset-react": "^7.14.5",
    "@storybook/addon-actions": "^6.3.6",
    "@storybook/addon-essentials": "^6.3.6",
    "@storybook/addon-links": "^6.3.6",
    "@storybook/node-logger": "^6.3.6",
    "@storybook/addon-storyshots": "^6.3.6",
    "@storybook/preset-create-react-app": "^3.2.0",
    "@storybook/react": "^6.3.6",
    "react-test-renderer": "^17.0.2",
    "cross-env": "^7.0.3",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10"
  },
  "peerDependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.3"
  },
```

In particolare aggiornare la versione *"react-scripts": "4.0.3"* e aggiungere i pacchetti *@babel/cli* e *@babel/core* che serviranno per lo script *compile*

ed aggiungere gli script

```json
"clean": "rimraf dist",
"compile": "npm run clean && cross-env NODE_ENV=production babel src/components --out-dir dist --copy-files --ignore __tests__,spec.js,test.js,stories.js,__snapshots__",
"prepare": "npm run compile"
```

Creare i componenti necessari, verificarli attraverso storybook e una volta soddisfatto, creare un account su npmjs.com o altro npm server, aggiornare la versione nel package.json e lanciare il comando

```cmd
npm publish
```

Importa la libreria nel progetto React con il seguente comando

```javascript
import { 
    TodoListHeaderWrapper as TodoListHeader, 
    TodoListWrapper as TodoList, 
    TodoListFooterWrapper as TodoListFooter 
} from '@magicianred/todo-react-ui-library';
```


Creata la libreria npm *@magicianred/todo-react-ui-library* come prova
https://www.npmjs.com/package/@magicianred/todo-react-ui-library



### Terzo step
Convertire i componenti delle librerie specifiche (React ed Angular) in componenti Web Components. Andare poi ad utilizzare questi componenti nelle librerie delle specifiche tecnologie.

#### Angular

[TO DO]

#### React

[TO DO]


## Credits

- Thanks to [jawblia](https://github.com/jawblia) for her guide to make npm package for react
https://levelup.gitconnected.com/publish-react-components-as-an-npm-package-7a671a2fb7f

- Thanks to *Suprada Urval*
https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f

- Thanks to *benjaminwfox*
https://benjaminwfox.medium.com/creating-a-react-component-library-by-abstracting-a-react-component-library-45290114d22a

- Thanks to *fathomtech.io*
https://fathomtech.io/blog/create-a-react-component-library-using-create-react-app/

