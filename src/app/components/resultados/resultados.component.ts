import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: []
})
export class ResultadosComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) { }
  heroesArr:any[] = [];
  resultado:string;
  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroesArr = this._heroesService.buscarHeroe(params['termino']);
      this.resultado = params['termino'];
      console.log(this.heroesArr);
    })
  }

}
