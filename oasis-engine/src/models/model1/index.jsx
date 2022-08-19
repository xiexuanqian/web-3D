import React, { Component } from 'react'
import {WebGLEngine,WebCanvas} from 'oasis-engine'

export default class index extends Component {

    state = {
        webcanvas:''
    }
    componentDidMount(){
        let canvas = document.getElementById("canvas")
        const webcanvas = new WebCanvas(canvas)
        // const pixelRatio = window.devicePixelRatio;
        // const scale = 3/2
        // webcanvas.width = window.innerWidth * pixelRatio
        // webcanvas.hight = window.innerHeight * pixelRatio
        // webcanvas.setScale(scale,scale)
        const fixedWidth = 750;
        const scale = window.innerWidth/fixedWidth
        webcanvas.width = fixedWidth
        webcanvas.height = window.innerHeight/scale
        webcanvas.setScale(scale,scale)
        this.setState({
            webcanvas
        })

    }
  render() {
    window.onresize = ()=>{
        // this.state.engine.canvas.resizeByClientSize()
        console.log(this.state.webcanvas)
    }
    return (
      <div>
        <canvas id='canvas' style={{width:"500px",height:"500px"}}></canvas>
      </div>
    )
  }
}
