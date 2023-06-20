import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {

  empresa: Empresa[] = [];
  formGroupEmpresa: FormGroup;

  constructor( private empresaService: EmpresaService, private formBuilder: FormBuilder){
    this.formGroupEmpresa = this.formBuilder.group({
    id: '',
    nome: '',
    endereco: '', 
    contato: '',
    atividade: '',
    cnpj:'', 
    });
  }

  ngOnInit(): void{
    this.loadEmpresa();
  }

  loadEmpresa(){
    this.empresaService.getEmpresa().subscribe({
        next: data => this.empresa = data, 
        error: () => console.log('error')
    })
  }

  save(){ 
    this.empresaService.save(this.formGroupEmpresa.value).subscribe({ 
    next: data => { 
      this.empresa.push(data); 
      this.formGroupEmpresa.reset(); 
      } 
    }); 
  }

}
