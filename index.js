// Objectivo, é construir uma função para gerar vários UUID(Universally unique identifier)

function geradorUuid() {
    // Indiquei que está função pega a data e tempo em milisegundos
    let ahora = new Date().getTime();
    // Está variavel gera o uuid de forma aleatoria
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    // Calculei ahora + Math.random (é um valor aleatorio) e multipliquei por 16 e depois dividi por 16
        let aleatorio = (ahora + Math.random() * 16) % 16 | 0;
    ahora = Math.floor(ahora / 16);
    // Este é o retorno da função, primeiro perguntamos se c é igual a x, se é deixamos o valor obetido, caso contario ocorre outra operação.
        return (c == 'x' ? aleatorio : (aleatorio & 0x3 | 0x8)).toString(16);
    });
    // Retornei UUID
    return uuid;
 }
     
    for(let i = 1; i <= 10; ++i) {
        console.log(geradorUuid());
    }
