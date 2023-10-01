import { StatList } from './StatList/statList';
import { TitleForSection } from './Title/title';
import { ContainerForStats } from './statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <ContainerForStats>
      <TitleForSection>{title}</TitleForSection>
      <StatList stats={stats}></StatList>
    </ContainerForStats>
  );
};
