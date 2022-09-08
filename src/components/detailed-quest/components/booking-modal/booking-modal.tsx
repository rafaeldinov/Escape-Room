import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../../../../hooks';
import { setIsBookingModalOpened } from '../../../../store/quest-reducer';
import { sendOrderAction } from '../../../../store/api-action';
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';


const BookingModal = () => {
  const dispatch = useAppDispatch();
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const peopleCountRef = useRef<HTMLInputElement | null>(null);
  const isLegalRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(isLegalRef.current && nameRef.current && peopleCountRef.current && phoneRef.current) {
      dispatch(sendOrderAction(
        {
          name: nameRef.current.value,
          peopleCount: Number(peopleCountRef.current.value),
          phone: phoneRef.current.value,
          isLegal: isLegalRef.current.checked
        }
      ));
    }
    dispatch(setIsBookingModalOpened(false));
  };

  const handleCloseModalClick = () => dispatch(setIsBookingModalOpened(false));

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={handleCloseModalClick} >
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              ref={nameRef}
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              ref={phoneRef}
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              pattern="^[0-9]{10}$"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              ref={peopleCountRef}
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              ref={isLegalRef}
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
