import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Filter, {FilterProps} from './';

describe('renders Filter component', () => {
    const props: FilterProps = {
        productNameFilter: 'Product name',
        brokerFilter: 'Broker',
        setProductNameFilter: jest.fn(),
        setBrokerFilter: jest.fn(),
        brokersList: ['Broker', 'Broker 1', 'Broker 2'],
        sideFilter: false,
        setSideFilter: jest.fn(),
        setTradePriceFilter: jest.fn(),
        tradePriceFilter: '100',
    };

    let baseElement: any;
    let inputs: any;

    beforeEach(() => {
        baseElement = render(<Filter {...props} />).baseElement;
        inputs = baseElement.querySelectorAll('input');
        jest.clearAllMocks();
    });


    it('Should render product name input', () => {
        expect(inputs[0]).toHaveValue('Product name');
    });

    it('Should handle product name change event', () => {
        fireEvent.change(inputs[0], {target: {value: 'Value'}});
        expect(props.setProductNameFilter).toHaveBeenCalledWith('Value');
    });

    it('Should render product broker input', () => {
        expect(inputs[1]).toHaveValue('Broker');
    });

    // it('Should handle product name change event', async () => {
    // fireEvent.click(baseElement.querySelector('.MuiSelect-select'));
    // await act(async () => {
    //   await flushPromises();
    // });
    // expect(screen.getByText('Broker 1')).toBeInTheDocument();
    // expect(props.setProductNameFilter).toHaveBeenCalledWith('Value');
    // });

    it('Should render side switch', () => {
        expect(inputs[2]).not.toBeChecked();
    });

    it('Should handle side switch change event', () => {
        fireEvent.click(inputs[2]);
        expect(props.setSideFilter).toHaveBeenCalledWith(true);
    });

    it('Should render trade price input', () => {
        expect(inputs[3]).toHaveValue('100');
    });

    it('Should handle side switch change event', () => {
        fireEvent.change(inputs[3], {target: {value: '200'}});
        expect(props.setTradePriceFilter).toHaveBeenCalledWith('200');
    });
});
