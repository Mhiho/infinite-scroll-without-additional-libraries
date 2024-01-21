export interface ItemI {
  id: number;
  name: string;
  image: { url: string };
  powerstats: Powers;
  biography: Biography;
}

export interface Powers {
  intelligence: number;
  strenght: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export interface Biography {
  aliases: string[];
  alignment: string;
  'alter-egos': string;
  'first-appearance': string;
  'full-name': string;
  'place-of-birth': string;
  publisher: string;
}
