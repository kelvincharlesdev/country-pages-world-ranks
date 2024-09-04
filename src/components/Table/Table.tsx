import * as S from './Table.style';
import * as I from './Table.interface';
import { Image } from '../Image';

export const Table = ({ filteredCountries }: I.TableProps) => {
  const formatNumber = (value: number) => {
    const integerValue = Math.round(value);

    return integerValue.toLocaleString('en-US');
  };

  return (
    <S.Table data-testid="table-test">
      <thead>
        <tr>
          <th className="col1">Flag</th>
          <th>name</th>
          <th>Population</th>
          <th>Area(km2)</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        {filteredCountries.map(country => (
          <tr key={country.name.common}>
            <td className="col1">
              <S.ContentImage>
                <Image src={country.flags.svg} alt={country.name.common} />
              </S.ContentImage>
            </td>
            <td>{country.name.common}</td>
            <td>{formatNumber(country.population)}</td>
            <td>{formatNumber(country.area)}</td>
            <td>{country.region}</td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
};
