import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { ActivatedRoute } from '@angular/router';
import { ValicacaoFormUtilService } from '../valicacao-form-util.service';

@Component({
  selector: 'app-genero-editar',
  templateUrl: './genero-editar.component.html',
  styleUrls: ['./genero-editar.component.css']
})
export class GeneroEditarComponent implements OnInit {
  genero = null;

  constructor(private genero$: GenerosService,
    private route: ActivatedRoute,
    private validacao$: ValicacaoFormUtilService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const id = parseInt(params.get('id'));
        this.validacao$.erro = null;
        this.genero$.encontrar(id)
          .subscribe(
            artista => this.genero = artista
          );
      }
    );
  }

  salvar() {
    this.genero$.editar(this.genero.id, this.genero.nome)
      .subscribe(
        data => this.validacao$.erro = false,
        err => this.validacao$.erro = err.error
      );
  }
}
