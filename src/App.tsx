import {useEffect, useMemo, useState} from 'react';
import TradesTable from './components/TradesTable';
import Filter from './components/Filter';
import Totals from './components/Totals';
import {Button, CircularProgress} from '@material-ui/core';
import {Trade} from './types';
import './App.css';

function App() {
    const [trades, setTrades] = useState<Trade[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [productNameFilter, setProductNameFilter] = useState('');
    const [brokerFilter, setBrokerFilter] = useState('');
    const [sideFilter, setSideFilter] = useState(false);
    const [tradePriceFilter, setTradePriceFilter] = useState('');
    const [isFiltersActive, setIsFiltersActive] = useState(false);

    const fetchTrades = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/trades');
            const parsedResponse = await response.json();
            setTrades(parsedResponse);
        } finally {
            setIsLoading(false);
        }
    };

    const filteredData = useMemo(() => {
        let filteredTrades = trades;

        if (productNameFilter) {
            filteredTrades = filteredTrades.filter(
                ({product_name}) => product_name.toLowerCase().includes(productNameFilter.toLowerCase()),
            );
        }

        if (brokerFilter) {
            filteredTrades = filteredTrades.filter(
                ({broker_name}) => broker_name === brokerFilter,
            );
        }

        if (tradePriceFilter) {
            filteredTrades = filteredTrades.filter(
                ({trade_price}) => trade_price.toString().includes(tradePriceFilter),
            );
        }

        filteredTrades = filteredTrades.filter(
            ({side}) => sideFilter ? side === 'sell' : side === 'buy',
        );

        return filteredTrades;
    }, [trades, productNameFilter, brokerFilter, sideFilter, tradePriceFilter]);

    const data = isFiltersActive ? filteredData : trades;

    const brokersList = useMemo(() => Array.from(new Set(
        trades.map(({broker_name}) => broker_name)
    )), [trades]);

    const totalPrice = useMemo(() => data.reduce((
        acc, {trade_price}) => acc + Number(trade_price), 0,
    ), [data]);

    const averagePrice = useMemo(() => (totalPrice / data.length) || 0, [totalPrice, data]);

    const onToggleFilters = () => setIsFiltersActive((isActive) => !isActive);

    useEffect(() => {
        fetchTrades();
    }, []);

    if (isLoading) {
        return (
            <CircularProgress/>
        );
    }

    if (!trades.length) {
        return (
            <div data-test="no-data-msg">No data...</div>
        );
    }

    return (
        <div className="app">
            <div className="app__filters">
                <div className="app__filters-bar">
                    <Filter
                        productNameFilter={productNameFilter}
                        setProductNameFilter={setProductNameFilter}
                        brokerFilter={brokerFilter}
                        setBrokerFilter={setBrokerFilter}
                        brokersList={brokersList}
                        sideFilter={sideFilter}
                        setSideFilter={setSideFilter}
                        tradePriceFilter={tradePriceFilter}
                        setTradePriceFilter={setTradePriceFilter}
                    />
                </div>
                <div className="app__filters-btn">
                    <Button onClick={onToggleFilters} variant={isFiltersActive ? 'contained' : 'outlined'}
                            color="primary">
                        {
                            isFiltersActive ? 'Filters on' : 'Filters off'
                        }
                    </Button>
                </div>
            </div>
            <Totals total={totalPrice} average={averagePrice}/>
            <TradesTable data={data}/>
        </div>
    );
}

export default App;
