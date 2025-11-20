class ChildDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        // Listen for events from the parent
        this.addEventListener("parent-updated", (e) => {
            this.update(e.detail);
        });

        // Initial render
        this.update({ count: 0 });
    }

    update(data) {
        this.shadowRoot.innerHTML = `
            <div>Count = ${data.count}</div>
        `;
    }
}

customElements.define("child-display", ChildDisplay);

