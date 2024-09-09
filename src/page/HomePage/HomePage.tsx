import { useEffect, useState } from 'react';

import {
  Image,
  SideBarFilters,
  SpinnerCircular,
  Table
} from '../../components';
import { countriesAll } from '../../services/countriesAll';
import { Countries } from '../../types/countries';
import { theme } from '../../styles/theme';

import * as S from './HomePage.styles';

export const HomePage = () => {
  const [countries, setCountries] = useState<Countries[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Countries[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeButtons, setActiveButtons] = useState<string[]>([]);
  const [isMember, setIsMember] = useState(false);
  const [isIndependent, setIsIndependent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCountriesAll = async () => {
    try {
      setIsLoading(true);
      const data = await countriesAll();
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      console.error('Erro ao acessar API:', error);
      setError('Failed to load countries. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCountriesAll();
  }, []);

  useEffect(() => {
    const filtered = countries.filter(country => {
      const matchesName = country.name.common
        .toLowerCase()
        .includes(inputValue.toLowerCase());

      if (!matchesName) {
        setError('Country not found!');
      }

      const matchesRegion =
        activeButtons.length === 0 || activeButtons.includes(country.region);

      const unMemberTrue = country.unMember === true;
      const independentTrue = country.independent === true;

      const matchesStatus =
        (!isMember || unMemberTrue) && (!isIndependent || independentTrue);

      return matchesName && matchesRegion && matchesStatus;
    });

    setFilteredCountries(filtered);
  }, [inputValue, activeButtons, isMember, isIndependent, countries]);

  const changeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <S.Home__Wrapper>
      <S.Main>
        <S.Content>
          <S.Container__Searcher>
            <S.Description__Found__Countries>
              Found {filteredCountries.length} countries
            </S.Description__Found__Countries>

            <S.Input__Content>
              <div>
                <Image src="/search.svg" alt="search" />
              </div>
              <input
                type="text"
                placeholder="Search by Name, Region, Subregion"
                value={inputValue}
                onChange={changeFilter}
              />
            </S.Input__Content>
          </S.Container__Searcher>

          <S.Info__Countries__Wrapper>
            <SideBarFilters
              activeButtons={activeButtons}
              isIndependent={isIndependent}
              isMember={isMember}
              setActiveButtons={setActiveButtons}
              setIsIndependent={setIsIndependent}
              setIsMember={setIsMember}
            />

            <S.Wrapper__Table>
              {isLoading ? (
                <S.Content__Spinner>
                  <SpinnerCircular $borderColor={theme.colors.action} />
                </S.Content__Spinner>
              ) : (
                <Table filteredCountries={filteredCountries} />
              )}
              {error && <S.Error>{error}</S.Error>}
            </S.Wrapper__Table>
          </S.Info__Countries__Wrapper>
        </S.Content>
      </S.Main>
    </S.Home__Wrapper>
  );
};
