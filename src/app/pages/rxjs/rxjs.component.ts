import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
<<<<<<< HEAD


  constructor() {

    this.subscription = this.regresaObservable()
    .subscribe(
=======

  constructor() {


    this.subscription = this.regresaObservable().pipe(
      // retry(2)
    ) // obs
      .subscribe(
>>>>>>> 23b9dba9a1b818caef888bf886893aad2cff103a
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error ),
      () => console.log('El observador termino!')
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La página se va a cerrar');
    this.subscription.unsubscribe();
  }


  regresaObservable(): Observable<any> {

    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      const intervalo = setInterval( () => {

        contador++;

<<<<<<< HEAD

        const salida = {
          valor: contador
        };


        observer.next(salida);


=======
        const salida = {
          valor: contador
        };

        observer.next(salida);


>>>>>>> 23b9dba9a1b818caef888bf886893aad2cff103a
        // if ( contador === 3 ) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
<<<<<<< HEAD

        // if ( contador === 2 ) {
        //   // clearInterval(intervalo);
        //   observer.error('Auxilio!');
        // }
=======
>>>>>>> 23b9dba9a1b818caef888bf886893aad2cff103a

        // if ( contador === 2 ) {
        //   // clearInterval(intervalo); // agregar
        //   observer.error('Auxilio!');
        // }

<<<<<<< HEAD
    }).pipe(
      map( resp => resp.valor),
      filter( ( valor, index ) => {

        if (  (valor % 2) === 1 ) {
          // impar
          return true;

        } else {
          // par
          return false;
        }
      })
    );
=======
      }, 500 );

    }).pipe(

      map( resp => {
        return resp['valor'];
      }),
>>>>>>> 23b9dba9a1b818caef888bf886893aad2cff103a

      filter( (valor, index) => {
        // console.log('Filter', valor, index );
        if ( (valor % 2) === 1 ) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })

    );

<<<<<<< HEAD
=======
  }

>>>>>>> 23b9dba9a1b818caef888bf886893aad2cff103a
}
