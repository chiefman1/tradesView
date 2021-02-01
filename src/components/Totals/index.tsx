import {FC} from 'react';
import './index.css';

export interface TotalsProps {
    total: number;
    average: number;
}

export const Totals: FC<TotalsProps> = ({total, average}) => (
    <div className="totals">
        <div className="totals__col">
            Total: <span className="totals__value">{total.toFixed(3)}</span>
        </div>
        <div className="totals__col">
            Average: <span className="totals__value">{average.toFixed(3)}</span>
        </div>
    </div>
);

export default Totals;
