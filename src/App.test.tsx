import React from 'react';
import {mount, shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import App from './App';

(global as any).fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(),
    })
);

describe('renders App', () => {
    let container: any;

    beforeEach(() => {
        container = mount(<App/>);
    });

    it('Should call fetch reques on mount', () => {
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('Should match snapshot', () => {
        expect(shallowToJson(shallow(<App/>))).toMatchSnapshot();
    })
});
