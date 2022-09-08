import { useEffect } from 'react';
import { fetchQuestsAction } from '../../../../store/api-action';
import { getQuests, getCurrentTab } from '../../../../store/selectors';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import * as S from './quests-catalog.styled';
import QuestItem from '../../../quest-item/quest-item';
import QuestTabs from '../../../quest-tabs/quest-tabs';
import { DEFAULT_GENRE } from '../../../../const';


const QuestsCatalog = () => {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getCurrentTab);
  const filteredQuests = useAppSelector(getQuests).filter((item) => currentGenre === DEFAULT_GENRE || item.type === currentGenre);

  useEffect(()=> {
    dispatch(fetchQuestsAction());
  }, [dispatch]);

  return (
    <>
      <QuestTabs />
      <S.QuestsList>
        {filteredQuests.map((item) => (
          <QuestItem key={item.id} quest={item} />
        ))}
      </S.QuestsList>
    </>
  );
};


export default QuestsCatalog;
