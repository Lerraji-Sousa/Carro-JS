class Carro {
    constructor(modelo, marca, ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.velocidade = 0;
        this.ligado = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log("O carro está ligado.");
        } else {
            console.log("O carro já está ligado.");
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            this.velocidade = 0; // Desliga e zera a velocidade
            console.log("O carro está desligado.");
        } else {
            console.log("O carro já está desligado.");
        }
    }

    acelerar() {
        if (this.ligado) {
            if (this.velocidade < 180) { // Limite de 180 km/h
                this.velocidade += 10;
                console.log(`Você acelerou 10 km/h.`);
                console.log(`A velocidade atual é ${this.velocidade} km/h.`);
            } else {
                console.log("Velocidade máxima alcançada!");
            }
        } else {
            console.log("O carro precisa estar ligado para acelerar.");
        }
    }

    frear() {
        if (this.ligado) {
            if (this.velocidade > 0) {
                this.velocidade -= 10;
                console.log(`Você freou 10 km/h.`);
                console.log(`A velocidade atual é ${this.velocidade} km/h.`);
            } else {
                console.log("O carro já está parado.");
            }
        } else {
            console.log("O carro precisa estar ligado para frear.");
        }
    }

    mostrarInformacoes() {
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Velocidade atual: ${this.velocidade} km/h`);
    }

    mostrarVelocidade() {
        console.log(`A velocidade atual do carro é ${this.velocidade} km/h.`);
    }
}

let carro01 = new Carro("Focus", "Ford", 2010);

carro01.ligar(); // Liga o carro
carro01.acelerar(); // Acelera o carro
carro01.acelerar(); // Acelera mais
carro01.frear(); // Freia o carro
carro01.mostrarInformacoes(); // Exibe as informações do carro
carro01.desligar(); // Desliga o carro
