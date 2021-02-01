export interface Trade {
    id: number;
    child_trade_set: [
        {
            id: number;
            trade_display_volume: string;
            lot_size: string;
            price: string;
            lot_quantity: number;
            side: string;
            start_date: string;
            end_date: string;
            brokerage_multiplier: number;
        }
    ],
    lot_unit_name: string;
    broker_name: string;
    trader_name: object | string;
    book_name: string;
    product_name: string,
    exchange_name: string,
    source_book_name: object | string,
    cancelled: boolean,
    matched_trade: object | string,
    manual: true,
    lot_quantity_spread: number,
    trade_date: string,
    exchange_trade_id: number,
    tas: boolean,
    tap: boolean,
    rollon_settlement_period: object | string,
    screen: boolean,
    time_created: string,
    isin: object | string,
    trade_type: string,
    calendar_period: string,
    trade_display_volume: number,
    trade_brokerage_multiplier: number,
    matched: boolean,
    start_date_spread: object | string,
    end_date_spread: object | string,
    start_date: string,
    end_date: string,
    side: string,
    spread: boolean,
    trade_price: number
}
