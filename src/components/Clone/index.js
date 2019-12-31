const test = {
    a: 1,
    b: [
        {a: 1},
        2
    ]
}

/**
 * O(n^2) 深拷贝json数据，解决递归栈溢出
 * //
 * //深度优先遍历树，copy json数据
 */

function cloneLoop(data) {
    if (typeof data !== 'object'){
        return data
    }
    const root = {
      
    };
    const loopList = []

    loopList.push({ 
       parent: root,
       key: "result",
       child: data
    })

 
    while ( loopList.length ) { 
        const node = loopList.pop();
        const {parent, key, child} = node;

        const isArray = Array.isArray(child)
        let res = isArray ? [] : {} 
        parent[key] = res;   
        for(let k in child) {
            if (typeof child[k] === 'object') {
                loopList.push({
                    parent: res,
                    key: k,
                    child: child[k]
                })
            } else {
                res[k] = child[k]
            }
        }

    }

    return root.result
}

console.log(cloneLoop(test))