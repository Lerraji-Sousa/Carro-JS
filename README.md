# 🚗 Classe Carro em JavaScript

Este projeto demonstra a criação e o uso de uma classe `Carro` em JavaScript, com métodos para simular ações como ligar, desligar, acelerar, frear e exibir informações do veículo.

## 📋 Objetivo

Este repositório foi criado com o intuito de demonstrar habilidades com programação orientada a objetos (POO) em JavaScript. A ideia é simular de forma simples o comportamento de um carro.

## 📦 Funcionalidades

A classe `Carro` possui as seguintes funcionalidades:

- **Ligar o carro** (`ligar`)
- **Desligar o carro** (`desligar`)
- **Acelerar** (`acelerar`)
- **Frear** (`frear`)
- **Exibir informações do carro** (`mostrarInformacoes`)
- **Exibir velocidade atual** (`mostrarVelocidade`)

## 🚀 Exemplo de uso

```javascript
let carro01 = new Carro("Focus", "Ford", 2010);

carro01.ligar();             // Liga o carro
carro01.acelerar();          // Acelera 10 km/h
carro01.acelerar();          // Acelera mais 10 km/h
carro01.frear();             // Freia 10 km/h
carro01.mostrarInformacoes(); // Exibe modelo, marca, ano e velocidade
carro01.desligar();          // Desliga o carro
