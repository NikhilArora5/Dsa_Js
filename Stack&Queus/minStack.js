
var MinStack = function() {
    this.stack=[]
    this.minStack=[]
    this.min=null
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    //specifically checking for this.min==null as !this.min will clash with 0 value
    if(this.min==null || this.min>=val){
        this.min=val
        this.minStack.push(val)
    }
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let top=this.stack.pop()

    if(top==this.min){
        this.minStack.pop()
        let newMin=this.minStack[this.minStack.length-1]
        this.min=newMin
    }
   
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */