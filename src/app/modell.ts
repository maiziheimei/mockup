// export class Modell {
//   _id: string;
//   Kriterium: string;
//   Beschreibung:  string;
//   Auspraegung_0: string;
//   Auspraegung_1: string;
//   Auspraegung_2: string;
//   Auspraegung_3: string;
//   Auspraegung_4: string;
//   Auspraegung_5: string;
//   Auspraegung_6: string;
//   Auspraegung_7: string;
//   ggf_weitere_Auspraegungn: string;
//   TOP_Zuordnung: string;
//   Zustaendige_Partner: string;
//   Hinweise_Anmerkungen: string;
//   Produktionsplanung_langfristig: string;
//   Produktionssteuerung_kurzfristig: string;
//   Produktion_Fertigung_Montage: string;
//   Personal: string;
//   IT: string;
//   Logistik: string;
// }


export class Modell {
  _id: string;
  Kriterium: string;
  Beschreibung:  string;
  Auspraegung_0: string;
  Auspraegung_1: string;
  Auspraegung_2: string;
  Auspraegung_3: string;
  Auspraegung_4: string;
  Auspraegung_5: string;
  Auspraegung_6: string;
  Auspraegung_7: string;
  ggf_weitere_Auspraegungn: string;
  TOP_Zuordnung: string;
  Zustaendige_Partner: string;
  Hinweise_Anmerkungen: string;
  Produktionsplanung_langfristig: string;
  Produktionssteuerung_kurzfristig: string;
  Produktion_Fertigung_Montage: string;
  Personal: string;
  IT: string;
  Logistik: string;
  isSelected: boolean;
  Ist: {
    id: string,
    note: string
  };
  Ziel: {
    id: string,
    note: string
  };
  Kriterium_note: string;
  Massnahmen: string;
  Erklaerung: string;
  Kosten: number;
  Termin: string;
  Verantwortlich: string;
  user: {
    id: string,
    createdDate: string
  };
}