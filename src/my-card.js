import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://t3.ftcdn.net/jpg/07/08/87/22/360_F_708872253_fnARsh5Ds0rOQrsFUeGRQML6Ethg8kIW.jpg";
    this.content = "This is a birthday cat! Happy birthday!!";
    this.link = "https://hax.psu.edu";
    this.buttonText = "Click me for a present!";
    this.color = "powder blue";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 625px;
        margin: 16px;
        border: 1px solid #000;
        border-radius: 8px;
        padding: 16px;
        background-color: var(--card-color, white);
      }
      :host([fancy]) .card{
        background-color: blue;
      }
      .control-wrapper {
        display: flex;
        margin-bottom: 16px;
      }
      .birthday-card {
        border: 5px solid black; 
        background-color: powderblue; 
        max-width: 400px;
        }
        .btn {
        background-color: blue;
        color: white;
        font-size: 20px;
        border-radius: 10%;
        padding: 16px;
        margin: 4px 50px 10px 70px;
        width: 200px;
      }
    `;
  }
  

  render() {
    return html`
      <div id="card" style="background-color: ${this.color};" max-width="400px" max-height="200px"> 
      <div class="birthday-card">
        <img class="card-image" alt="Birthday" src="${this.image}" style="width:350px; height:200px;">
        <h1 class="card-title">${this.title}</h1>
        <div class="text">  
        <p>${this.content}</p>
        <details ?open = "${this.fancy}">
          <summary> Description</summary>
          <div>
            <a href="${this.link}" target="_blank">
              <button class="btn">${this.buttonText}</button>
            </a>
          </div>
          </div>
        </details>
      </div>
      </div>
  
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      content: { type: String },
      link: { type: String },
      buttonText: { type: String },
      color: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
