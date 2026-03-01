# CalcuRuben - Calculadora React Responsiva
Este proyecto es una aplicacion de calculadora funcional desarrollada con React. El objetivo principal ha sido crear una interfaz clara, intuitiva y totalmente adaptable a diferentes dispositivos (PC, Tablet y Movil).

## Arquitectura y Componentes
La aplicacion esta organizada en una jerarquia de componentes para mantener el codigo limpio y facilitar la escalabilidad:

- **App.jsx:** Es el corazon de la aplicacion. Gestiona el estado global (idiomas e historial) y la persistencia de datos en el localStorage.
- **Header.jsx:** Barra de navegacion responsiva con selector de idiomas (ES/EN) y menu colapsable para moviles.
- **Home.jsx:** Actua como contenedor principal para centrar la calculadora en pantalla.
- **Calculadora.jsx:** Contiene toda la logica matematica, la gestion de estados de los numeros y el control de los botones de operacion.
- **Resultado.jsx:** Un componente especializado en mostrar el valor final con un diseño destacado.
- **Historial.jsx:** Renderiza la lista de operaciones guardadas mediante el uso de .map().
- **Contact.jsx:** Pagina de contacto maquetada para completar la estructura de navegacion de la web.

## Diseño Responsivo
Uno de los puntos fuertes del proyecto es su capacidad de adaptacion mediante el sistema de rejilla:

- **Calculadora:** En moviles, los campos de entrada se apilan verticalmente (xs=12) para facilitar la escritura, mientras que los botones de operacion se mantienen en una fila para ahorrar espacio.
- **Header:** Implementa un menu hamburguesa (Navbar.Toggle) que esconde las opciones en pantallas pequeñas.
- **Footer:** Utiliza una distribucion flexible que pasa de tres columnas en PC a una disposicion vertical en moviles.

## Caracteristicas Adicionales
- Sistema Multi-idioma: Implementacion propia de un diccionario de textos (ES/EN) gestionado a traves de props y estados globales.
- Persistencia: Las operaciones no se pierden al recargar la pagina gracias al uso de localStorage.
- Identificacion Visual: El boton de la operacion activa cambia su estilo automaticamente para que el usuario sepa que funcion esta aplicando.

## Instalacion y Uso
- Clona el repositorio.
- Instala las dependencias.
- Lanza la aplicacion.

Autor: Ruben Cameo Saez