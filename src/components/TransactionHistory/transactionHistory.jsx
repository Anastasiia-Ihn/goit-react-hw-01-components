import {
  TbodyTransactionHistory,
  TdElem,
  ThTitleElem,
  TheadTransactionHistory,
  Row,
  TransactionHistoryEl,
} from './transactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryEl>
      <TheadTransactionHistory>
        <Row>
          <ThTitleElem>Type</ThTitleElem>
          <ThTitleElem>Amount</ThTitleElem>
          <ThTitleElem>Currency</ThTitleElem>
        </Row>
      </TheadTransactionHistory>
      <TbodyTransactionHistory data={items}>
        {items.map(el => {
          return (
            <Row key={el.id}>
              <TdElem>{el.amount}</TdElem>
              <TdElem>{el.currency}</TdElem>
              <TdElem>{el.type}</TdElem>
            </Row>
          );
        })}
      </TbodyTransactionHistory>
    </TransactionHistoryEl>
  );
};
