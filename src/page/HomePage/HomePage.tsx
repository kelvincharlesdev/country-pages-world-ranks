import { Header, Image, Button } from '../../components';

import * as S from './HomePage.styles';

export const HomePage = () => {
  return (
    <S.Home__Wrapper>
      <Header />

      <S.Main>
        <S.Content>
          <S.Container__Searcher>
            <S.Description__Found__Countries>
              Found 234 countries
            </S.Description__Found__Countries>

            <S.Input__Content>
              <div>
                <Image src="/search.svg" alt="search" />
              </div>
              <input
                type="text"
                placeholder="Search by Name, Region, Subregion"
              />
            </S.Input__Content>
          </S.Container__Searcher>

          <S.Info__Countries__Wrapper>
            <S.Info__Filters__Countries>
              <S.Sort__By__Content>
                <h4>Sort by</h4>
                <S.Selected>
                  <S.Input__Selected>
                    <p>teste</p>
                    <div>
                      <Image
                        src="expand_down.svg"
                        alt="Seta para baixo"
                      ></Image>
                    </div>
                  </S.Input__Selected>
                </S.Selected>
              </S.Sort__By__Content>

              <S.Region__Content>
                <h4>Region</h4>

                <S.Content__Items>
                  <Button $isActive>Americas</Button>
                  <Button>Antartic</Button>
                  <Button>Africa</Button>
                  <Button>Asia</Button>
                  <Button>Europe</Button>
                  <Button>Oceania</Button>
                </S.Content__Items>
              </S.Region__Content>

              <S.Status__Content>
                <h4>Status</h4>

                <S.Status__Items>
                  <S.CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <span>Member of the United Nations </span>
                  </S.CheckboxContainer>

                  <S.CheckboxContainer>
                    <input type="checkbox" name="" id="" />
                    <span>Independent</span>
                  </S.CheckboxContainer>
                </S.Status__Items>
              </S.Status__Content>
            </S.Info__Filters__Countries>

            <S.Wrapper__Table>
              <S.Table>
                <thead>
                  <tr>
                    <th>Flag</th>
                    <th>name</th>
                    <th>Population</th>
                    <th>Area(km2)</th>
                    <th>Region</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="src/assets/react.svg" alt="" />
                    </td>
                    <td>China</td>
                    <td>1,402,112,000</td>
                    <td>9,706,961</td>
                    <td>Asia</td>
                  </tr>
                </tbody>
              </S.Table>
            </S.Wrapper__Table>
          </S.Info__Countries__Wrapper>
        </S.Content>
      </S.Main>
    </S.Home__Wrapper>
  );
};
