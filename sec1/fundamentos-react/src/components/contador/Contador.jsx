import "./Contador.css";
import React, { Component } from 'react';

import Display from './Display'
import Botoes from './Botoes';
import PassoForm from './PassoForm'
import passoForm from "./PassoForm";

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 10,
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    desc = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        }); 
    }


    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <p>Valor inicial: {this.props.numeroInicial }</p>
                <Botoes decrementar={this.inc} incrementar={this.desc} />
                
            </div>
        )
    }
}