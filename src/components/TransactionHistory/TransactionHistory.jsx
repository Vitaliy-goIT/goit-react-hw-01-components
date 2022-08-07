import PropTypes from 'prop-types';
import {
  Table,
  THead,
  THeadRow,
  TRow,
  TData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <THead>
        <TRow>
          <THeadRow>Type</THeadRow>
          <THeadRow>Amount</THeadRow>
          <THeadRow>Currency</THeadRow>
        </TRow>
      </THead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TRow key={id}>
              <TData>{type}</TData>
              <TData>{amount}</TData>
              <TData>{currency}</TData>
            </TRow>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
