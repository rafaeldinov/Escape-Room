import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setIsBookingModalOpened } from '../../store/quest-reducer';
import { getIsBookingModalOpened, getIsQuestLoading } from '../../store/selectors';
import { fetchQuestAction } from '../../store/api-action';
import { getQuest } from '../../store/selectors';
import { MainLayout } from '../../components/common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import Preloader from '../preloader/preloader';
import { getQuestLevel } from '../../util';
import { QuestGenreTabs } from '../../const';

const getGenre = (type: string) => {
  const genre = QuestGenreTabs.find((item) => item.type === type);
  if(genre) {
    return genre.name;
  }
  return '';
};

const DetailedQuest = () => {
  const dispatch = useAppDispatch();
  const {id} = useParams<{id: string}>();
  const quest = useAppSelector(getQuest);
  const isBookingModalOpened = useAppSelector(getIsBookingModalOpened);
  const isQuestLoading = useAppSelector(getIsQuestLoading);

  useEffect(() => {
    if(id) {
      dispatch(fetchQuestAction(id.toString()));
    }
  }, [id, dispatch]);

  const onBookingBtnClick = () => {
    dispatch(setIsBookingModalOpened(true));
  };

  if (isQuestLoading || !quest) {
    return (
      <Preloader />
    );
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${quest.coverImg}`}
          alt={`квест ${quest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{getGenre(quest.type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${quest.duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>
                  {`${quest.peopleCount[0]}–${quest.peopleCount[1]} чел`}
                </S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{getQuestLevel(quest.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>
            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
