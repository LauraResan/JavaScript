let num = [5, 8, 2, 9, 3]
num.push(1)


console.log(`Os valores do vetor são: ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort()
console.log(`O Vetor organizado de maneira crescente é ${num}`)

console.log("Outro teste !!DoIdO!!")

console.log(`Os valores logicos dentro desse vetor são:`)
    for(let pos=0; pos < num.length; pos++){
        console.log(`${num[pos]}`)
    }

    
//Ouuu você pode fazer..
console.log(`Os valores logicos dentro desse vetor são:`)
    for( let pos in num ){
        console.log(`${num[pos]}`)
    }

let oss = num.indexOf(8)
console.log(`O valor 8 esta na posição ${oss}`)