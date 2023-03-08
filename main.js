
class Sistema{
    constructor(rutaActual, rutaPrevia, rutaAnalizada, fileName, rutaArchivo, folderName){
        this.rutaActual = rutaActual
        this.rutaPrevia = rutaPrevia
        this.rutaAnalizada = rutaAnalizada
        this.fileName = fileName
        this.rutaArchivo = rutaArchivo
        this.folderName = folderName
        
    }
    
    cd(dirName){
        this.rutaAnalizada = dirName
        if(this.rutaAnalizada != ".."){
            this.rutaPrevia = this.rutaActual
            this.rutaActual = this.rutaAnalizada
            return this.rutaActual
        }else{
            this.rutaPrevia = this.rutaActual
            return this.rutaPrevia
        }
    }
    
    touch(fileName){
        this.rutaArchivo = this.rutaActual
        this.fileName = fileName
        if(directorio.has(this.rutaActual)){
            let listado = directorio.get(this.rutaActual)
            if(listado.includes(this.fileName)){
                console.log("Ya existe un archivo con el nombre " + this.fileName + " en esta ruta")
            }else{
                console.log("Se creó el archivo " + this.fileName + " En la ruta " + this.rutaArchivo)
                directorio.get(this.rutaActual).push(fileName) 
            }
        }else{
            directorio.set(this.rutaActual, [])
            directorio.get(this.rutaActual).push(fileName)
        }
    }
    
    ls(){
        let listado = directorio.get(this.rutaActual)
        if(listado != undefined){
            console.log("Se muestra en consola todos los archivos en este ultimo directorio " + this.rutaActual)
            for(let nombre of listado){
                console.log(nombre)
            }
        }else{
            console.log("No hay archivos dentro del directorio actual.")
        }
    }

    mkdir(dirName){
        console.log("La carpeta " + dirName + " fue creada en " + this.rutaActual)
    }
    
    pwd(){
        console.log("Usted se encuentra en la ruta: " + this.rutaActual)
    }

}

let directorio = new Map();
let miSistema= new Sistema("..", "..", "..", "", "", [])


while(true){
    let input = prompt("Ingrese la funcion a ejecutar")
    switch(input){
        case "cd":
            miSistema.rutaAnalizada = prompt("Ingrese la ruta deseada")
            miSistema.rutaActual = miSistema.cd(miSistema.rutaAnalizada)
            console.log("se encuentra en " + miSistema.rutaActual)
            break;
        case "touch":
            miSistema.fileName = prompt("Ingrese el nombre del archivo a crear")
            miSistema.touch(miSistema.fileName)
            break;
        case "ls":
            miSistema.ls()
            break;
        case "mkdir":
            miSistema.folderName = prompt("Ingrese el nombre de la carpeta a crear")
            miSistema.mkdir(miSistema.folderName)
            break;
        case "pwd":
            miSistema.pwd()
            break;
    }   
}