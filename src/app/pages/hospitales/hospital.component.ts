import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/services/service.index';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styles: []
})
export class HospitalComponent implements OnInit {

  hospital: Hospital = new Hospital('', '', '');

  constructor(
    public _hospitalService: HospitalService
  ) { }

  ngOnInit() {
  }

  guardarHospital(f: NgForm) {

    console.log(f.valid);
    console.log(f.value);

    if (f.invalid) {
      return;
    }

    this._hospitalService.guardarHospital( this.hospital )
                          .subscribe( hospital => {
                            console.log(hospital);
                          });
  }

}
