class Table {
 constructor() {
  this.isChosen = false
 }
 setTableChosenOption() {
  console.log('some logic...')
 }
 setIsChosen(isChosen) {
  this.isChosen = isChosen
 }
 getIsChosen() {
  return this.isChosen
 }
}

export const table = new Table()
