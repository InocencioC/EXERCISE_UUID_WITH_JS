// Objectivo, é construir uma função para gerar vários UUID(Universally unique identifier)

function geradorUuid() {
    let ahora = new Date().getTime();

    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let aleatorio = (ahora + Math.random() * 16) % 16 | 0;
    ahora = Math.floor(ahora / 16);

        return (c == 'x' ? aleatorio : (aleatorio & 0x3 | 0x8)).toString(16);
    });
    
    return uuid;
 }
    for(let i = 1; i <= 10; ++i) {
        console.log(geradorUuid());
    }
