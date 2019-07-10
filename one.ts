function createArray(length: number, value: any): Array<any>{
    let result = [];
    for (let i = 0; i < length - 1; i++) {
        result[i] = value;
    }
    return result;
}

let arr= createArray(3,'x');
console.log(arr);
