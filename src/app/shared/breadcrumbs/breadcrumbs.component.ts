import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

<<<<<<< HEAD
  titulo: string;

  constructor( private router: Router,
               private title: Title,
               private meta: Meta ) {

    this.getDataRoute()
    .subscribe( data => {
      console.log(data);
      this.titulo = data.titulo;
      this.title.setTitle( this.titulo );

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      };

      this.meta.updateTag( metaTag );


    });

  }
=======
  label: string;

  constructor(private router: Router,
              private title: Title,
              private meta: Meta ) {


    this.getDataRoute().subscribe( data => {

      console.log(data);
      this.label = data.titulo;
      this.title.setTitle( this.label );


      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.label
      };

      this.meta.updateTag( metaTag );
    });



  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd ) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.data )
    );
  }
>>>>>>> 23b9dba9a1b818caef888bf886893aad2cff103a

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events.pipe(

      filter( evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd ) => evento.snapshot.data )

    );
  }

}
