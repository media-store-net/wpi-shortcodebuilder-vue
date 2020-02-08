export default class Button {
  constructor (id, title, text, withInput, component = { name: '', cmpPath: '' }) {
    this.id = id
    this.title = title
    this.text = text
    this.withInput = withInput
    this.component = component
  }
}
