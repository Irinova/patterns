class Lighting {
 constructor() {
  this.isChosen = false
 }
 setChosenOption() {
  console.log('some logic...')
 }
 setIsChosen(isChosen) {
  this.isChosen = isChosen
 }
 getIsChosen() {
  return this.isChosen
 }
}

export const lighting = new Lighting()
