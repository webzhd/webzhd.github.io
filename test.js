Function.prototype.myCall = function (obj, ...arg){
    // console.log(this)
    // console.log(obj)
    obj.fn = this;
    obj.fn();
}

const test = {
    a: 1,
    fn: function() {
        console.log(this.a)
    }
}
const test2 = {
    a: 2
}

test.fn();

test.fn.myCall(test2);