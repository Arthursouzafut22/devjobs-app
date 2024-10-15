import * as S from "./Style";

const ToggleSwitch = () => {
  return (
    <>
      <S.SwitchContainer>
        <S.SwitchInputChecked type="checkbox" />
        <S.Slider>
          <S.Circle />
        </S.Slider>
      </S.SwitchContainer>
    </>
  );
};
export default ToggleSwitch;
