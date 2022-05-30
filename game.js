 let stand = ""
 let nombreUsuario = ""
 let reconocimiento
 let condicion = true
 let daño
 let dañoEnemigo
 const estadisticas = {
     mana: 0,
     ataque: 0,
     defensa: 0,
 }
 const standEnemigo = {
     mana: 170,
     ataque: 16,
     defensa:12
 }

 function fin(){
    
    if(estadisticas.mana<=0){
        alert("Has sido derrotado");
        Deno.exit(1)
    }
    else{
        alert("Felicitaciones! derrotaste al usuario de stand enemigo")
           
    }
 }

function lucha(){
       do{
            daño = estadisticas.ataque - standEnemigo.defensa
            dañoEnemigo = standEnemigo.ataque - estadisticas.defensa
            
            if(daño>dañoEnemigo) {

                standEnemigo.mana -= daño

            }
            else if(daño<dañoEnemigo) {
                
                estadisticas.mana -= dañoEnemigo

            }

            console.log(`Mana  ${estadisticas.mana}`)
            console.log(`Mana de usuario enemigo  ${standEnemigo.mana}`)
        
        } while(estadisticas.mana >0 && standEnemigo.mana > 0)
        fin()
}


 function inicio(){

    alert("¿Listo para para comenzar la aventura?")

    do{
        nombreUsuario = prompt("¿Cuál es tu nombre, aventurero?")

        reconocimiento = prompt(`${nombreUsuario}?, escuché bien tu nombre? Respónde "si"/"no"`).toLowerCase()

        switch(reconocimiento){
            case "si":
                alert(`con que ${nombreUsuario}, muy bien, pues prepárate para la aventura!`)
                condicion = false
                break;
            case "no":
                alert("¿Podría repetírmelo?")
                break;
            default:
                prompt("No has respondido a la pregunta...")
                break;
        }
    } while(condicion);

}

function personajes(){

    do{
        reconocimiento = prompt("Antes de avanzar, elige al Stand que te va a acompañar en tu viaje... \n 1.StarPlatinum: 300 mana, 20 ataque, 20 defensa \n 2.TheWorld: 295 mana, 19 ataque, 18 defensa \n 3. GoldenExperience: 280 mana, 15 ataque, 20 defensa").toLowerCase().trim()
        
        switch(reconocimiento){
            case "1":
                stand = "StarPlatinum"
                estadisticas.mana = 300
                estadisticas.ataque = 20
                estadisticas.defensa = 20
                alert(`Así que ${stand}, suerte en tu viaje!`)
                condicion =false
                break;
            case "2":
                stand = "TheWorld"
                estadisticas.mana = 295
                estadisticas.ataque = 19
                estadisticas.defensa = 18
                alert(`Así que ${stand}, suerte en tu viaje!`)
                condicion = false
                break;
            case "3":
                stand = "GoldenExperience"
                estadisticas.mana = 280
                estadisticas.ataque = 15
                estadisticas.defensa = 20
                alert(`Así que ${stand}, suerte en tu viaje!`)
                condicion = false
                break;
            default:
                alert("No elegite ninguno de los Stands propuestos")
                condicion = true
                break;
        }
    }while(condicion);
    console.log(stand)
    console.log(estadisticas)

}

function primerEscenario(){
    alert ("En la isla Markham reinaba el terror por la presencia de un ser oscuro que se alimentaba con la sangre de los isleños.")
    alert ("El ser había sido encontrado dormido en un ataúd en el fondo del oceano")
    alert ("unos pescadores lo encontraron y lo condujeron hacia la isla.")
    alert ("Desde entonces los habitantes de Markham fueron desapareciendo uno tras otro y sus cuerpos aparecían drenados")
    alert("Con el pasar de los días, el ser oscuro convirtió a algunos de los aldeanos en sus sirvientes")
    alert("Ofreciéndoles poderes sobrenaturales")
    alert("Pero un día una anciana sacerdotiza profetizó la llegada de un guerrero capaz de acabar con la maldad")
    alert("y ese día... ")
    alert("...ha llegado...")
    alert (`Te hemos estado esperando  ${nombreUsuario},`)
    alert ("Soy Kaleb, el vigía del muelle, la anciana profetizó tu llegada")
    alert ("Kaleb te conduce hacia una cueva donde se oculta la sacerdotiza del pueblo")
    alert("te paras frente a ella y observas su aspecto decrépito") 
    alert("El demonio se encuentra en lo que queda de la posada del conde.")
    alert ("en la cima de la colina...")
    alert("Para terminar con su maldad debes acabar con él")
    alert("acércate, despertaré el poder que hay en ti...")
    alert("La anciana atraviesa tu corazón con una daga de aspecto peculiar")
    alert("te asustas, pero no sientes dolor y comienzas a ver que algo se desprende de tu interior...")
    alert("cierras tus ojos porque el destello te daña la vista")
    alert(`abres los ojos y delante de ti está ${stand}, la representación de tu alma`)
    alert("Ya estás listo. Esto que ves es tu Stand, con él serás capaz de  vencer al enemigo")
    alert("pero ten cuidado, ellos también poseen este poder.")
    alert("Sales de la cueva y te diriges hacia la posada del conde, donde habita el demonio")


    alert("Antes de llegar, al cruzar un puente, aparece un enemigo")
    alert("Recuerdas las palabras de la anciana de que si matas al jefe, sus sirvientes perderán sus poderes")
    alert("y que el vínculo con tu Stand todavía no es muy fuerte")

    do {  
        reconocimiento = prompt("Toma una decision \n 1.Atacarlo \n 2.Esperar \n 3.Buscar otro camino \n 4. Escapar")
                       
        switch (reconocimiento) {
            case "1":
                alert("Te enfrentas al enemigo")
                alert("Lo vences, pero resultas gravemente herido")
                estadisticas.mana -= 100
                estadisticas.ataque +=1
                estadisticas.defensa -= 5
                console.log("Has fortalecido tu ataque y defensa, pero fuiste herido, lo que te redujo la vida.")
                console.log(estadisticas)
                condicion =false
                break;

            case "2":
                alert("Esperas para ver qué hace tu rival, pero él sigue ahí sin inmutarse")
                condicion = true
                break;

            case "3":
                alert("Decides no pelear y guardar fuerzas para enfrentarte a él")
                estadisticas.ataque += 1
                estadisticas.defensa +=1
                console.log(estadisticas)
                condicion = false
                break;
    
            case "4":
               alert("No seas cobarde, enfrenta tu destino")
               condicion = true               
               break;
               
            default:
                prompt("No elegiste ninguna opción")
                condicion = true
                break;
        }       
    } while (condicion);   
    
}

function segundoEscenario(){
    alert("Te encuentras dentro de la posada")
    alert("El vínculo con tu Stand está completo")
    do {  
        reconocimiento = prompt("Toma una decision \n 1.Lo sorpendes por la espalda \n 2.Llamas su atención \n 3.Intentas pasar sigilosamente")
    
        switch (reconocimiento) {
            case "1":
            alert("Tu Stand lo golpea por la espalda dejándolo aturdido, pero igual se defiende...")
            console.log("Tu ataque sorpresa deja secuelas en el enemigo")
            standEnemigo.mana -= 120
            console.log(standEnemigo)
            console.log("Tus estadísticas en este enfrentamiento son las siguientes: ")
            console.log(estadisticas)
            lucha()   
            estadisticas.ataque += 5
            console.log("estadísticas luego de la batalla: ")
            console.log(estadisticas)
            condicion = false
            break;

            case "2":
            alert("Tu orgullo de guerrero impide que aproveches la oportunidad y decides alertarlo antes de empezar la batalla")
            console.log("Las estadísticas del enemigo son: ")
            console.log(standEnemigo)
            console.log("Tus estadísticas son: ")
            console.log(estadisticas)
            lucha()
            estadisticas.ataque += 10
            estadisticas.mana -= 20
            console.log("estadísticas luego de la batalla: ")
            console.log(estadisticas)
            condicion = false
            break;

            case "3":
            alert("Intentas escabullirte pero echas algo al suelo y el enemigo y te ataca por la espalda")
            estadisticas.defensa -=10
            estadisticas.mana -= 100
            console.log("Las estadísticas del enemigo son: ")
            console.log(standEnemigo)
            console.log("Tus estadísticas son: ")
            console.log(estadisticas)
            lucha()
            estadisticas.defensa -= 5
            estadisticas.ataque += 3
            console.log("estadísticas luego de la batalla")
            console.log(estadisticas)
            condicion = false
            break;

            default:
            reconocimiento = prompt("no elegiste ninguna opción")
            condicion = true
            break;
        } 
    } while(condicion);

   

}

function tercerEscenario(){

    alert("Exploras los corredores de la posada en busca del jefe, pero te encuentras con una habitación en la que hay una jaula")
    alert("Dentro de ella se encuentra un hombre de aspecto sospechoso")
    alert("Podría ser un vampiro")
    alert("Te pide ayuda para escapar, pero no sabes si se trata de una trampa")
    

    do { 

        reconocimiento = prompt("Toma una decision \n 1.Liberarlo \n 2.Seguir tu camino")
    
        switch (reconocimiento) {
            case "1":
                alert("Rompes el candado de la jaula")
                alert("El hombre sale y te lo agradece")
                alert("Como recompensa te ofrece una poción para sanar tus heridas")
                estadisticas.mana +=100
                console.log("Tus estadísticas al tomar la poción son: ")
                console.log(estadisticas)
                condicion = false
                break;

            case "2":
                alert("Lo ignoras y sigues explorando con dolor en tus heridas")
                condicion = false
                break;

            default:
                prompt("No elegiste ninguna opción")
                condicion = true
                break;
            }
            standEnemigo.mana += 351
            standEnemigo.ataque += 5
            standEnemigo.defensa += 3
    } while (condicion);

    

}

function ultimoEscenario(){
    alert("Llegas al final del corredor")
    alert("Abres la puerta y te encuentras con el ser oscuro observándote")
    alert("Él se ve sorprendido por hasta dónde has llegado")
    alert("Te ofrece unirte a él y ser uno más de sus siervos")
    alert("Rechazas la propuesta e intercambias miradas con tu Stand")
    alert("El jefe demonio se enfuerece")
    alert("Te dispones a la batalla final...")
    console.log("Tus estadísticas son: ")
    console.log(estadisticas)
    console.log("Las estadísticas del jefe final son: ")
    console.log(standEnemigo)    
    lucha()
    
}

function juego(){
inicio()
personajes()
primerEscenario()
segundoEscenario()
tercerEscenario()
ultimoEscenario()
alert("¡Felicitaciones, salvaste a Markham de la muerte!")
}

juego()