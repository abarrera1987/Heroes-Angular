import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../servicios/heroes.service';


@Component({
	selector: 'app-heroe',
	templateUrl: './heroe.component.html',
	styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

	heroe:any = {};
	
	constructor(private activatedRoute: ActivatedRoute, private heroes: HeroeService) {

		this.activatedRoute.params.subscribe(paramas => {

			this.heroe = this.heroes.getHeroe(paramas['id']);
			console.log(this.heroe)
		})

	}

	ngOnInit() {
	}

}
