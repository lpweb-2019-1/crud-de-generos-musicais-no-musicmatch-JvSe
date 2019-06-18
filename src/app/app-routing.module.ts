import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicaComponent } from './musica/musica.component';
import { MusicasComponent } from './musicas/musicas.component';
import { ArtistaComponent } from './artista/artista.component';
import { GeneroComponent } from './genero/genero.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CadastrarArtistaComponent } from './cadastrar-artista/cadastrar-artista.component';
import { ArtistaListaComponent } from './artista-lista/artista-lista.component';
import { EditarArtistaComponent } from './editar-artista/editar-artista.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { GeneroCadastrarComponent } from './genero-cadastrar/genero-cadastrar.component';
import { GeneroEditarComponent } from './genero-editar/genero-editar.component';

const routes: Routes = [
  { path: 'artistas/cadastrar', component: CadastrarArtistaComponent },
  { path: 'artistas/listar', component: ArtistaListaComponent },
  { path: 'artistas/:id/editar', component: EditarArtistaComponent },
  { path: 'artistas/:id', component: ArtistaComponent },
  { path: 'musicas', component: MusicasComponent },
  { path: 'musicas/:id', component: MusicaComponent },
  { path: 'generos/cadastrar', component: GeneroCadastrarComponent },
  { path: 'generos/listar', component: GeneroListaComponent },
  { path: 'generos/:id', component: GeneroComponent },
  { path: 'generos/:id/editar', component: GeneroEditarComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  
  
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
