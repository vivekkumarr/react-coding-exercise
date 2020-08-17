import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  let props: any;

  beforeEach(() => {
    props =  {
      location: { state: {
        itemId: 123
      }},
    };
  })
  it('Check App Component', () => {
    props.location.state = undefined;
    const wrapper = shallow(<App location={props.location} />);
    wrapper.props = {
      location: { state: {
        itemId: 123
      }},
    };
    expect(wrapper).toMatchSnapshot();
  });
});
