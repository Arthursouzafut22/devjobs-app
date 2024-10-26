import * as S from "./Style";
import { AuthJobs } from "../../Context/ContextThemeColor";

const ToggleSwitch = () => {
  const { checkDark, onChangeTeme } = AuthJobs();

  return (
    <>
      <S.SwitchContainer>
        <S.SwitchInputChecked
          type="checkbox"
          checked={checkDark ?? false}
          onChange={onChangeTeme}
        />
        <S.Slider>
          <S.Circle />
        </S.Slider>
      </S.SwitchContainer>
    </>
  );
};
export default ToggleSwitch;
