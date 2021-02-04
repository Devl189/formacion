# DOCUMENTACIÓN

### Prerequisitos Angular

- Node JS: https://nodejs.org/es/
- Angular: https://cli.angular.io/
- Vs: https://code.visualstudio.com/
- Atajos: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
- Plugins: https://www.campusmvp.es/recursos/post/visual-studio-code-angular-como-montar-un-entorno-de-desarrollo-productivo-para-este-framework.aspx
- Proyecto Formación: https://github.com/Devl189/formacion
____________________________________________________________

### Angular essentials

- Creacion app angular: ng new nombre-app
- Creación app en una version de angular en concreto: npx -p @angular/cli@7.3.9 ng new angular7app
- Estructura correcta de los proyectos: https://blog.rootnite.com/development/angular/como-definir-una-estructura-de-carpetas-altamente-escalable-para-su-proyecto-angular/
- Componentes y servicios: https://angular.io/guide/component-overview
    * Creación componente: ng g c nombre-componente
    * Creación servicio: ng g s nombre-servicio
- Ciclos de vida: https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688
- Componentes anidados
____________________________________________________________

### Enrutamiento: Lazy Load

- Lazy Load es un patrón de diseño que consiste en retrasar la carga o inicialización de un objeto hasta el momento de su utilización.
- Creación routing y componente
    * ng g m modules/search --routing
    * ng g c modules/search
- Modificar app.roting module y el routing del componente
- Añadir router-outlet en el app.component
____________________________________________________________

### Pipes

- La finalidad de un pipe es transformar visualmente la información
- Pipes: https://angular.io/guide/pipes
____________________________________________________________

### Directivas

- La finalidad de una directiva es modificar o crear un comportamiento totalmente nuevo de un elemento del DOM
- Directives: https://angular.io/guide/attribute-directives
____________________________________________________________

### Guards
- Los guards en angular son interfaces que permiten proteger las rutas e indican al enrutador si se permitirá la navegación a una ruta o no.
- Existen 4 tipos:
    * CanActivate: Mira si el usuario puede acceder a una página determinada.
    * CanActivateChild: Mira si el usuario puede acceder a las páginas hijas de una determinada ruta.
    * CanDeactivate: Mira si el usuario puede salir de una página, es decir, podemos hacer que aparezca un mensaje, por ejemplo, de confirmación, si el usuario tiene cambios sin guardar.
    * CanLoad: Sirve para evitar que la aplicación cargue los módulos si el usuario no está autorizado a hacerlo.
- Guards: https://angular.io/guide/router#preventing-unauthorized-access
____________________________________________________________

### Observables

- Observable: Es aquello que queremos observar, que será implementado mediante una colección de eventos o valores futuros. Un observable puede ser creado a partir de eventos de usuario derivados del uso de un formulario, una llamada HTTP, un almacén de datos, etc. Mediante el observable nos podemos suscribir a eventos que nos permiten hacer cosas cuando cambia lo que se esté observando.
- Observer: Es el actor que se dedica a observar. Básicamente se implementa mediante una colección de funciones callback que nos permiten escuchar los eventos o valores emitidos por un observable. Las callbacks permitirán especificar código a ejecutar frente a un dato en el flujo, un error o el final del flujo.
- Subject: es el emisor de eventos, que es capaz de crear el flujo de eventos cuando el observable sufre cambios. Esos eventos serán los que se consuman en los observers.
- https://www.learnrxjs.io/
- https://medium.com/@osmancea/programaci%C3%B3n-reactiva-con-rxjs-bebc9432485f
- https://enriqueoriol.com/blog/2019/03/aprende-rxjs-1.html
- http://blog.enriqueoriol.com/2019/04/aprende-rxjs-2.html
- http://blog.enriqueoriol.com/2019/04/aprende-rxjs-3.html

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
        * Este comando ademas de añadir las dependencias del package actualiza en index.htm y los estilos para incluir todo lo necesario para usar angular material.
____________________________________________________________

### Flex layout

- https://github.com/angular/flex-layout
- https://tburleson-layouts-demos.firebaseapp.com/#/docs
____________________________________________________________
