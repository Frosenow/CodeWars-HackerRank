var Vector = function (components) {
  this.vec = components; 
  
  this.equals = function(b) {
    if(!this.checkLength(b)){
      return false
    } else {
      for(let i = 0; i < b.vec.length; i++){
        if(this.vec[i] !== b.vec[i])
          return false; 
      }
    }
    return true; 
  }
  
  this.checkLength = function(b) {
    return this.vec.length == b.vec.length 
  }
  
  this.toString = function(){
    return `(${this.vec.join(',')})`
  }
  
  this.add = function(b){
    if(this.checkLength(b)){
      const output =  this.vec.map((elem, idx) => elem + b.vec[idx])
      return new Vector(output); 
    } else {
      throw Error('Vectors must have the same length')
    }
  }
  
  this.subtract = function(b) {
    if (this.checkLength(b)) { 
      const output = this.vec.map((elem, idx) => elem - b.vec[idx])
      return new Vector(output) 
    } else {
      throw Error('Vectors must have the same length')
    }
  }

  
  this.dot = function(b) {
    if(this.checkLength(b)){
      return this.vec.reduce((acc, cv, idx) => acc + cv*b.vec[idx], 0)
    } else {
      throw new Error('Vectors must have the same length')
    }
  }
  
  this.norm = function() {
    return Math.sqrt(this.vec.reduce((acc, cv) => acc + cv ** 2))
  }
};
