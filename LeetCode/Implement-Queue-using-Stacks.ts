class MyQueue {

    private stack1: number[];
    private stack2: number[];
    private front: number;  

    constructor() {
        this.stack1 = [];  
        this.stack2 = [];    
    }

    push(x: number): void {
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop())
        }

        this.stack1.push(x) 

        while(this.stack2.length > 0){
            this.stack1.push(this.stack2.pop())
        }
    }

    pop(): number {
        if(!this.empty()){
            return this.stack1.pop(); 
        } else {
            throw new Error("Stack is empty")
        }

    }

    peek(): number {
        return this.stack1[this.stack1.length - 1]
    }

    empty(): boolean {
        return this.stack1.length === 0; 
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */