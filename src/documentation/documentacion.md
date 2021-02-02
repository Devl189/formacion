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

### Pipes

- La finalidad de un pipe es transformar visualmente la información
- https://angular.io/guide/pipes
____________________________________________________________

### Directivas

- La finalidad de una directiva es modificar o crear un comportamiento totalmente nuevo de un elemento del DOM
- https://angular.io/guide/attribute-directives
____________________________________________________________

### Guards
- Los guards en angular son interfaces que permiten proteger las rutas e indican al enrutador si se permitirá la navegación a una ruta o no.
- Existen 4 tipos:
    * CanActivate: Mira si el usuario puede acceder a una página determinada.
    * CanActivateChild: Mira si el usuario puede acceder a las páginas hijas de una determinada ruta.
    * CanDeactivate: Mira si el usuario puede salir de una página, es decir, podemos hacer que aparezca un mensaje, por ejemplo, de comfirmación, si el usuario tiene cambios sin guardar.
    * CanLoad: Sirve para evitar que la aplicación cargue los módulos si el usuario no está autorizado a hacerlo.
- https://angular.io/guide/router#preventing-unauthorized-access
____________________________________________________________

### Observables

- https://www.learnrxjs.io/
- https://medium.com/@osmancea/programaci%C3%B3n-reactiva-con-rxjs-bebc9432485f
