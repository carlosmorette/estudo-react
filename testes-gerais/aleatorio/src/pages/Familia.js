import React from "react";

const fonte = { style: { fontSize: 20, color: "green" } }

// Criamos o componente filho
export const Filho = props =>
    <div>
        <p {...fonte}>Filho: {props.nome} {props.sobrenome}</p>
    </div>

// Criamos o componente pai
export const Pai = props =>
    <div>
        <p {...fonte}>Pai: {props.nome} {props.sobrenome}</p>
        {props.children}

        {/* {React.cloneElement(props.children, {...props}) /* Essa função aceita apenas um componente */}
        {/* {React.Children.map(props.children, c => React.cloneElement(c, {...props, ...c.props}))} */}
    </div>

// Criamos o componente avo
export const Avo = props =>
    <div>
        <p {...fonte}>Avô: {props.nome} {props.sobrenome}</p>
        {/* O pai recebe o sobrenome que vem do componente avo */}
        <Pai nome="André" sobrenome={props.sobrenome}>
            <Filho nome="Ana" />
            <Filho nome="Gui" />
            <Filho nome="Davi" />

        </Pai>
        {/* Esse pai recebe todas as propriedades e sobrescreve o nome */}
        <Pai {...props} nome="Pedro">
            <Filho nome="Rebeca" sobrenome={props.sobrenome} />
            <Filho nome="Renato" sobrenome={props.sobrenome} />

        </Pai>
    </div>