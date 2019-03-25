import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor( public _usuarioService: UsuarioService) { }

  usuario: Usuario;

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
  }

}
