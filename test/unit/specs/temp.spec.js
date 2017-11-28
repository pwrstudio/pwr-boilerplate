import Vue from 'vue'
import temp from 'src/components/temp'

describe('temp.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(temp)
    })
    expect(vm.$el.querySelector('.message__text').textContent).to.equal('PWR')
  })
})
