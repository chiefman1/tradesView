import {FC} from 'react';
import {Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@material-ui/core';
import {Trade} from '../../types';

export interface TradesTableProps {
    data: Trade[]
}

export const TradesTable: FC<TradesTableProps> = ({data}) => {
    const formatUnit = (u: number) => u > 9 ? u : `0${u}`;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);

        return `${formatUnit(date.getUTCDate())}/${formatUnit(date.getUTCMonth() + 1)}/${formatUnit(date.getUTCFullYear())}`;
    };

    const formatTime = (dateString: string) => {
        const date = new Date(dateString);

        return `${formatUnit(date.getHours())}:${formatUnit(date.getMinutes())}:${formatUnit(date.getSeconds())}`;
    };

    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Book name</TableCell>
                        <TableCell align="right">Broker</TableCell>
                        <TableCell align="right">Cancelled</TableCell>
                        <TableCell align="right">End date</TableCell>
                        <TableCell align="right">Matched</TableCell>
                        <TableCell align="right">Product name</TableCell>
                        <TableCell align="right">Side</TableCell>
                        <TableCell align="right">Start date</TableCell>
                        <TableCell align="right">Time created</TableCell>
                        <TableCell align="right">Trade date</TableCell>
                        <TableCell align="right">Trade display volume</TableCell>
                        <TableCell align="right">Trade price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((trade) => (
                        <TableRow key={trade.id}>
                            <TableCell>
                                {trade.book_name}
                            </TableCell>
                            <TableCell>
                                {trade.broker_name}
                            </TableCell>
                            <TableCell>
                                <Checkbox
                                    checked={trade.cancelled}
                                    disabled
                                />
                            </TableCell>
                            <TableCell>
                                {formatDate(trade.end_date)}
                            </TableCell>
                            <TableCell>
                                <Checkbox
                                    checked={trade.matched}
                                    disabled
                                />
                            </TableCell>
                            <TableCell>
                                {trade.product_name}
                            </TableCell>
                            <TableCell>
                                {trade.side}
                            </TableCell>
                            <TableCell>
                                {formatDate(trade.start_date)}
                            </TableCell>
                            <TableCell>
                                {formatTime(trade.time_created)}
                            </TableCell>
                            <TableCell>
                                {formatDate(trade.trade_date)}
                            </TableCell>
                            <TableCell>
                                {Math.round(trade.trade_display_volume)}
                            </TableCell>
                            <TableCell>
                                {Number(trade.trade_price).toFixed(2)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TradesTable;
