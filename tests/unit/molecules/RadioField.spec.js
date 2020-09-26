import RadioField from '@/components/molecules/form-control-elements/RadioField';
import {mount} from '@vue/test-utils';

const props = {
  id: 'id-test',
  name: 'name-test',
  value: 'value-test',
  label: 'label-test',
  checked: true
};

test('That the input id & the label for attribute matches', () => {
  const wrapper = mount(RadioField, {
    propsData: {
      ...props
    }
  });
  
  const label = wrapper.find('label');
  const input = wrapper.find('input');
  
  expect(label.element.getAttribute('for')).toBe(`labeled-by:${props.id}`);
  expect(input.element.id).toBe(`labeled-by:${props.id}`);
});

test('Checks that the value for the name attribute is coming thought', () => {
  const wrapper = mount(RadioField, {
    propsData: {
      ...props
    }
  });
  
  const input = wrapper.find('input');
  
  expect(input.element.name).toBe(props.name);
});

test('Checks that the value attribute is coming thought', () => {
  const wrapper = mount(RadioField, {
    propsData: {
      ...props
    }
  });
  
  const input = wrapper.find('input');
  
  expect(input.element.value).toBe(props.value);
});

test('Checks that the text for that label if coming thought', () => {
  const wrapper = mount(RadioField, {
    propsData: {
      ...props
    }
  });
  
  const label = wrapper.find('label');
  
  expect(label.element.textContent).toBe(props.label);
});

test('Checks that the checked attribute is being set correctly', () => {
  const wrapper = mount(RadioField, {
    propsData: {
      ...props
    }
  });
  
  const input = wrapper.find('input');
  
  expect(input.element.checked).toBeTruthy();
});
