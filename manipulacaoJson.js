

//const { log } = require('console');
const fs = require('fs');

function lerAnimaisJson() {
    fs.readFile('./JSON/animais.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }
        console.log(data);
    });
}

//lerAnimaisJson();



function converterAnimais() {
    fs.readFile('./JSON/animais.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        } else {
           const animais = JSON.parse(data);
           console.log(animais);
        }
    });
}

//converterAnimais();

const animalNovo = {
    id: 4,
    nome: "Tigre de Naniwa",
    tipo: "Mamifero",
    habitat: "Montanhas de Naniwa",
}

const arquivoAnimais = './JSON/animais.json';

function adicionarAnimais(arquivoAnimais,animal) {
    fs.readFile(arquivoAnimais,'utf8', (err,data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }

        const jsonConvObjJs = JSON.parse(data);

        if (Array.isArray(jsonConvObjJs.animais)) {
            // Adicionando o novo animal ao array de animais
            jsonConvObjJs.animais.push(animal);
        } else {
            console.error('Esperado que obj.animais seja um array, mas não é.');
            return;
        }

        const objtConvertido = JSON.stringify(jsonConvObjJs,null,2);

        fs.writeFile(arquivoAnimais,objtConvertido,'utf-8',(err) => {
            if (err) {
                console.log("Não foi possível escrever no arquivo",err);
            } else {
                console.log("Animal adicionado com sucesso !!!");
            }
        })
        
    });
}

//adicionarAnimais(arquivoAnimais,animalNovo);
//lerAnimaisJson();

function modificaAnimais(arquivoAnimais,nomeAnimal) {
    fs.readFile(arquivoAnimais, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }
        const animaisObj = JSON.parse(data);
        let animalEncontrado = false;

        
        animaisObj.animais.forEach(animal => {
            if (animal.nome === nomeAnimal) {
                animal.habitat = "Floresta Amazônica";
                animalEncontrado = true;
            }
        });

        if (!animalEncontrado) { 
            console.log("Não foi possível encontrar o Animal");
            return;
        }
        
        const objtJsConvertido = JSON.stringify(animaisObj,null,2);
    
        fs.writeFile(arquivoAnimais,objtJsConvertido,'utf-8',(err) => {
            if (err) {
                console.log("Não foi possível escrever no arquivo",err);
            } else {
                console.log("Animal modificado com sucesso !!!");
            }
        })
    });


}

//modificaAnimais(arquivoAnimais,"Cobra");

function modificaAnimais(arquivoAnimais,nomeAnimal) {
    fs.readFile(arquivoAnimais, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }
        const animaisObj = JSON.parse(data);
    
        const animaisFiltrados = animaisObj.animais.filter(animal => animal.nome !== nomeAnimal);

       
        if (animaisObj.animais.length !== animaisFiltrados.length) {
            console.log("Animal excluído com sucesso !!!");
            animaisObj.animais = animaisFiltrados; 
        } else {
            console.log("Animal não encontrado.");
            return; // Sai da função se nenhum animal for excluído
        }
        
        const objtJsConvertido = JSON.stringify(animaisObj,null,2);
    
        fs.writeFile(arquivoAnimais,objtJsConvertido,'utf-8',(err) => {
            if (err) {
                console.log("Não foi possível escrever no arquivo",err);
            } else {
                console.log("Animal modificado com sucesso !!!");
            }
        })
    });

}

// modificaAnimais(arquivoAnimais,"Cobra");
lerAnimaisJson();