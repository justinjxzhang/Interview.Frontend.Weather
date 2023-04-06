import { LitElement, html, css } from 'lit';
import './fe-weather-card.js';

class FeWeather extends LitElement {

  static styles = css`
    :host {
      display:flex;
      flex-direction: column;
      gap: var(--grid-gap);
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: var(--grid-gap);
    }

    form.horizontal {
      display: flex;
      flex-direction: row;
      gap: var(--grid-gap);
      align-items: end;
    }

    form.full-width {
      width: 100%;
    }

    #city {
      flex: 1;
    }
  `;
  
  static properties = {
    _weatherCities: { state: true }
  };


  cityLatLong = {
    'London': [51.507351, -0.127758],
    'Edinburgh': [55.953251, -3.188267],
    'NewYork': [40.712776, -74.005974],
    'SanFrancisco': [37.774929, -122.419418],
    'Delhi': [28.7041, 77.1025]
  }

  constructor() {
    super();
    this._weatherCities = [];
  }

  addCountry() {
    const city = this.shadowRoot.querySelector("sl-select#city").value;
    const id = crypto.randomUUID();
    this._weatherCities = [...this._weatherCities, { id, city} ];
  }

  removeCountry(cityId) {
    this._weatherCities = [...this._weatherCities.filter(x => x.id != cityId)];
  }

  render() {
    return html`
      <form class="horizontal full-width">
        <sl-select id="city" label="City">
          <sl-option value="London">London</sl-option>
          <sl-option value="Edinburgh">Edinburgh</sl-option>
          <sl-option value="NewYork">NewYork</sl-option>
          <sl-option value="SanFrancisco">SanFrancisco</sl-option>
          <sl-option value="Delhi">Delhi</sl-option>
        </sl-select>
        <sl-button @click="${this.addCountry}">Add</sl-button>
      </form>

      <div class="cards">
        ${this._weatherCities.map(c => {
            const { id, city } = c;
            return html`
            <fe-weather-card
              label="${city}"
              id="${id}"
              latitude="${this.cityLatLong[city][0]}"
              longitude="${this.cityLatLong[city][1]}"
              .onRemove="${this.removeCountry}"
            ></fe-weather-card>
          `
        })}
      </div>
    `;
  }
}

customElements.define('fe-weather', FeWeather);