const carro = {
    ligado: false,
    velocidade: 0,
    devolveStatusTexto: function() {
        return this.ligado ? 'ligado' : 'desligado'
    },
    imprimeStatusEVelocidade: function () {
        console.log(`Carro ${this.devolveStatusTexto()}, Velocidade: ${this.velocidade}.`);
    },
    ligar: function() {
        if (this.ligado) {
            console.log('Este carro ja esta ligado')
        } else {
            this.ligado = true;
            this.imprimeStatusEVelocidade()
        }     
    },
    desligar: function () {
        if( !this.ligado) {
            console.log('Este carro ja esta desligado')
        } else {
            if (this.velocidade > 0) {
                console.log('Não é possivel desligar um carro em movimento')
                
            } else {
                this.ligado = false;
                this.velocidade = 0;
                this.imprimeStatusEVelocidade()
            }
        }
    },
    acelerar: function() {
        if (!this.ligado) {
            console.log('Não é possivel acelerar um carro desligado');
        } else {
            this.velocidade += 10;
            this.imprimeStatusEVelocidade()
        }
    },
    desacelerar: function(){
        if(!this.ligado) {
            console.log('Não é possivel desacelerar um carro desligado');
        } else {
            this.velocidade -= 10
            this.imprimeStatusEVelocidade()
        }
    }
}
