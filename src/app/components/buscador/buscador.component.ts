import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
	selector: 'app-buscador',
	templateUrl: './buscador.component.html',
	styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

	heroes:Heroe[] = [];

	termino:string;

	constructor(private _heroeService: HeroeService, private _activeRoute: ActivatedRoute) { }

	ngOnInit() {

		this._activeRoute.params.subscribe(params => {

			this.termino = params['termino'];

			this.heroes = this._heroeService.buscarHeroes(params['termino']);

		})

	}



}
