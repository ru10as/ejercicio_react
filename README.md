# Calculadora React Responsiva
Este proyecto consiste en una aplicacion de calculadora funcional desarrollada con React, diseñada para ofrecer una interfaz clara y adaptable a diferentes dispositivos mediante el uso de Bootstrap.

## Arquitectura del Proyecto
La aplicacion se establece a traves de una jerarquia de componentes que garantiza la separacion de responsabilidades:
- App.jsx: Actua como el punto de entrada principal y contenedor global de la estructura.
- Header, Home y Footer: Definen la estructura base y la navegacion.
- Calculadora.jsx: Gestiona la logica de negocio, el estado de los operandos y el control de las operaciones.
- Resultado.jsx: Se encarga exclusivamente de la representacion visual del dato final procesado.

## Implementacion y Diseño Responsivo
El nucleo tecnico de este desarrollo es la adaptacion dinamica de la interfaz segun el dispositivo del usuario.

## Estructura de la Calculadora
La adaptabilidad se gestiona mediante el sistema de rejilla:
- Columnas de Entrada: Se ha configurado un valor xs=12 para los campos de entrada. Esto asegura que en pantallas de moviles los elementos ocupen el ancho total, facilitando la interaccion en un diseño vertical.

- Botones de Operacion: Se utiliza un valor xs=3 para los botones. Esto permite alinear los cuatro operadores en una sola fila horizontal incluso en resoluciones minimas, optimizando el espacio en pantalla.

- Breakpoint sm: Al detectar pantallas de tamaño pequeño o superior, el sistema reduce el ancho relativo de las columnas para pasar de un diseño apilado a uno horizontal, aprovechando el espacio lateral en tablets y monitores.

## Componente Footer
El pie de pagina emplea una distribucion flexible para mantener la legibilidad:
- En moviles (xs=12), los bloques de informacion se apilan verticalmente para evitar desbordamientos.

- En pantallas medianas (md=4), el contenido se divide en tres columnas iguales, ocupando cada una un tercio del contenedor.

## Componente Resultado
Este componente utiliza logica de CSS para complementar el diseño responsivo:
- Se aplica un width del 100% para maximizar la visibilidad en moviles.

- Se establece un maxWidth de 250px para prevenir deformaciones en resoluciones altas.

## Instrucciones de Ejecucion
- Clonar el repositorio.
- Ejecutar npm install para instalar las dependencias necesarias.
- Iniciar el proyecto con el comando npm start.

## Autor
Ruben Cameo Saez