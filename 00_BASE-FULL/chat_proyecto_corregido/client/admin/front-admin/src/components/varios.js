class DataVarios extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.data = [
      {
        "nombre": "Juan Francisco Martín",
        "email": "juan@example.com",
        "rol": "Administrador",
        "estado": "Activo"
      },
      {
        "producto": "Ordenador portátil",
        "precio": "999 €",
        "stock": "24"
      },
      {
        "pelicula": "Interestelar",
        "director": "Christopher Nolan",
        "año": 2014,
        "genero": "Ciencia ficción",
        "duracion": "169 minutos"
      },
      {
        "ciudad": "Palma de Mallorca",
        "pais": "España",
        "poblacion": "430.000 habitantes"
      },
      {
        "proyecto": "Panel de control",
        "tecnologia": "HTML, CSS y JavaScript",
        "progreso": "75%",
        "responsable": "Equipo de desarrollo"
      },
      {
        "videojuego": "The Legend of Zelda",
        "plataforma": "Nintendo Switch",
        "genero": "Aventura",
        "valoracion": "9.5/10"
      },
      {
        "libro": "Dune",
        "autor": "Frank Herbert",
        "año": 1965
      },
      {
        "curso": "Desarrollo Web",
        "nivel": "Intermedio",
        "duracion": "120 horas",
        "modalidad": "Online",
        "plazas": 30
      },
      {
        "empresa": "NovaTech",
        "sector": "Tecnología",
        "empleados": 128,
        "ubicacion": "Madrid"
      },
      {
        "evento": "Feria de tecnología",
        "fecha": "15 de octubre de 2026",
        "lugar": "Barcelona",
        "entrada": "Gratuita"
      },
      {
        "personaje": "Rhodvar Varykhen",
        "especie": "Vaerum",
        "origen": "Desconocido",
        "estado": "Activo",
        "clasificacion": "Confidencial"
      },
      {
        "pelicula": "Resident Evil",
        "año": 2026,
        "genero": "Terror",
        "duracion": "Pendiente",
        "estreno": "Cine"
      },
      {
        "pedido": "PED-10482",
        "cliente": "Ana López",
        "importe": "249,90 €",
        "estado": "Enviado",
        "fecha": "26/09/2026"
      },
      {
        "pais": "Japón",
        "capital": "Tokio",
        "continente": "Asia",
        "moneda": "Yen",
        "idioma": "Japonés",
        "poblacion": "123 millones"
      },
      {
        "articulo": "Nuevo sistema de navegación",
        "categoria": "Tecnología",
        "autor": "Departamento de innovación",
        "fecha": "26/09/2026",
        "publicado": true,
        "etiquetas": "Web, Componentes, JavaScript"
      }
    ];
    this.shadow.innerHTML = /*html*/`
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          max-width: 100%;
          min-width: 0;
          min-height: 0;
          box-sizing: border-box;
          overflow: hidden;
        }
        .contenedor {
          display: block;
          width: 100%;
          height: 100%;
          max-width: 100%;
          min-width: 0;
          min-height: 0;
          box-sizing: border-box;
          overflow-x: hidden;
          overflow-y: auto;
          padding-right: 0.35rem;
        }
        .contenedor::-webkit-scrollbar {
          width: 0.45rem;
        }
        .contenedor::-webkit-scrollbar-track {
          background: var(--color-elemento);
          border-radius: 0.5rem;
        }
        .contenedor::-webkit-scrollbar-thumb {
          background: var(--color-borde);
          border-radius: 0.5rem;
        }
        .contenedor::-webkit-scrollbar-thumb:hover {
          background: var(--color-borde-hover);
        }
        .tarjeta {
          display: block;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
          padding: 1rem;
          margin-bottom: 1rem;
          border: 0.0625rem solid var(--color-borde-elemento);
          border-radius: 0.5rem;
          background: var(--color-elemento);
          color: var(--color-texto);
        }
        .titulo {
          margin: 0 0 0.5rem;
          color: var(--color-texto);
          font-family: Arial, sans-serif;
          font-size: 1rem;
          font-weight: 600;
        }
        .texto {
          margin: 0;
          color: var(--color-texto-secundario);
          font-family: Arial, sans-serif;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        @media (max-width: 48rem) {
          .tarjeta {
            margin-bottom: 0.75rem;
            padding: 0.9rem;
          }
        }
        @media (max-width: 30rem) {
          .tarjeta {
            padding: 0.75rem;
          }
          .titulo {
            font-size: 0.95rem;
          }
          .texto {
            font-size: 0.85rem;
          }
        }
      </style>
      <section class="contenedor"></section>
    `;
    this.contenedor = this.shadowRoot.querySelector(".contenedor");
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.contenedor.innerHTML = "";
    this.data.forEach((item) => {
      const tarjeta = document.createElement("article");
      tarjeta.className = "tarjeta";
      const valores = Object.values(item);
      const titulo = document.createElement("h3");
      titulo.className = "titulo";
      titulo.textContent = valores[0] ?? "";
      tarjeta.appendChild(titulo);
      valores.slice(1).forEach((valor) => {
        const texto = document.createElement("p");
        texto.className = "texto";
        texto.textContent = valor ?? "";
        tarjeta.appendChild(texto);
      });
      this.contenedor.appendChild(tarjeta);
    });
  }
}
customElements.define("data-varios", DataVarios);