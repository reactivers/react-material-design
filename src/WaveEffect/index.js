import React from 'react'
import '../index.scss'

export default class WaveEffect extends React.Component {
    state = {};

    componentDidMount() {

        this.oldMouseDown = document.onmousedown;
        this.oldMouseUp = document.onmouseup;

        document.onmousedown = function (e) {
            if (e.target.classList.value.indexOf("wave-effect") > -1) {
                this.setState({active: true});
                e.target.style.position = "relative";
                let wave = document.createElement('div');
                wave.style.position = "absolute";
                wave.style.left = e.offsetX + 'px';
                wave.style.top = e.offsetY + 'px';
                wave.id = "temp-wave";
                wave.className = "rmd-wave-effect";

                e.target.appendChild(wave);
            }
            this.oldMouseDown && this.oldMouseDown(e)
        }.bind(this);

        document.onmouseup = function (e) {

            if (this.state.active) {
                this.setState({active: false});
                let wave = document.querySelector('.rmd-wave-effect');
                wave.className = "rmd-wave-effect-fade-out";
                setTimeout(() => wave.parentElement.removeChild(wave), 1000)
            }
            this.oldMouseUp && this.oldMouseUp(e)
        }.bind(this)

    }

    render() {
        return null

    }
}