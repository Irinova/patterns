class Backsplash {
 constructor() {
  this.isChosen = false
 }
 someMethod() {
  console.log('some logic...')
 }
 setIsChosen(isChosen) {
  this.isChosen = isChosen
 }
 getIsChosen() {
  return this.isChosen
 }
}

export const backsplash = new Backsplash()
