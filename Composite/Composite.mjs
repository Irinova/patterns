export class Composite {
 constructor(arrOfComponents) {
  this.components = arrOfComponents
 }
 getCheckedQuantity() {
  document.querySelector('#quantity').innerHTML = this.components.reduce((counter, obj) => {
   if (obj.getIsChosen()) counter += 1
   return counter;
  }, 0)
 }
}
