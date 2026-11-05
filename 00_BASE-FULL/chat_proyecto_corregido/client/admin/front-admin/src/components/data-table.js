class DataTable extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })
    this.data = [
      {
        "Teléfono": "610748843",
        "Dirección": "C/ Pascual Ribot, 1",
        "Email": "juan.martinez@example.com",
        "Código Postal": "07013"
      },
      {
        "Teléfono": "621583914",
        "Dirección": "C/ Aragón, 24",
        "Email": "laura.garcia@example.com",
        "Código Postal": "07008"
      },
      {
        "Teléfono": "634217856",
        "Dirección": "C/ Joan Alcover, 37",
        "Email": "pedro.lopez@example.com",
        "Código Postal": "07006"
      },
      {
        "Teléfono": "647902315",
        "Dirección": "C/ Blanquerna, 12",
        "Email": "ana.sanchez@example.com",
        "Código Postal": "07003"
      },
      {
        "Teléfono": "658341729",
        "Dirección": "C/ Manacor, 86",
        "Email": "carlos.martin@example.com",
        "Código Postal": "07007"
      },
      {
        "Teléfono": "671825403",
        "Dirección": "C/ General Riera, 45",
        "Email": "marta.rodriguez@example.com",
        "Código Postal": "07010"
      },
      {
        "Teléfono": "682439157",
        "Dirección": "C/ Foners, 19",
        "Email": "david.fernandez@example.com",
        "Código Postal": "07006"
      },
      {
        "Teléfono": "693751824",
        "Dirección": "C/ 31 de Diciembre, 52",
        "Email": "lucia.gomez@example.com",
        "Código Postal": "07004"
      },
      {
        "Teléfono": "604286931",
        "Dirección": "C/ Indústria, 8",
        "Email": "miguel.ruiz@example.com",
        "Código Postal": "07013"
      },
      {
        "Teléfono": "615937248",
        "Dirección": "C/ Pere Garau, 63",
        "Email": "elena.diaz@example.com",
        "Código Postal": "07007"
      },
      {
        "Teléfono": "626418573",
        "Dirección": "C/ Eusebi Estada, 29",
        "Email": "javier.moreno@example.com",
        "Código Postal": "07004"
      },
      {
        "Teléfono": "637592814",
        "Dirección": "C/ Marquès de la Fontsanta, 17",
        "Email": "sofia.munoz@example.com",
        "Código Postal": "07005"
      },
      {
        "Teléfono": "648731205",
        "Dirección": "C/ Socors, 41",
        "Email": "alberto.alonso@example.com",
        "Código Postal": "07002"
      },
      {
        "Teléfono": "659284736",
        "Dirección": "C/ Lluís Martí, 9",
        "Email": "paula.navarra@example.com",
        "Código Postal": "07005"
      },
      {
        "Teléfono": "670315928",
        "Dirección": "C/ Capità Vila, 33",
        "Email": "sergio.torres@example.com",
        "Código Postal": "07006"
      },
      {
        "Teléfono": "681746295",
        "Dirección": "C/ Son Espanyolet, 15",
        "Email": "maria.vargas@example.com",
        "Código Postal": "07014"
      },
      {
        "Teléfono": "692853147",
        "Dirección": "C/ Jesús, 72",
        "Email": "roberto.castillo@example.com",
        "Código Postal": "07010"
      },
      {
        "Teléfono": "603927451",
        "Dirección": "C/ Sant Miquel, 28",
        "Email": "cristina.ortega@example.com",
        "Código Postal": "07002"
      },
      {
        "Teléfono": "614568329",
        "Dirección": "C/ Olmos, 54",
        "Email": "fernando.ramos@example.com",
        "Código Postal": "07003"
      },
      {
        "Teléfono": "625741936",
        "Dirección": "C/ Caro, 11",
        "Email": "isabel.vazquez@example.com",
        "Código Postal": "07013"
      },
      {
        "Teléfono": "636829514",
        "Dirección": "C/ Guillem Massot, 39",
        "Email": "raul.dominguez@example.com",
        "Código Postal": "07005"
      },
      {
        "Teléfono": "649315827",
        "Dirección": "C/ Emili Darder, 21",
        "Email": "natalia.pascual@example.com",
        "Código Postal": "07013"
      },
      {
        "Teléfono": "657482193",
        "Dirección": "C/ Son Armadans, 47",
        "Email": "adrian.santos@example.com",
        "Código Postal": "07014"
      },
      {
        "Teléfono": "668937241",
        "Dirección": "C/ Salvador Dalí, 6",
        "Email": "beatriz.marquez@example.com",
        "Código Postal": "07015"
      },
      {
        "Teléfono": "679251834",
        "Dirección": "C/ Ramón y Cajal, 31",
        "Email": "daniel.iglesias@example.com",
        "Código Postal": "07011"
      },
      {
        "Teléfono": "680734925",
        "Dirección": "C/ Federico García Lorca, 18",
        "Email": "patricia.cabrera@example.com",
        "Código Postal": "07011"
      },
      {
        "Teléfono": "691426753",
        "Dirección": "C/ Joan Miró, 57",
        "Email": "alex.molina@example.com",
        "Código Postal": "07015"
      },
      {
        "Teléfono": "602815437",
        "Dirección": "C/ Miquel dels Sants Oliver, 14",
        "Email": "carolina.vila@example.com",
        "Código Postal": "07004"
      },
      {
        "Teléfono": "613749285",
        "Dirección": "C/ Bartomeu Rosselló-Pòrcel, 26",
        "Email": "marcos.vidal@example.com",
        "Código Postal": "07005"
      },
      {
        "Teléfono": "624583719",
        "Dirección": "C/ Alfons el Magnànim, 43",
        "Email": "silvia.soler@example.com",
        "Código Postal": "07004"
      }
    ]
    this.elementosPorPagina = 8
    this.totalPaginas = null
    this.paginaActual = 1
  }

  async connectedCallback() {
    await this.loadData()
    await this.render()
  }

  async loadData() {
    this.totalPaginas = Math.max(1, Math.ceil(this.data.length / this.elementosPorPagina))

    if (this.paginaActual > this.totalPaginas) {
      this.paginaActual = this.totalPaginas
    }
  }

  async render() {
    this.shadow.innerHTML = /*html*/`
      <style>
:host {
  display: block;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
}

.tabla {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  padding: 1.25rem;
  overflow: hidden;
}

.paginacion {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.boton-filtro {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 0.0625rem solid var(--color-borde);
  border-radius: 0.55rem;
  background: var(--color-elemento);
  color: var(--color-texto);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.boton-filtro:hover {
  background: var(--color-elemento-hover);
  border-color: var(--color-borde-hover);
}

.boton-filtro:active {
  background: var(--color-elemento-activo);
  border-color: var(--color-borde-activo);
}

.icono-filtro {
  width: 1.2rem;
  height: 1.2rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.grupo-paginacion {
  display: flex;
  align-items: center;
  width: max-content;
  max-width: 100%;
}

.controles-paginacion {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: max-content;
  max-width: 100%;
}

.boton-pagina {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 0.0625rem solid var(--color-borde);
  border-radius: 0.55rem;
  background: var(--color-elemento);
  color: var(--color-texto);
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
}

.boton-pagina:hover:not(:disabled) {
  background: var(--color-elemento-hover);
  color: var(--color-texto);
  border-color: var(--color-borde-hover);
}

.boton-pagina:active:not(:disabled) {
  background: var(--color-elemento-activo);
  border-color: var(--color-borde-activo);
}

.boton-pagina:disabled {
  opacity: 0.3;
  cursor: default;
}

.numero-pagina {
  width: 3.5rem;
  height: 2.5rem;
  box-sizing: border-box;
  padding: 0.4rem 0.5rem;
  border: 0.0625rem solid var(--color-borde);
  border-radius: 0.55rem;
  background: var(--color-elemento);
  color: var(--color-texto);
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  text-align: center;
  outline: none;
  appearance: textfield;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.numero-pagina:hover {
  background: var(--color-elemento-hover);
}

.numero-pagina:focus {
  background: var(--color-elemento-hover);
  border-color: var(--color-borde-hover);
}

.numero-pagina::-webkit-inner-spin-button,
.numero-pagina::-webkit-outer-spin-button {
  margin: 0;
  appearance: none;
}

.total-paginas {
  color: var(--color-texto-secundario);
  font-family: Arial, sans-serif;
  font-size: 0.85rem;
  line-height: 1.2;
  white-space: nowrap;
}

.entradas {
  display: flex;
  flex: 1 1 75dvh;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 0.35rem;
}

.entradas::-webkit-scrollbar {
  width: 0.45rem;
}

.entradas::-webkit-scrollbar-track {
  background: var(--color-elemento);
  border-radius: 0.5rem;
}

.entradas::-webkit-scrollbar-thumb {
  background: var(--color-borde);
  border-radius: 0.5rem;
}

.entradas::-webkit-scrollbar-thumb:hover {
  background: var(--color-borde-hover);
}

.tarjeta {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 1rem;
  background: var(--color-elemento);
  border: 0.0625rem solid var(--color-borde);
  border-radius: 0.7rem;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.tarjeta:hover {
  background: var(--color-elemento-hover);
  border-color: var(--color-borde-hover);
}

.dato {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 0.35rem;
}

.dato:last-child {
  margin-bottom: 0;
}

.etiqueta {
  flex-shrink: 0;
  color: var(--color-texto-secundario);
  font-size: 0.9rem;
}

.valor {
  min-width: 0;
  color: var(--color-texto);
  font-size: 0.9rem;
  overflow-wrap: anywhere;
}

@media (max-width: 48rem) {
  .tabla {
    padding: 2.5rem 1rem 1rem;
  }
}

@media (max-width: 30rem) {
  .tabla {
    padding: 2.25rem 0.75rem 0.75rem;
  }

  .controles-paginacion {
    gap: 0.3rem;
  }

  .boton-pagina,
  .boton-filtro {
    width: 2.25rem;
    height: 2.25rem;
  }

  .boton-pagina {
    font-size: 1.3rem;
  }

  .icono-filtro {
    width: 1.05rem;
    height: 1.05rem;
  }

  .numero-pagina {
    width: 3.25rem;
    height: 2.25rem;
    font-size: 0.85rem;
  }

  .total-paginas {
    font-size: 0.8rem;
  }

  .tarjeta {
    padding: 0.85rem;
  }
}
      </style>

      <section class="tabla">
        <nav class="paginacion" aria-label="Paginación">
          <button class="boton-filtro" type="button" aria-label="Filtrar" title="Filtrar">
            <svg class="icono-filtro" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 5h16M7 12h10M10 19h4"></path>
            </svg>
          </button>

          <div class="grupo-paginacion">
            <div class="controles-paginacion">
              <button class="boton-pagina anterior" type="button" aria-label="Página anterior">&lt;</button>
              <input class="numero-pagina" type="number" min="1" value="1" aria-label="Número de página">
              <span class="total-paginas" aria-live="polite">de ${this.totalPaginas} páginas</span>
              <button class="boton-pagina siguiente" type="button" aria-label="Página siguiente">&gt;</button>
            </div>
          </div>
        </nav>

        <div class="entradas"></div>
      </section>
    `

    this.showElements()
    this.renderPagination()
  }

  showElements() {
    const entradas = this.shadowRoot.querySelector(".entradas")
    entradas.innerHTML = ""

    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    const fin = inicio + this.elementosPorPagina;
    const datosPagina = this.data.slice(inicio, fin);

    datosPagina.forEach(dato => {
      const tarjeta = document.createElement("article")
      tarjeta.classList.add("tarjeta")

      Object.entries(dato).forEach(([clave, valor]) => {
        const elementoDato = document.createElement("div")
        elementoDato.classList.add("dato")
        tarjeta.append(elementoDato)

        const etiqueta = document.createElement("span")
        etiqueta.classList.add("etiqueta")
        etiqueta.textContent = `${this.formatearEtiqueta(clave)}:`
        elementoDato.append(etiqueta)

        const elementoValor = document.createElement("span")
        elementoValor.classList.add("valor")
        elementoValor.textContent = valor
        elementoDato.append(elementoValor)
      })

      entradas.append(tarjeta)
    })

    this.totalPaginas = Math.max(1, Math.ceil(this.data.length / this.elementosPorPagina))

    if (this.paginaActual > this.totalPaginas) {
      this.paginaActual = this.totalPaginas;
    }
  }

  renderPagination() {
    this.shadow.querySelector('.tabla').addEventListener('click', event => {
      if (event.target.closest('.anterior')) {
        this.cambiarPagina(this.paginaActual - 1);
        return
      }

      if (event.target.closest('.siguiente')) {
        this.cambiarPagina(this.paginaActual + 1);
        return
      }
    })

    this.shadowRoot.querySelector(".numero-pagina").addEventListener("input", () => {
      this.cambiarPagina(this.shadowRoot.querySelector(".numero-pagina").value);
    })
  }

  formatearEtiqueta(clave) {
    return clave.replaceAll("_", " ").replace(/^./, letra => letra.toUpperCase())
  }

  cambiarPagina(numero) {
    numero = Number(numero)

    if (Number.isNaN(numero)) {
      numero = this.paginaActual
    }

    numero = Math.round(numero)

    if (numero < 1) {
      numero = 1
    }

    if (numero > this.totalPaginas) {
      numero = this.totalPaginas
    }

    this.paginaActual = numero

    this.shadowRoot.querySelector(".numero-pagina").value = this.paginaActual
    this.showElements()
  }
}

customElements.define("data-table", DataTable);