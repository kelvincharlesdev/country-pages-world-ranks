import { useParams } from 'react-router-dom';
import { Image, SpinnerCircular } from '../../components';
import { getCountry } from '../../services/getCountry';
import * as S from './CountryDetailsPage.styles';
import { useEffect, useState } from 'react';
import { theme } from '../../styles/theme';
import { formatNumber } from '../../utils/formatNumber';
import { Country } from '../../types/country';

export const CountryDetailsPage = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!countryId) {
      return;
    }

    const fetchCountry = async () => {
      try {
        setIsLoading(true);
        const data = await getCountry(countryId);
        setCountry(data[0]);
      } catch (error) {
        console.error('Errou ao acessar API', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountry();
  }, [countryId]);

  return (
    <S.Country__Wrapper>
      <S.Main>
        {isLoading ? (
          <S.Content__Spinner>
            <SpinnerCircular $borderColor={theme.colors.action} />
          </S.Content__Spinner>
        ) : (
          <S.Content>
            {country && (
              <>
                <S.Content__Image>
                  <Image src={country.flags.svg} alt={country.name.common} />
                </S.Content__Image>

                <S.Content__Title>
                  <h1>{country.name.common}</h1>
                  <p>{country.name.official}</p>
                </S.Content__Title>

                <S.Content__Info>
                  <S.Info_Population__Area>
                    <p>Population</p>
                    <span />
                    <p>{formatNumber(country.population)}</p>
                  </S.Info_Population__Area>

                  <S.Info_Population__Area>
                    <p>Area(km2)</p>
                    <span />
                    <p>{formatNumber(country.area)}</p>
                  </S.Info_Population__Area>
                </S.Content__Info>

                <S.Content__Info__Additional>
                  <li>
                    <span>Capital</span>
                    <p>{country.capital}</p>
                  </li>
                  <li>
                    <span>Subregion</span>
                    <p>{country.subregion}</p>
                  </li>
                  <li>
                    <span>Language</span>
                    <p>{Object.values(country.languages).join(',')}</p>
                  </li>
                  <li>
                    <span>Currencies</span>
                    <p>
                      {Object.values(country.currencies)
                        .map(currency => currency.name)
                        .join(', ')}
                    </p>
                  </li>
                  <li>
                    <span>Continents</span>
                    <p>{country.continents}</p>
                  </li>
                </S.Content__Info__Additional>
              </>
            )}
          </S.Content>
        )}
      </S.Main>
    </S.Country__Wrapper>
  );
};
