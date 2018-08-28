import {
  shallow, render, mount, configure
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// require('dotenv').config();

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
