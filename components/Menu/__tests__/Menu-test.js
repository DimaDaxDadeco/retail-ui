import {mount} from 'enzyme';
import React from 'react';

import Menu from '../Menu';
import MenuItem from '../../MenuItem/MenuItem';

describe('Menu', () => {
  it('calls existing refs of children when highlighted', () => {
    const refItem = jest.fn();
    const wrapper = mount(
      <Menu>
        <MenuItem ref={refItem} />
      </Menu>
    );
    const menu = wrapper.component.getInstance();

    // Highlight first item.
    menu.down();

    // 1. Called initially.
    // 2. Changed with a wrapper function. Previous function called with null.
    // 3. The wrapper function called.
    expect(refItem.mock.calls.length).toBe(3);
    expect(refItem.mock.calls[2][0]).toBeTruthy();
  });
});