import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { ModellService} from '../modell.service';

@Component({
  selector: 'app-massnahmen',
  templateUrl: './massnahmen.component.html',
  styleUrls: ['./massnahmen.component.css']
})
export class MassnahmenComponent implements OnInit {

  // public CModells = [
  //   {'_id': '1', 'Kriterium': 'Digitale Konnektivität von Maschinen'},
  //   {'_id': '3', 'Kriterium': 'Produkt als digitaler Informationstraeger'},
  //   {'_id': '6', 'Kriterium': 'Mensch-Roboter-Kollaboration'},
  //   {'_id': '7', 'Kriterium': 'Betriebsdatenerfassung (BDE)'},
  //   {'_id': '9', 'Kriterium': 'Methodik der Fertigungs- und Montagesteuerung'},
  //   {'_id': '14', 'Kriterium': 'Kostentransparenz'},
  //   {'_id': '20', 'Kriterium': 'Dokumentation und Analyse von Qualitaetsdaten'},
  //   {'_id': '24', 'Kriterium': 'IT-Sicherheit / Industrial Security'}
  // ];

  sms = [];
  CModells: any;

  balls = ['1 -> 2', '1 -> 2', '2 -> 3', '0 -> 2', '0 -> 3', '3 -> 4' ];

 //  public mass= ['Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
 //    '1 Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
 //    '2 Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
 //    '3 Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
 //    '4 Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
 //    'Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
 //    'Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. '];
 // public  erk= ['Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
 //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht'];
 //
 //

  myVar = 1;
  itemCount: any;
  show = false;

  constructor( private _modellService: ModellService, private  _data: DataService) {}

  ngOnInit() {
    this._modellService.sharedModells.subscribe(res => this.CModells = res);
    this._modellService.changeModel(this.CModells);
    this.itemCount = this.sms.length;
    this._data.selectedModels.subscribe(res => this.sms = res);
    this._data.changeGoal(this.sms);
    // if (this.myVar === 1) {
    //   document.getElementById('MyElement').className = 'big';
    // } else {
    //   document.getElementById('MyElement').className = 'small';
    // }
  }

}