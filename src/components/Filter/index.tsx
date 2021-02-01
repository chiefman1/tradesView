import {ChangeEvent, FC} from 'react';
import {FormControl, InputLabel, MenuItem, Select, Switch, TextField,} from '@material-ui/core';
import './index.css';

export interface FilterProps {
    productNameFilter: string;
    brokerFilter: string;
    setProductNameFilter: (filter: string) => void;
    setBrokerFilter: (filter: string) => void;
    brokersList: string[];
    sideFilter: boolean;
    setSideFilter: (state: boolean) => void;
    setTradePriceFilter: (filter: string) => void;
    tradePriceFilter: string;
}

export const Filter: FC<FilterProps> = ({
                                            productNameFilter,
                                            setProductNameFilter,
                                            brokerFilter,
                                            setBrokerFilter,
                                            brokersList,
                                            sideFilter,
                                            setSideFilter,
                                            setTradePriceFilter,
                                            tradePriceFilter,
                                        }) => {
    const onProductNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProductNameFilter(event.target.value);
    };

    const onBrokerChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
        setBrokerFilter(event.target.value as string);
    };

    const onSideFilterChange = () => setSideFilter(!sideFilter);

    const onTradePriceFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTradePriceFilter(event.target.value);
    };

    return (
        <div className="filters">
            <div className="filters__col">
                <TextField label="Product name" value={productNameFilter} onChange={onProductNameChange} fullWidth/>
            </div>
            <div className="filters__col">
                <FormControl fullWidth>
                    <InputLabel>Broker</InputLabel>
                    <Select
                        value={brokerFilter}
                        onChange={onBrokerChange}
                    >
                        {brokersList.map((item, id) => (
                            <MenuItem value={item} key={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className="filters__col">
                <div className="filters__switch">
                    <span className="filters__switch-label">Buy</span>
                    <Switch checked={sideFilter} onChange={onSideFilterChange}/>
                    <span className="filters__switch-label">Sell</span>
                </div>
            </div>
            <div className="filters__col">
                <TextField label="Trade price" value={tradePriceFilter} onChange={onTradePriceFilterChange} fullWidth/>
            </div>
        </div>
    );
};

export default Filter;
