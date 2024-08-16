if (!customElements.get("collection-variant-options")) {
  class CollectionVariantOptions extends HTMLElement {
    constructor() {
      super();

      this.inputs = this.querySelectorAll("input");
    }

    connectedCallback() {
      this.inputs?.forEach((input) => {
        input.addEventListener("change", () => {
          this.updateProduct(input.value);
        });
      });
    }

    updateProduct(handle) {
      fetch(
        `${window.location.origin}/products/${handle}?sections=${this.getSectionsToRender()
          .map((section) => section.section)
          .join(",")}`,
      )
        .then((res) => res.json())
        .then((sections) => {
          this.getSectionsToRender().forEach((section) => {
            const oldSection = document.querySelector(section.selector);
            const newSection = this.getSectionInnerHTML(
              sections[section.section],
              section.selector,
            );

            oldSection.innerHTML = newSection;

            window.history.replaceState(
              {},
              "",
              `${document.location.origin}/products/${handle}`,
            );
          });
        });
    }

    getSectionInnerHTML(html, selector = ".shopify-section") {
      return new DOMParser()
        .parseFromString(html, "text/html")
        .querySelector(selector).innerHTML;
    }

    getSectionsToRender() {
      return [
        {
          section: this.dataset.section,
          selector: `#MainProduct-${this.dataset.section}`,
        },
      ];
    }
  }

  customElements.define("collection-variant-options", CollectionVariantOptions);
}
