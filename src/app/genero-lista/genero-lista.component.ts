import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genero-lista',
  templateUrl: './genero-lista.component.html',
  styleUrls: ['./genero-lista.component.css']
})
export class GeneroListaComponent implements OnInit {
  /** A lista de artistas */
  generos = null;

  /** Uma variável de controle sobre o resultado da exclusão de artista */
  resultadoExcluir = null;

  /**
   * O construtor injeta uma instância de `ArtistasService` e `Router`
   * 
   * @param artistas$ Uma instância de `ArtistasService`
   * @param router Uma instância de `Router`
   */
  constructor(private generos$: GenerosService, private router: Router) { }

  /**
   * É sobrecarregado para acessar a lista de artistas quando o componente for iniciado.
   */
  ngOnInit() {
    this.atualizarLista();
  }

  /**
   * Este método usa o serviço `ArtistasService` para obter a lista de artistas. 
   * Quando houver retorno, armazena o resultado no atributo `artistas`.
   */
  atualizarLista() {
    this.generos$.lista()
      .subscribe(
        lista => this.generos = lista.results
      );
  }

  /**
   * Este método exclui um artista, de acordo com confirmação do usuário. Ao excluir, atualiza a lista de artistas.
   * 
   * @param artista O artista que será excluído
   */
  excluir(artista) {
    if (confirm(`Tem certeza que deseja excluir o artista "${artista.nome}" ?\nEssa ação não é reversível!`)) {
      this.generos$.excluir(artista.id)
        .subscribe(
          _ => {
            this.resultadoExcluir = true;
            this.atualizarLista();
          },
          err => {
            this.resultadoExcluir = err.error;
          }
        )
    }
  }

  /**
   * Este método realiza navegação para a funcionalidade de edição do artista.
   * 
   * @param artista O artista que será editado
   */
  editar(artista) {
    this.router.navigate(['generos', artista.id, 'editar']);
  }
  
  /**
   * Este método realiza navegação para a funcionalide de consulta do artista.
   * 
   * @param artista O artista que será consultado
   */
  consultar(artista) {
    this.router.navigate(['generos', artista.id]);
  }
}
