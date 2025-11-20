import './components/child-control.js';
import './components/child-display.js';

class AppMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.state = { count: 0 };
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <child-display></child-display>
            <child-control></child-control>
        `;

        // Listen to events from children
        this.shadowRoot.addEventListener("increment-requested", (e) => {
            this.state.count += e.detail.amount;
            this.updateChildren();
        });
    }

    updateChildren() {
        const child = this.shadowRoot.querySelector("child-display");
        child.dispatchEvent(new CustomEvent("parent-updated", {
            bubbles: false,   // doesn't matter for downward events
            composed: false,
            detail: { count: this.state.count }
        }));
    }

    getAppState() {
        return this.state;
    }
}

customElements.define("app-main", AppMain);
