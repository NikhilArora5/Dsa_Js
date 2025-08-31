//stack operations

var MyStack = function() {
    this.main=[]
    this.temp=[]
   
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.main.push(x)
};

MyStack.prototype.print = function(x) {
    console.log(this.main)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let size=this.main.length
    console.log("size",size)
    for(let i=0;i<size-1;i++){
       let front= this.main.shift()
       this.temp.push(front)
    }

    //remove the last elememt frontof stack
   let result= this.main.shift()

    //swap main and temp

    let main=this.temp
    this.temp=this.main
    this.main=main
    return result


};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
     let size=this.main.length
   
    for(let i=0;i<size-1;i++){
       let front= this.main.shift()
       this.temp.push(front)
    }

    //remove the last elememt front of stack
    const top=this.main.shift()
   
    this.temp.push(top)



    //swap main and temp

    let main=this.temp
    this.temp=this.main
    this.main=main

    return top
};

MyStack.prototype.getSize = function() {
    return this.main.length
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {

    return this.main.length?true:false
    
};



