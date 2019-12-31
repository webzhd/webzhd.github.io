/**
 * 手写promise
 */

 class Pro {
     constructor(executor) {
         this.status = 'pedding' // pedding rejected resolved
         this.value = undefined
         this.resson = undefined
         executor(this.resolve, this.reject)
     }
     resolve(data) {
        if(this.status === 'pedding') {
            this.status = 'resolved'
        }
     }
     reject(data) {
        if(this.status === 'pedding') {
            this.status = 'rejected'
        }
     }
     then(onFulfilled, onRejected) {
        if(this.status === 'resolved') {
            onFulfilled(this.value)
        }else if(this.status === 'rejected') {
            onRejected(this.resson)
        }else if(this.status === 'pedding') {

        }

     }
 }