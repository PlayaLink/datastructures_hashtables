class HashTable {
  constructor(){
    this.table = new Array(250);
  }
  add(input){
    this.table[this.hash(input, 250)] = input;
  }
  contains(input){
    return !!this.table[this.hash(input, 250)];
  }
  hash(input, max){
    let num = 0;
    for(var i = 0; i < input.length; i++){
      num += input.charCodeAt(i) * i;
    }
    return num % max;
  }
}
