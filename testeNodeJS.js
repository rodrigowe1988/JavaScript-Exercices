var name = "Rodrigo";
console.log(123, "Meu nome é " + name);

function retornando() {
    if(this.name == "Rodrigo") {
        return "meu xará";
    }
}

retornando();