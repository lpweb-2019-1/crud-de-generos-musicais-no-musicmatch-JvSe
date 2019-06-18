import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { ValicacaoFormUtilService } from '../valicacao-form-util.service';

@Component({
  selector: 'app-genero-cadastrar',
  templateUrl: './genero-cadastrar.component.html',
  styleUrls: ['./genero-cadastrar.component.css']
})
export class GeneroCadastrarComponent implements OnInit {
  /** Atributo vinculado ao campo do nome do artista */
  nome = null;

  /**
   * O construtor inje ainstâncias de `ArtistasService` e `ValidacacaoFormUtilService`
   * 
   * @param artistas$ Uma instância de ArtistasService
   * @param validacao$ Uma instancia de ValidacacaoFormUtilService
   */
  constructor(private generos$: GenerosService,
    private validacao$: ValicacaoFormUtilService) { }

  ngOnInit() {
  }

  /**
   * Este método utiliza o método [`cadastrar()`]{@link ArtistasService#cadastrar}
   * para cadastrar um artista, utilizando os atributos `nome` e `foto`.
   * 
   * Quando obtiver um resultado do método, faz um tratamento para lidar com situação
   * de erro ou sucesso.
   */
  salvar() {
    this.generos$.cadastrar(this.nome)
      .subscribe(
        data => this.validacao$.erro = false,
        err => this.validacao$.erro = err.error
      );
  }

}

