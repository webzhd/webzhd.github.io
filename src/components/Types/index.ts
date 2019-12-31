/**
 * typeof
 * 缺点 无法分清 object和array
 */

 /**
  * instanceof
  * 用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
  * 没有继承关系
  * Arry是继承于Object的 [] instanceof Array === true; [] instanceof Object === true，一次判断不出是否为object
  * 不能判断原始数据类型
  */

/**
 * 判断类型最靠谱的方法Object.prototype.toString 获取this对象的[[Class]]属性的值.
 * 通过call改变this来获取
 * 
 * @param variable 
 */
export default function p(variable: any) {
    console.time("判断类型")
    const typeString = Object.prototype.toString.call(variable);
    switch (typeString) {
        case "[object Null]":
        console.timeEnd("判断类型")
            return "null"
        case "[object Array]":
        console.timeEnd("判断类型")
            return "array"
        case "[object Object]":
        console.timeEnd("判断类型")
            return "object"
        case "[object Number]":
        console.timeEnd("判断类型")
            return "number"
        case "[object String]":
        console.timeEnd("判断类型")
            return "string"
        case "[object Boolean]":
        console.timeEnd("判断类型")
            return "boolean"
        case "[object Undefined]":
        console.timeEnd("判断类型")
            return "undefined"
    }
}

/**
 * 利用构造方法来判断类型
 * variable.constructor返回构造方法
 * @param variable 
 */

function cstor(variable: any) {
    console.time("判断类型")
    if (variable === null) {
        console.timeEnd("判断类型")
        return "null"
    } else if (variable === undefined) {
        console.timeEnd("判断类型")
        return "undefined"
    } else {
        const cst: any = variable.constructor;
        switch (cst) {
            case Number:
                console.timeEnd("判断类型")
                return 'number'
            case String:
                console.timeEnd("判断类型")
                return 'string'
            case Boolean:
                console.timeEnd("判断类型")
                return 'boolean'
            case Array:
                console.timeEnd("判断类型")
                return 'array'
            case Object:
                console.timeEnd("判断类型")
                return 'object'
        }
    }
}