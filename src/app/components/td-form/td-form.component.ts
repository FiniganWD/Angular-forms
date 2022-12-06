import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  @ViewChild('tdForm', {static:true}) tdForm!: NgForm;

  heroForm = {
    nome: '',
    alterEgo: '',
    poteri:'',
    nemico: '',
    pianeta: '',
    debolezza: ''
  }
  poteri = [
    {
      label: 'terra',
      value: 'terra'
    },
    {
      label: 'fuoco',
      value: 'fuoco'
    },
    {
      label: 'acqua',
      value: 'acqua'
    }
  ]

  risposta = '';

  hero: any = {
    nome:'',
    alerEgo:'',
    poteri: '',
    nemico:'',
    pianeta:'',
    debolezza:''
  }

  constructor() { }

  ngOnInit(): void {
    this.tdForm.statusChanges?.subscribe(status =>{
      console.log('Stato del form: ', status);
    })
    // console.log(this.hero);
  }



  submit(){
    console.log('Form inviato: ', this.tdForm);
    this.hero.nome = this.tdForm.value.heroInfo.nome;
    this.hero.alerEgo = this.tdForm.value.heroInfo.alerEgo;
    this.hero.poteri = this.tdForm.value.heroInfo.poteri;
    this.hero.nemico = this.tdForm.value.heroInfo.nemico;
    this.hero.pianeta = this.tdForm.value.heroInfo.pianeta;
    this.hero.debolezza = this.tdForm.value.heroInfo.debolezza;
  }
}
