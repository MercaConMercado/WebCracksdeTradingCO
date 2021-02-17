async function init () {
    const node = document.querySelector("#type-text")
    
    await sleep(1000)
    node.text = ""
    await node.type('Trading: ')
    
    while (true) {
      await node.type('FACIL!')
      await sleep(2000)
      await node.delete('FACIL!')
      await node.type('GANADOR!')
      await sleep(2000)
      await node.delete('GANADOR!')
      await node.type('MUCHO DINERO!')
      await sleep(2000)
      await node.delete('MUCHO DINERO!')
    }
  }
  
  
  // Source code 🚩
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get text () {
      return this.innerText
    }
    set text (value) {
      return this.innerHTML = value
    }
    
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.text += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.text = this.text.slice(0, this.text.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  
  init()
  