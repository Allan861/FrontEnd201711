/// <reference path='helper.ts'/>
console.log('animal.ts');

interface IGreeting {
    id: number;
    content: string;
}

class Animals {
        private _animals = ['Karu','Kass', 'Hunt'];
        private _microtemplate: string;
        private _animalsModule: HTMLElement;
        private _button: HTMLButtonElement;
        private _input: HTMLInputElement;
        private _list: HTMLUListElement;
    constructor() {
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
        protected _cacheDOM() {
        this._microtemplate = Helper.getHTMLTemplate('templates/animal-template.html');
        this._animalsModule = document.getElementById('animalsModule');
            
        this._button = this._animalsModule.querySelector('.button') as HTMLButtonElement;
        this._input = this._animalsModule.querySelector('input');
        this._list = this._animalsModule.querySelector('ul');
    }
    protected _bindEvents() {
        this._button.addEventListener('click' , this.addAnimals.bind(this));
        this._list.addEventListener('click' , this._removeAnimal.bind(this));
    }
    protected _render() {
        let animals = '';
        this._animals.forEach(
            (value: string) => {
            const parsePass1 = Helper.parseHTMLString(this._microtemplate, '{{name}}', value);
            animals += parsePass1;
            }
        );
        this._list.innerHTML = animals;
    }
    public showAnimals() {
        console.log(this._animals);
    }
    public addAnimals(name: string | Event) {
        const animalName = (typeof name === 'string') ? name : this._input.value;
        this._animals.push(animalName);
        this._render();
    }
    private _deletePerson(e: Event) {
        if(e.target && (e.target as Element).nodeName === 'BUTTON') {
            const element = (e.target as Element).parentElement;
            const parent = element.parentElement;
            const index = Array.prototype.indexOf.call(parent.children, element);
            this._participants.splice(index, 1);
            localStorage.setItem('people', JSON.stringify(this._participants));
            this._render();
        }
    }
}