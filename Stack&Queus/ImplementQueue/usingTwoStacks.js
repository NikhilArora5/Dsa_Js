
var MyQueue = function () {
    //in s1 stack stored in reverse queue order
    this.s1 = []

    //in s2 stack stored in queue order
    this.s2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    //push operations happen in s1

    this.s1.push(x)

};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let isS2Empty = this.s2.length == 0

    //if empty and we have to do pop means we first need to push all s1 to s2 
    // to have the elements in s2 in queue order and then do pop to return front

    // so we run a loop till n and push in s2

    if (isS2Empty) {
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }

        //now pop and return the top of s1

        return this.s2.pop()
    } else {
        //else if we already have elements in s2 as they are in quesu order retunt the front
        //using pop

        return this.s2.pop()
    }


};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    let isS2Empty = this.s2.length == 0

    //if empty and we have to do pop means we first need to push all s1 to s2 
    // to have the elements in s2 in queue order and then do pop to return front

    // so we run a loop till n and push in s2

    if (isS2Empty) {
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }

        //now we dont remove we just  return the front of queue of s1 usig stack top/peek method

        return this.s2[this.s2.length - 1]
    } else {
        //else if we already have elements in s2 as they are in quesu order retunt the front
        //using the stack top/sek operation we return the front

        return this.s2[this.s2.length - 1]
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s1.length + this.s2.length == 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */