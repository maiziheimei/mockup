import { Ist, Ziel} from "./modell";
import { CRLObj } from "./ComLR";

export class SelectedModel {
  kriterium_id: number;
  kriterium: string;
  isselected: boolean;
  isEvaluated: boolean;
  Iste: Ist[];
  Ziele: Ziel[];
  priority: string;
  prioirtyNum : number;
  Kriterium_note: string;
  Evaluation_note: string;
  Massnahmen: string;
  Erklaerung: string;
  Kosten: string;
  Termin: Date;
  Verantwortlich: string;
  Auspraegung_note: string[];
  clrlist: CRLObj[];


  constructor() {
    this.kriterium_id = 0;
    this.kriterium ='';
    this.isselected = false;
    this.isEvaluated = false;
    this.Iste = []
    this.Ziele = [];
    this.priority = 'N';
    this.prioirtyNum = 0;
    this.Kosten = '';
    this.Evaluation_note = '';
    this.Massnahmen = ' ';
    this.Erklaerung = '  ';
    this.Verantwortlich = '';
    this.Termin = null;
    this.Auspraegung_note = new Array<string>(8);
    this.clrlist = [];
  }
}


