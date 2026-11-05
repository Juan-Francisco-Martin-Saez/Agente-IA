class ChatConversation extends HTMLElement {

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });

    this.shadow.innerHTML = /* html */`

      <style>
        :host {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          width: 100%;
          height: auto;
          min-width: 0;
          min-height: 0;
          overflow: hidden;
          box-sizing: border-box;
          color: hsl(0, 0%, 96%);
          transition: color 0.3s ease;
        }

        .chat-conversation {
          width: 100%;
          height: 100%;
          min-width: 0;
          min-height: 0;
          display: block;
          overflow-x: hidden;
          overflow-y: auto;
          box-sizing: border-box;
          background: hsl(0, 0%, 9%);
          color: hsl(0, 0%, 96%);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .conversation-container {
          width: 100%;
          max-width: 56.25rem;
          min-width: 0;
          min-height: 100%;
          margin: 0 auto;
          padding: 2rem 1.25rem;
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          color: hsl(0, 0%, 96%);
        }

        ::slotted(chat-welcome),
        ::slotted(chat-status),
        ::slotted(chat-messages) {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        ::slotted(chat-welcome) {
          flex-shrink: 0;
          transform: translateY(-9rem);
        }

        ::slotted(chat-status) {
          flex-shrink: 0;
        }

        ::slotted(chat-messages) {
          flex-shrink: 0;
        }

        :host([data-theme="light"]) {
          color: hsl(0, 0%, 10%);
        }

        :host([data-theme="light"])
        .chat-conversation {
          background: hsl(0, 0%, 97%);
          color: hsl(0, 0%, 10%);
        }

        :host([data-theme="light"])
        .conversation-container {
          color: hsl(0, 0%, 10%);
        }

        .chat-conversation {
          scrollbar-width: thin;
          scrollbar-color: hsl(0, 0%, 25%) transparent;
        }

        .chat-conversation::-webkit-scrollbar {
          width: 0.5rem;
        }

        .chat-conversation::-webkit-scrollbar-track {
          background: transparent;
        }

        .chat-conversation::-webkit-scrollbar-thumb {
          background: hsl(0, 0%, 25%);
          border-radius: 999rem;
        }

        :host([data-theme="light"])
        .chat-conversation {
          scrollbar-color: hsl(0, 0%, 75%) transparent;
        }

        :host([data-theme="light"])
        .chat-conversation::-webkit-scrollbar-thumb {
          background: hsl(0, 0%, 75%);
        }

        .api-messages {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .api-message {
          max-width: 85%;
          padding: 0.875rem 1rem;
          border-radius: 0.875rem;
          font-size: 0.95rem;
          line-height: 1.6;
          white-space: pre-wrap;
          overflow-wrap: anywhere;
        }

        .api-message.user {
          align-self: flex-end;
          background: hsl(0, 0%, 20%);
        }

        .api-message.assistant {
          align-self: flex-start;
          background: hsl(0, 0%, 14%);
        }

        :host([data-theme="light"])
        .api-message.user {
          background: hsl(0, 0%, 88%);
        }

        :host([data-theme="light"])
        .api-message.assistant {
          background: hsl(0, 0%, 93%);
        }

        @media (max-width: 64rem) {

          .conversation-container {
            padding: 1.5rem 1rem;
          }

          ::slotted(chat-welcome) {
            transform: translateY(-9rem);
          }

        }

        @media (max-width: 48rem) {

          .conversation-container {
            padding: 1.25rem 0.875rem;
          }

        }

        @media (max-width: 30rem) {

          .conversation-container {
            padding: 1rem 0.75rem;
          }

        }

        @media (min-width: 120rem) {

          .conversation-container {
            max-width: 62rem;
          }

        }

        @media (max-height: 40rem) {

          .conversation-container {
            padding-top: 1.25rem;
            padding-bottom: 1.25rem;
          }

        }

        @media (max-width: 30rem)
        and (max-height: 40rem) {

          .conversation-container {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

        }

      </style>

      <section class="chat-conversation">
        <div class="conversation-container">
          <slot name="welcome"></slot>
          <slot name="status"></slot>
          <slot name="messages"></slot>
          <div class="api-messages" aria-live="polite"></div>
        </div>
      </section>

    `;

    this.chatConversation =
      this.shadowRoot.querySelector(".chat-conversation");

    this.conversationContainer =
      this.shadowRoot.querySelector(".conversation-container");

    this.apiMessages =
      this.shadowRoot.querySelector(".api-messages");

    this.sidebarObserver = null;
    this.inputAbortController = null;
    this.sending = false;
    this.lastResponse = null;
    this.generation = 0;

  }

  connectedCallback() {

    this.syncWithSidebar();
    this.observeSidebar();
    this.connectInput();

  }

  disconnectedCallback() {

    if (this.sidebarObserver) {
      this.sidebarObserver.disconnect();
      this.sidebarObserver = null;
    }

    if (this.inputAbortController) {
      this.inputAbortController.abort();
      this.inputAbortController = null;
    }

  }

  syncWithSidebar() {

    const sidebar = document.querySelector("chat-sidebar");

    if (!sidebar) return;

    const theme = sidebar.getAttribute("data-theme");

    if (theme === "light") {
      this.setAttribute("data-theme", "light");
    } else {
      this.removeAttribute("data-theme");
    }

  }

  observeSidebar() {

    const sidebar = document.querySelector("chat-sidebar");

    if (!sidebar) return;

    if (this.sidebarObserver) {
      this.sidebarObserver.disconnect();
    }

    this.sidebarObserver = new MutationObserver(() => {
      this.syncWithSidebar();
    });

    this.sidebarObserver.observe(sidebar, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });

  }

  addMessage(text, type) {

    const message = document.createElement("div");

    message.className = `api-message ${type}`;
    message.textContent = text;

    this.apiMessages.appendChild(message);

    this.scrollToBottom();

    return message;

  }

  scrollToBottom() {

    this.chatConversation.scrollTop =
      this.chatConversation.scrollHeight;

  }

  // Convierte JSON anidado en un objeto JavaScript.

  parseResponse(data) {

    let parsed = data;

    for (let i = 0; i < 5; i++) {

      if (typeof parsed === "string") {

        try {
          parsed = JSON.parse(parsed);
          continue;
        } catch {
          break;
        }

      }

      if (
        parsed &&
        typeof parsed === "object" &&
        !Array.isArray(parsed) &&
        typeof parsed.response === "string"
      ) {

        try {

          const internal = JSON.parse(parsed.response.trim());

          if (
            internal &&
            typeof internal === "object" &&
            !Array.isArray(internal)
          ) {
            parsed = internal;
            continue;
          }

        } catch {
          // La respuesta contiene texto normal.
        }

      }

      break;

    }

    return parsed;

  }

  // Filtra los campos que devuelve OpenAI.

  filterResponse(data, originalPrompt) {

    const parsed = this.parseResponse(data);

    if (
      !parsed ||
      typeof parsed !== "object" ||
      Array.isArray(parsed)
    ) {
      throw new Error("Formato de respuesta no válido");
    }

    if (
      typeof parsed.response !== "string" ||
      !parsed.response.trim()
    ) {
      throw new Error("La respuesta no contiene texto válido");
    }

    return {

      prompt: originalPrompt,

      status:
        typeof parsed.status === "string"
          ? parsed.status
          : null,

      response: parsed.response,

      clarificationQuestion:
        typeof parsed.clarificationQuestion === "string"
          ? parsed.clarificationQuestion
          : null,

      products:
        Array.isArray(parsed.products)
          ? parsed.products
          : [],

      pendingItems:
        Array.isArray(parsed.pendingItems)
          ? parsed.pendingItems
          : [],

      totalPrice:
        typeof parsed.totalPrice === "number" &&
          Number.isFinite(parsed.totalPrice)
          ? parsed.totalPrice
          : null

    };

  }

  // Recoge los datos del formulario.

  prepareRequest(form) {

    const formData = new FormData(form);

    const prompt = formData.get("prompt");

    if (
      typeof prompt !== "string" ||
      !prompt.trim()
    ) {
      throw new Error("El mensaje está vacío");
    }

    for (const value of formData.values()) {

      if (
        value instanceof File &&
        value.size > 0
      ) {
        throw new Error(
          "Este envío JSON no admite archivos adjuntos"
        );
      }

    }

    return {
      prompt: prompt
    };

  }

  // Recibe un único evento desde ChatInput (clic o Enter).
  connectInput() {
    if (this.inputAbortController) this.inputAbortController.abort();
    this.inputAbortController = new AbortController();

    document.addEventListener("send-message-request", async (event) => {
      const input = document.querySelector("chat-input");
      const message = event.detail?.message;
      if (typeof message !== "string" || !message.trim()) {
        input?.finishSend?.();
        return;
      }
      if (this.sending) {
        input?.finishSend?.();
        return;
      }

      this.sending = true;
      const generation = this.generation;
      this.addMessage(message, "user");

      try {
        const base = import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "";
        const result = await fetch(`${base}/api/worker/chats`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: message })
        });
        const data = await result.json();
        if (!result.ok) throw new Error(data?.error || `HTTP ${result.status}`);
        if (generation !== this.generation) return;

        const filteredData = this.filterResponse(data, message);
        this.lastResponse = filteredData;
        console.log("Respuesta procesada:", filteredData);
        const reply = this.addMessage("", "assistant");
        await this.typeResponse(reply, filteredData.response, generation);
        if (generation === this.generation) {
          this.dispatchEvent(new CustomEvent("chat-response", {
            bubbles: true,
            composed: true,
            detail: filteredData
          }));
        }
      } catch (error) {
        console.error("Error de consulta:", error);
        if (generation === this.generation) {
          this.addMessage("No se pudo obtener la respuesta: " + error.message, "assistant");
        }
      } finally {
        this.sending = false;
        input?.finishSend?.();
        this.scrollToBottom();
      }
    }, { signal: this.inputAbortController.signal });
  }

  async typeResponse(element, text, generation) {
    // Escritura visual por bloques pequeños para textos largos.
    const chars = Array.from(text);
    const step = chars.length > 1200 ? 5 : chars.length > 500 ? 3 : 1;
    for (let i = 0; i < chars.length; i += step) {
      if (generation !== this.generation || !element.isConnected) return;
      element.textContent += chars.slice(i, i + step).join("");
      this.scrollToBottom();
      await new Promise(resolve => setTimeout(resolve, 14));
    }
  }

  resetConversation() {
    this.generation++;
    this.apiMessages.replaceChildren();
    this.lastResponse = null;
  }

}

customElements.define("chat-conversation", ChatConversation);