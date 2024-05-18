class calculador {
   constructor(prenum, memory) {
    this.nums = document.getElementById('current-operetion');
    this.memory = document.getElementById('previous-operation');
    this.memory = 0 
   }
   add(prenum, memory){
    return prenum + memory
   }
   sub(prenum, memory){
    return prenum + memory
   }
   mult(prenum, memory){
    return prenum + memory
   }
}

const buttons = document.getElementsByClassName('num')
