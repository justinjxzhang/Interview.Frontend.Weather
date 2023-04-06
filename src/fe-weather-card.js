import { LitElement, html, css } from 'lit';
import { getForecast } from './weatherApi';

class FeWeatherCard extends LitElement {
    static properties = {
        id: { type: String },
        latitude: { type: Number },
        longitude: { type: Number },
        label: { type: String },
        onRemove: { attribute: false },
        _weatherData: { attribute: false, state: true }
    }

    static styles = css`
        div.card {
            border: 1px solid gray;
            border-radius: .5rem;
            padding: 1rem;
        }

        div.daily-forecast {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: var(--grid-gap);
        }
        
        div.daily-forecast > div {
            flex: 1;
        }

        th, td {
            padding: .5rem 2rem;
        }

        sl-card, table {
            width: 100%;
        }
        
        .header {
            display:flex;
            flex-direction: row;
            gap: var(--grid-gap);
            justify-content: space-between;
            align-items: center
        }
    `;

    updated(changed) {
        if (changed.has('latitude') || changed.has('longitude')) {
            this._weatherData = getForecast(this.latitude, this.longitude);
        }
    }

    get dayGroupedTemps() {
        return (this._weatherData?.hourly.temperature_2m ?? [])
            .reduce((acc, curr, idx) => {
                const dt = (this._weatherData?.hourly.time ?? [])[idx] * 1000;
                const dateZeroed = new Date(dt).setUTCHours(0);
                if (!(dateZeroed in acc))
                    acc[dateZeroed] = [];
                acc[dateZeroed].push(curr);
                return acc;
            }, {});
    }
    
    get dayGroupedRain() {
        return (this._weatherData?.hourly.rain ?? [])
            .reduce((acc, curr, idx) => {
                const dt = (this._weatherData?.hourly.time ?? [])[idx] * 1000;
                const dateZeroed = new Date(dt).setUTCHours(0);
                if (!(dateZeroed in acc))
                    acc[dateZeroed] = [];
                acc[dateZeroed].push(curr);
                return acc;
            }, {});
    }

    render() {
        return html`
            <sl-card>
                <div slot="header" class="header">
                    <h4>${this.label}</h4>
                    <sl-button @click="${() => this.onRemove(this.id)}" variant="danger">Remove</sl-button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>High</th>
                            <th>Low</th>
                            <th>Rain</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${Object.entries(this.dayGroupedTemps).map(([dt, v]) => html`
                        <tr>
                            <td>${new Date(parseInt(dt)).toLocaleDateString()}</td>
                            <td>${Math.max(...v)}</td>
                            <td>${Math.min(...v)}</td>
                            <td>${this.dayGroupedRain[dt].some(r => r > 0)}</td>
                        </tr>
                        `)}
                    </tbody>
                </table>
            </sl-card>
        `;
    }
}

customElements.define('fe-weather-card', FeWeatherCard);