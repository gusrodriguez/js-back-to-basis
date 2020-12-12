class Accordion {
    constructor(root) {
      this.root = root;
      this.elements = [...this.root.children];
      this.initialize = this.initialize.bind(this);
      this.collapseAll = this.collapseAll.bind(this);
      this.update = this.update.bind(this);
      this.activePanel = {};
      this.initialize();
    }
    initialize() {
      this.elements.forEach(element => {
        if (element.tagName === 'DT') {
          element.classList.add('accordion-section');
          element.addEventListener('click', () => {
            this.activatePanel(element);
          });
        }
        if (element.tagName === 'DD') {
          element.classList.add('accordion-panel');
          element.children[0].classList.add('accordion-content');
        }
      });
      this.collapseAll();
      this.activatePanel(this.elements[0]);
    }
    activatePanel(activePanel) {
      this.activePanel = activePanel;
      this.update();
    }
    collapseAll() {
      this.elements.forEach(element => {
        if (element.nextElementSibling) {
          element.nextElementSibling.style.height = 0;
          if(element.nextElementSibling.children[0]){
            element.nextElementSibling.children[0].style.visibility = 'hidden';
          }
        }
      });
    }
    update() {
      this.collapseAll();
      this.activePanel.nextElementSibling.style.height = '100px';
      this.activePanel.nextElementSibling.children[0].style.visibility = 'visible';
    }
  }
  
  // Mount accordion on the root DL element
  const dl = document.getElementsByTagName('DL')[0];
  const accordion = new Accordion(dl);