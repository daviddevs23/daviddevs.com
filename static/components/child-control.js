class ChildControl extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <button id="inc">Increment</button>
        `;

        this.shadowRoot.querySelector("#inc")
            .addEventListener("click", () => {
                this.dispatchEvent(new CustomEvent("increment-requested", {
                    bubbles: true,
                    composed: true,
                    detail: { amount: 1 }
                }));
            });
    }
}

customElements.define("child-control", ChildControl);

