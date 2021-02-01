import React from 'react';
import {render, screen} from '@testing-library/react';
import Totals, {TotalsProps} from './';

describe('renders Totals component', () => {
    const props: TotalsProps = {
        total: 256.12346,
        average: 123.123456
    };

    let baseElement: any;

    beforeEach(() => {
        baseElement = render(<Totals {...props} />).baseElement;
        jest.clearAllMocks();
    });


    it('Should render totals formatted', () => {
        expect(screen.getByText('256.123')).toBeInTheDocument();
        expect(screen.getByText('123.123')).toBeInTheDocument();
    });
});
