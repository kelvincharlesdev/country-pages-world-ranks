export interface Countries {
  flags: { svg: string };
  name: { common: string };
  population: number;
  area: number;
  region: string;
  independent?: boolean;
  unMember?: boolean;
}
