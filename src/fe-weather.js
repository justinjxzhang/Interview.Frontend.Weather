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
  `;
  
  static properties = {
    _weatherCities: { state: true }
  };


  cityLatLong = {
    'London': [51.507351, -0.127758],
    'Edinburgh': [55.953251, -3.188267],
    'New York': [40.712776, -74.005974],
    'San Francisco': [37.774929, -122.419418],
    'Delhi': [28.7041, 77.1025]
  }

  constructor() {
    super();
    this._weatherCities = [];
  }

  addCountry() {
    const newCountry = this.shadowRoot.querySelector("select#city").value;
    this._weatherCities = [...this._weatherCities, newCountry];
    console.log(this._weatherCities);
  }

  render() {
    return html`
      <div>
        <label for="city">City</label>
        <select id="city">
          <option value="London">London</option>
          <option value="Edinburgh">Edinburgh</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Delhi">Delhi</option>
        </select>
        <button @click="${() => this.addCountry()}">Add</button>
      </div>

      <div class="cards">
        ${this._weatherCities.map(c => html`
          <fe-weather-card
            label="${c}"
            latitude="${this.cityLatLong[c][0]}"
            longitude="${this.cityLatLong[c][1]}"
          ></fe-weather-card>
        `)}
      </div>
    `;
  }
}

customElements.define('fe-weather', FeWeather);