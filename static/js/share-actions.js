class ShareActions extends HTMLElement {
  constructor() {
    super();
  }

  // Returns a url prop value or the current page url as a fallback
  get url() {
    return this.getAttribute("url") || window.location.href;
  }

  // Returns a title prop value or the page <title>
  get title() {
    return this.getAttribute("title") || document.title;
  }

  // Looks for a meta description and extracts the value if it is found. Returns an empty string if not
  get description() {
    const metaDescriptionElement = document.querySelector(
      'meta[name="description"]'
    );

    return metaDescriptionElement
      ? metaDescriptionElement.getAttribute("content")
      : "";
  }

  // Determine if this browser can use the share API
  get hasShareSupport() {
    return navigator.share;
  }

  // Determine if this browser can use the clipboard API
  get hasClipboardSupport() {
    return navigator.clipboard;
  }

  // Takes the event trigger context (<button>), triggers the share API, then passes that
  // context and alert text to the renderAlert method
  triggerShare(context) {
    navigator
      .share({
        title: this.title,
        url: this.url,
        text: this.description
      })
      .then(() => {
        this.renderAlert("Thanks!", context);
      })
      .catch((error) => console.error("Error sharing", error));
  }

  // Takes the event trigger context (<button>), triggers the clipboard API, then passes that
  // context and alert text to the renderAlert method
  copyToClipboard(context) {
    navigator.clipboard
      .writeText(this.url)
      .then(() => {
        this.renderAlert("URL Copied to Clipboard!", context);
        // const popover = document.getElementById("share-action-aside");
        // popover.showPopover();
      })
      .catch((error) => console.error(error));
  }

  // Takes message text, the event context and an optional millisecond value for clearing the
  // alert. It then renders that as a sibling (to the button) alert element *or* a local alert
  // element to this component. If neither are available, nothing happens here.
  renderAlert(text, context, clearTime = 3000) {
    const alert = context
      ? context.nextElementSibling
      : this.querySelector('[role="alert"]');

    if (alert) {
      alert.innerText = text;
      alert.showPopover();

      setTimeout(() => {
        alert.hidePopover();
      }, clearTime);
    }
  }

  // Takes an event, works out the method based on the trigger's 'data-method' attribute
  // then invokes the right event handler
  handleClick(event) {
    const method = event.currentTarget.dataset.method;

    switch (method) {
      case "share":
        this.triggerShare(event.currentTarget);
        return;
      case "clipboard":
        this.copyToClipboard(event.currentTarget);
        return;
    }
  }

  // Finds all buttons and attaches a click event to our handler
  assignEvents() {
    const buttons = this.querySelectorAll("button");

    if (buttons.length) {
      buttons.forEach((button) =>
        // Without doing this approach of invoking the event handler and instead
        // passing the function right in `this.handleClick` the following won't work:
        // 1. 'this' is out of scope so the trigger methods can't be found in our event handler
        // 2. event.currentTarget doesn't work which is needed to ensure the event trigger and not its children
        //    is always the correct target in our handler
        button.addEventListener("click", (event) => this.handleClick(event))
      );
    }
  }

  connectedCallback() {
    // No support is available for either share or clipboard APIs so we bail out here
    // and let the component's child HTML take over
    if (!this.hasShareSupport && !this.hasClipboardSupport) {
      console.log("No support so revert to MVE");
      return;
    }

    // Support of at least one API is available so now we render those buttons conditionally
    this.innerHTML = `
      
        ${
          this.hasShareSupport
            ? `
            <button class="button" data-method="share">
            <svg
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-share-2"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1" />
  <path d="M12 14v-11" />
  <path d="M9 6l3 -3l3 3" />
</svg> Share</button>
            <div id="share-alert" role="alert" popover></div>
        `
            : ""
        }
        ${
          this.hasClipboardSupport
            ? `
            <button class="button" data-method="clipboard">
            <svg
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
</svg> Copy URL</button>
            <div id="clipboart-copy-alert" role="alert" popover></div>
        `
            : ""
        }

    `;

    // Buttons are now rendered so we can assign the events
    this.assignEvents();
  }
}

customElements.define("share-actions", ShareActions);
