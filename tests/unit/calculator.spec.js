import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  
  let wrapper;

  beforeEach( () => {
    wrapper = shallowMount(App)
  });
  
  it('should add', () => {
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  });
  
  it('should subtract', () => {
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  });
  
  it('should multiply', () => {
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  });
  
  it('should divide', () => {
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  });

  it('should concatenate multiple number button clicks', () => {
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick('1');
    wrapper.vm.numberClick('1');
    expect(wrapper.vm.runningTotal).to.equal(11)
  });
  
  it('should chain multiple operations together', () => {
    wrapper.vm.numberClick('9')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('9')
    wrapper.vm.operatorClick('-')
    wrapper.vm.numberClick('3')
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(15)
  });

  it('should clear the running total without affecting the calculation', () => {
    wrapper.vm.numberClick('9')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('9')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('9')
    wrapper.vm.clearClick()
    expect(wrapper.vm.runningTotal).to.equal(0)
    expect(wrapper.vm.previousOperator).to.equal('+')
    expect(wrapper.vm.previousTotal).to.equal(18)
  });
})
