import { StatList } from '../StatList/StatList';
import { ContainerForStats, Title } from './statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <ContainerForStats>
      {{ title } && <Title>{title}</Title>}
      <StatList stats={stats}></StatList>
    </ContainerForStats>
  );
};
