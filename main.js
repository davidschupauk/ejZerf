
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
        console.log("Se creó el archivo " + this.fileName + " En la ruta " + this.rutaArchivo)
        arrayDirectorioActual.push(this.fileName)
        directorio.set(this.rutaActual, arrayDirectorioActual)
    }
    
    ls(){
        directorio.get(this.rutaActual)
        console.log("Se muestra en consola todos los archivos en este ultimo directorio")
        for(let nombre of directorio.values()){
            console.log(nombre)
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
let arrayDirectorioActual = []

let miSistema= new Sistema("..", "..", "..", "", "", [])

miSistema.rutaAnalizada = prompt("Ingrese la ruta deseada")
miSistema.rutaActual = miSistema.cd(miSistema.rutaAnalizada)

miSistema.rutaAnalizada = prompt("Ingrese la ruta deseada")
miSistema.rutaActual = miSistema.cd(miSistema.rutaAnalizada)


miSistema.fileName = prompt("Ingrese el nombre del archivo a crear")
miSistema.touch(miSistema.fileName)

miSistema.fileName = prompt("Ingrese el nombre del archivo a crear")
miSistema.touch(miSistema.fileName)

miSistema.fileName = prompt("Ingrese el nombre del archivo a crear")
miSistema.touch(miSistema.fileName)

miSistema.pwd()
miSistema.ls()

miSistema.folderName = prompt("Ingrese el nombre de la carpeta a crear")
miSistema.mkdir(miSistema.folderName)

