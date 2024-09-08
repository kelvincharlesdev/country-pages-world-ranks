import { Link } from 'react-router-dom';

import { Image } from '../Image';
import { formatNumber } from '../../utils/formatNumber';

import * as S from './Table.style';
import * as I from './Table.interface';

export const Table = ({ filteredCountries }: I.TableProps) => {
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
              <Link to={`name/${country.name.common}`}>
                <S.ContentImage>
                  <Image src={country.flags.svg} alt={country.name.common} />
                </S.ContentImage>
              </Link>
            </td>
            <td>
              <Link to={`name/${country.name.common}`}>
                {country.name.common}
              </Link>
            </td>
            <td>{formatNumber(country.population)}</td>
            <td>{formatNumber(country.area)}</td>
            <td>{country.region}</td>
          </tr>
          // </Link>
        ))}
      </tbody>
    </S.Table>
  );
};
