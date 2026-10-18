export interface Motor {
  id: number;
  code: string;
  cilinders: number;
  cilinderinhoudCc: number;
  aspiratie: "atmosferisch" | "turbo";
  vermogenPk: number;
  introductiejaar: number;
}
 
export interface Auto {
  id: number;
  model: string;
  generatie: string;
  beschrijving: string;
  jaar: number;
  prijs: number;
  inProductie: boolean;
  productiestart: string;
  afbeelding: string;
  categorie: "coupé" | "sedan" | "cabrio" | "stationwagen";
  kenmerken: string[];
  motor: Motor;
}