import { LitElement, css,html } from 'lit-element'
import anime from "animejs"

class Note extends LitElement {
  static get styles() {
    return css`
      .note {
        position: absolute;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 8px;
        background-color: var(--info);
        padding: 6px 12px 12px 12px;
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
      }
    `
  }

  constructor() {
    super()
  }
  
  render() {
    return html`<p class="note">${this.textContent}</p>`
  }

  firstUpdated() {
    super.firstUpdated()

    const note = this.shadowRoot.querySelector('.note')

    anime({
      targets: note,
      translateY: 24,
      translateX: "-50%",
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    })
  }
}

customElements.define('note-component', Note)
