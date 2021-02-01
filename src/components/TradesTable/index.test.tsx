import React from 'react';
import {render, screen} from '@testing-library/react';
import TradesTable, {TradesTableProps} from './';

describe('renders TradesTable component', () => {
    const props: TradesTableProps = {
        data: [{
            "id": 2075005,
            "child_trade_set": [
                {
                    "id": 2851404,
                    "trade_display_volume": "10.00000000",
                    "lot_size": "standard",
                    "price": "310.25000000",
                    "lot_quantity": 10,
                    "side": "buy",
                    "start_date": "2019-10-01",
                    "end_date": "2019-10-31",
                    "brokerage_multiplier": 1
                }
            ],
            "lot_unit_name": "kt fuel",
            "broker_name": "Amerex",
            "trader_name": null,
            "book_name": "Fuel",
            "product_name": "3.5% Barges Rot",
            "exchange_name": "ice",
            "source_book_name": null,
            "cancelled": false,
            "matched_trade": null,
            "manual": true,
            "lot_quantity_spread": 0,
            "trade_date": "2019-09-19",
            "exchange_trade_id": null,
            "tas": false,
            "tap": false,
            "rollon_settlement_period": null,
            "screen": false,
            "time_created": "2019-09-09T06:42:47.704217Z",
            "isin": null,
            "trade_type": "block",
            "calendar_period": "monthly",
            "trade_display_volume": "10.00000000",
            "trade_brokerage_multiplier": 1,
            "matched": false,
            "start_date_spread": null,
            "end_date_spread": null,
            "start_date": "2019-10-01",
            "end_date": "2019-10-31",
            "side": "buy",
            "spread": false,
            "trade_price": "310.25000000"
        }] as any
    };

    let baseElement: any;

    beforeEach(() => {
        baseElement = render(<TradesTable {...props} />).baseElement;
        jest.clearAllMocks();
    });


    it('Should render table rows correctly', () => {
        expect(baseElement.querySelectorAll('tr')).toHaveLength(2);
        expect(screen.getByText('Fuel')).toBeInTheDocument();
        expect(screen.getByText('Amerex')).toBeInTheDocument();
        expect(baseElement.querySelector('[type="checkbox"]')).not.toBeChecked();
        expect(screen.getByText('31/10/2019')).toBeInTheDocument();
        expect(baseElement.querySelectorAll('[type="checkbox"]')[1]).not.toBeChecked();
        expect(screen.getByText('3.5% Barges Rot')).toBeInTheDocument();
        expect(screen.getByText('buy')).toBeInTheDocument();
        expect(screen.getByText('01/10/2019')).toBeInTheDocument();
        expect(screen.getByText('07:42:47')).toBeInTheDocument();
        expect(screen.getByText('19/09/2019')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText('310.25')).toBeInTheDocument();
    });
});
