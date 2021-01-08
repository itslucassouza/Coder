import React from 'react';
import "./App.css";

import Card from './components/layout/Card';

import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelasProdutos from './components/repeticao/TabelasProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/fragment';

export default () => (
    <div className="App">
        <h1> Fundamentos React! </h1>

        <div className="Cards">

        <Card titulo="#12 Contador" color="#424242">
        <Contador numeroInicial={10} />
        </Card>

        <Card titulo="#11 Componente Controlado" color="#e45f56">
        <Input></Input>
        </Card>

        <Card titulo="#10 Comunicação indireta" color="#8bad39">
        <IndiretaPai />
        </Card>

        <Card titulo="#9 Comunicação Direta" color="#982395">
            <DiretaPai>
            </DiretaPai>
        </Card>

        <Card titulo="#8 RenderizaçãoCondicional" color="#982395">
            <ParOuImpar numero={21}></ParOuImpar>
            <UsuarioInfo usuario={{nome: 'Fernando'}} />
        </Card>

        <Card titulo="#7 Desafio Repetição" color="#3a9ad9">
            <TabelasProdutos></TabelasProdutos>
        </Card>

        <Card titulo="#6 Repetição" color="#FF4c65">
            <ListaAlunos>    
            </ListaAlunos>
        </Card>


        <Card titulo=" #5 Componente com Filhos" color="#00c8f8">
            <Familia sobrenome="Souza">
             <FamiliaMembro nome="Pedro" />
             <FamiliaMembro nome="Lucas" />
             <FamiliaMembro nome="Juliana" />
        </Familia>
        </Card>  

        <Card titulo="#4 Desafio Aleatorio" color="#FA6900">
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#3 Fragmento" color="#E94C6F">
            <Fragmento />
        </Card>

        <Card titulo="#2 ComParametro" color="#E8B71A">
        <ComParametro
            situacao="Situação do aluno"
            nome="Lucas"
            nota="9.5" />
        </Card>

        <Card titulo=" #1 Primeiro Exercicio" color="#588C73">
        <Primeiro />
        </Card>        
        </div>

       
    </div>

);