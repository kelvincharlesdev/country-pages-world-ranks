import { Button } from '../Button';
import { Image } from '../Image';

import * as S from './SideBarFilters.styles';
import * as I from './SideBarFilters.interface';

export const SideBarFilters = ({
  setIsIndependent,
  setIsMember,
  activeButtons,
  setActiveButtons,
  isIndependent,
  isMember
}: I.SideBarFiltersProps) => {
  const handleButtonClick = (region: string) => {
    const newActiveButtons = activeButtons.includes(region)
      ? activeButtons.filter(activeRegion => activeRegion !== region)
      : [...activeButtons, region];

    setActiveButtons(newActiveButtons);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (name === 'member-united-nations') {
      setIsMember(checked);
    } else if (name === 'independent') {
      setIsIndependent(checked);
    }
  };
  return (
    <S.Info__Filters__Countries>
      <S.Sort__By__Content>
        <h4>Sort by</h4>
        <S.Selected>
          <S.Input__Selected>
            <p>Population</p>
            <div>
              <div>
                <Image src="expand_down.svg" alt="Seta para baixo"></Image>
              </div>
            </div>
          </S.Input__Selected>
        </S.Selected>
      </S.Sort__By__Content>

      <S.Region__Content>
        <h4>Region</h4>

        <S.Content__Items>
          <Button
            $isActive={activeButtons.includes('Americas')}
            onClick={() => handleButtonClick('Americas')}
          >
            Americas
          </Button>
          <Button
            $isActive={activeButtons.includes('Antarctic')}
            onClick={() => handleButtonClick('Antarctic')}
          >
            Antartic
          </Button>
          <Button
            $isActive={activeButtons.includes('Africa')}
            onClick={() => handleButtonClick('Africa')}
          >
            Africa
          </Button>
          <Button
            $isActive={activeButtons.includes('Asia')}
            onClick={() => handleButtonClick('Asia')}
          >
            Asia
          </Button>
          <Button
            $isActive={activeButtons.includes('Europe')}
            onClick={() => handleButtonClick('Europe')}
          >
            Europe
          </Button>
          <Button
            $isActive={activeButtons.includes('Oceania')}
            onClick={() => handleButtonClick('Oceania')}
          >
            Oceania
          </Button>
        </S.Content__Items>
      </S.Region__Content>

      <S.Status__Content>
        <h4>Status</h4>

        <S.Status__Items>
          <S.CheckboxContainer>
            <input
              type="checkbox"
              name="member-united-nations"
              checked={isMember}
              onChange={handleCheckboxChange}
            />
            <span>Member of the United Nations </span>
          </S.CheckboxContainer>

          <S.CheckboxContainer>
            <input
              type="checkbox"
              name="independent"
              checked={isIndependent}
              onChange={handleCheckboxChange}
            />
            <span>Independent</span>
          </S.CheckboxContainer>
        </S.Status__Items>
      </S.Status__Content>
    </S.Info__Filters__Countries>
  );
};
