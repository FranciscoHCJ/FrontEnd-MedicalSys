import { Component, OnInit, Input } from '@angular/core';
import { EspecialidadService } from 'src/app/services/service.index';
import { Especialidad } from 'src/app/models/especialidad.model';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styles: []
})
export class EspecialidadesComponent implements OnInit {

  especialidades: Especialidad[] = [];

  constructor(
    public _especialidadService: EspecialidadService
  ) { }

  ngOnInit() {
    this.cargarEspecialidades();
  }

  cargarEspecialidades() {
    this._especialidadService.cargarEspecialidades()
              .subscribe( especialidades => this.especialidades = especialidades);
  }

  buscarEspecialidad( termino: string ) {
    this._especialidadService.buscarEspecialidad( termino)
                              .subscribe( especialidades => this.especialidades = especialidades );

  }

  guardarEspecialidad( especialidad: Especialidad) {
    this._especialidadService.actualizarEspecialidad( especialidad )
                              .subscribe();
  }

  borrarEspecialidad( especialidad: Especialidad) {

    this._especialidadService.borrarEspecialidad( especialidad._id)
                              .subscribe( () => this.cargarEspecialidades());

  }

  crearEspecialidad() {
    swal({
      title: 'Crear Especialidad',
      text: 'Ingrese el nombre de la Especialidad',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then( (valor: string) => {

      if (!valor || valor.length === 0) {
        return;
      }

      this._especialidadService.crearEspecialidad( valor )
                                .subscribe( () => this.cargarEspecialidades());
    });
  }

}
