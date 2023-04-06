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
            border-radius: .5em;
            padding: 1em;
        }

        div.daily-forecast {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: var(--grid-gap);
        }
        
        div.daily-forecast > div {
            flex: 1;
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

    formatEpochString(epoch) {
        return new Date(epoch * 1000).toLocaleString();
    }

    render() {
        const {0: start, length: l, [l - 1]: end } = this._weatherData?.hourly.time ?? [];
        console.log(this.dayGroupedTemps, this.dayGroupedRain);
        return html`
            <div class="card">
                <h4>${this.label}<pre>${this.latitude}, ${this.longitude}</pre></h4>
                <h5>${this.formatEpochString(start)} to ${this.formatEpochString(end)}</h5>
                <div class="daily-forecast">
                    ${Object.entries(this.dayGroupedTemps).map(([dt, v]) => html`
                        <div class="card">
                            <h4>${new Date(parseInt(dt)).toLocaleDateString()}</h4>
                            <p>High: ${Math.max(...v)}</p>
                            <p>Low: ${Math.min(...v)}</p>
                            <p>Rain expected: ${this.dayGroupedRain[dt].some(r => r > 0)}</p>
                        </div>
                    `)}
                </div>
                <button @click="${() => this.onRemove(this.id)}">Remove</button>
            </div>
        `;
    }
}

customElements.define('fe-weather-card', FeWeatherCard);