import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentTab } from '../../store/selectors';
import { setCurrentTab } from '../../store/quest-reducer';
import { ReactComponent as IconAllQuests } from '../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../assets/img/icon-scifi.svg';
import * as S from '../home/components/quests-catalog/quests-catalog.styled';
import { QuestGenreTabs } from '../../const';

const getTabIcon = (name: string) => {
  switch(name) {
    case 'adventures':
      return <IconAdventures />;
    case 'horror':
      return <IconHorrors />;
    case 'mystic':
      return <IconMystic />;
    case 'detective':
      return <IconDetective />;
    case 'sci-fi':
      return <IconScifi />;
    default:
      return <IconAllQuests />;
  }
};

const QuestTabs = () => {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getCurrentTab);

  const handleTabClick = (item: string) => {
    dispatch(setCurrentTab(item));
  };

  return (
    <S.Tabs>
      {QuestGenreTabs.map((item) => (
        <S.TabItem key={item.type} onClick={() => handleTabClick(item.type)}>
          {item.type === currentGenre ?
            <S.TabBtn isActive>
              {getTabIcon(item.type)}
              <S.TabTitle>{item.name}</S.TabTitle>
            </S.TabBtn>
            :
            <S.TabBtn>
              {getTabIcon(item.type)}
              <S.TabTitle>{item.name}</S.TabTitle>
            </S.TabBtn>}
        </S.TabItem>
      ))}
    </S.Tabs>
  );
};

export default QuestTabs;
