# DOCUMENTACIÓN

### Angular

- Node JS: https://nodejs.org/es/
- Angular: https://cli.angular.io/
- Vs: https://code.visualstudio.com/
- Atajos: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
- Plugins: https://www.campusmvp.es/recursos/post/visual-studio-code-angular-como-montar-un-entorno-de-desarrollo-productivo-para-este-framework.aspx
- Creación app: npx -p @angular/cli@7.3.9 ng new angular7app
- Proyecto Formación: https://github.com/Devl189/formacion
____________________________________________________________

### Traducciones

- https://github.com/ngx-translate/core
    1) npm install @ngx-translate/core --save
    2) npm install @ngx-translate/http-loader --save
    3) Aplicar la configuración en el app.module y setear el idioma en el app.component
____________________________________________________________

### Angular material

- https://material.angular.io/
- https://material.io/resources/icons/?style=baseline
    1)  ng add @angular/material (custom, Gestos movil: Y, animaciones: Y )
        * Este comando ademas de añadir las dependecias del package actualiza en index.htm y los estilos para incluir todo lo necesario para usar angular material.
____________________________________________________________

### Flex layout

- https://github.com/angular/flex-layout
- https://tburleson-layouts-demos.firebaseapp.com/#/docs
____________________________________________________________

### Enrutamiento: Lazy Load

- Lazy Load es un patrón de diseño que consiste en retrasar la carga o inicialización de un objeto hasta el momento de su utilización.
- Creación routing y componente
    - ng g m modules/search --routing
    - ng g c modules/search
- Modificar app.roting module y el routing del componente
- Añadir router-outlet en el app.component
____________________________________________________________

### Componentes anidados

- Creacion componente: ng g c nombre-componente
- Creacion servico: ng g s nombre-servicio
____________________________________________________________

### Observables

- https://www.learnrxjs.io/
- https://medium.com/@osmancea/programaci%C3%B3n-reactiva-con-rxjs-bebc9432485f
