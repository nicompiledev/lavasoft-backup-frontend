import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { RegistrarComponent } from './componentes/usuario/registrar/registrar.component';
import { ConfirmarCuentaComponent } from './componentes/usuario/confirmar-cuenta/confirmar-cuenta.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { RecuperarContrasenaComponent } from './componentes/usuario/recuperar-contrasena/recuperar-contrasena.component';
import { NuevaContrasenaComponent } from './componentes/usuario/nueva-contrasena/nueva-contrasena.component';
import { PerfilComponent } from './componentes/usuario/perfil/perfil.component';
import { ActualizarPerfilComponent } from './componentes/usuario/actualizar-perfil/actualizar-perfil.component';
import { ActualizarPasswordComponent } from './componentes/usuario/actualizar-password/actualizar-password.component';
import { LavaderoComponent } from './componentes/lavadero/lavadero.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { RegistrarLavaderoComponent } from './componentes/admin/registrar-lavadero/registrar-lavadero.component';
import { FilterBasicComponent } from './componentes/usuario/catalogue/filter-basic/filter-basic.component';
import { FilterCompleteComponent } from './componentes/usuario/catalogue/filter-complete/filter-complete.component';
import { PreviewCarwashComponent } from './componentes/usuario/catalogue/preview-carwash/preview-carwash.component';
import { CatalogueComponent } from './componentes/views/catalogue/catalogue.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { IntroComponent } from './layout/components/intro/intro.component';
import { TestimonialsComponent } from './layout/components/testimonials/testimonials.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { AboutComponent } from './layout/components/about/about.component';
import { TeamComponent } from './layout/components/team/team.component';
import { ClientsComponent } from './layout/components/clients/clients.component';
import { ContactComponent } from './layout/components/contact/contact.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { CarwashListComponent } from './layout/components/carwash-list/carwash-list.component';
import { PopularServicesComponent } from './layout/components/popular-services/popular-services.component';
import { CarwashModalComponent } from './layout/components/carwash-modal/carwash-modal.component';
import { AuthModalComponent } from './layout/components/auth-modal/auth-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    ConfirmarCuentaComponent,
    LoginComponent,
    RecuperarContrasenaComponent,
    NuevaContrasenaComponent,
    PerfilComponent,
    ActualizarPerfilComponent,
    ActualizarPasswordComponent,
    LavaderoComponent,
    ImagenesComponent,
    RegistrarLavaderoComponent,
    FilterBasicComponent,
    FilterCompleteComponent,
    PreviewCarwashComponent,
    CatalogueComponent,
    UserLayoutComponent,
    NavbarComponent,
    IntroComponent,
    TestimonialsComponent,
    HeaderComponent,
    AboutComponent,
    TeamComponent,
    ClientsComponent,
    ContactComponent,
    FooterComponent,
    CarwashListComponent,
    PopularServicesComponent,
    CarwashModalComponent,
    AuthModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
