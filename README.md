

# PREGUNTAS TEÓRICAS

[¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?](#lenguaje-javascript)</br>
[¿Cuáles son algunos tipos de datos JS?](#tipos-de-datos)</br>
[¿Cuáles son las tres funciones de String en JS?](#métodos-con-cadenas)</br>
[¿Qué es un condicional?](#expresiones-condicionales)</br>
[¿Qué es un operador ternario?](#operador-ternario)</br>
[¿Cuál es la diferencia entre una declaración de función y una expresión de función?](#declaraciones-de-función-y-expresiones-de-función)</br>
[¿Qué es la palabra clave "this" en JS?](#palabra-clave-this)</br>

</br></br></br></br>





# LENGUAJE JAVASCRIPT

JavaScript, abreviado como JS, es un lenguaje de programación con capacidad para dar vida a aplicaciones en línea, generar experiencias de usuario dinámicas y funcionar en varias plataformas. Admite dos paradigmas de programación: funcional y orientado a objetos. Su uso está muy extendido y está en constante evolución y desarrollo.

![JavaScript logo](/images/javascript_logo.png)

</br>


Pese a que JavaScript guarda parecidos con otros lenguajes de programación, tiene una serie de cualidades especiales que lo hacen destacar del resto. Estas son las principales:

- Rapidez de ejecución
- Predominio en la web
- Versatilidad
- Popularidad

</br>


### RAPIDEZ DE EJECUCIÓN

JavaScript es un lenguaje "interpretado" y no uno "compilado". La mayoría del resto de lenguajes de programación son compilados y eso implica que deben ser compilados en código de máquina como paso previo a ser ejecutados. Por su parte, los lenguajes "interpretados" no necesitan de ese paso y pueden ser ejecutados directamente reduciendo dramáticamente el tiempo necesario para su ejecución.

Su naturaleza interpretada permite que JavaScript pueda ser ejecutado directamente por cualquier navegador web y además hacerlo de una forma rápida y sin esperas.

Otro factor que favorece esta celeridad es que JavaScript es un lenguaje basado en eventos. Esto implica que por muy extenso que sea el código solo se ejecuta cada bloque cuando ha ocurrido el evento correspondiente. Como resultado, cuando se carga un sitio web no es necesario inicializar la totalidad del código, sino el estrictamente necesario. El resto se irá cargando en función de las interacciones del usuario.

</br>


### PREDOMINIO EN LA WEB

JavaScript es el lenguaje de programación del lado del cliente dominante en la web y es usado prácticamente por la totalidad de los sitios web existentes. La principal razón de ello es que JavaScript puede ejecutarse directamente en un navegador y no solo en un servidor.

Los sitios web modernos usan HTML, CSS y JS para el desarrollo front-end. Estos son los únicos lenguajes de codificación que los navegadores reconocen de forma nativa y cada uno maneja un aspecto diferente del desarrollo web. JavaScript se encarga de hacer que los sitios y aplicaciones web sean dinámicos e interactivos. También ofrece a los desarrolladores una variedad de herramientas muy útiles para crear interfaces atractivas y con animaciones.

Otra razón por la que JavaScript está tan consolidado como lenguaje del lado del cliente es por su capacidad para comunicarse con un servidor. Algunas de sus funciones más potentes son las que crean interacciones asíncronas con un servidor remoto y permiten hacerlo en segundo plano sin interrumpir la interacción del usuario.

</br>


### VERSATILIDAD

La versatilidad de JavaScript es una de sus cualidades más valiosas. Se trata de un lenguaje de programación potente y flexible ampliamente utilizado para el desarrollo de todo tipo de software. Podemos verlo en el desarrollo web front-end, back-end, aplicaciones móviles, aplicaciones de escritorio e incluso en el de placas Arduino.

Podemos ver a continuación una tabla comparando las capacidades de desarrollo de varios de los lenguajes de programación más importantes:

![Programming language capabilities comparing table](/images/language_comparing.png)

</br>


Además, JavaScript se integra perfectamente con otros lenguajes de programación. Esta es la razón por la que muchos desarrolladores prefieren usarlo para crear aplicaciones que posteriormente tengan que comunicarse o ser integradas en otros lenguajes informáticos.

Por último, cabe destacar un aspecto negativo respecto a la versatilidad de uso de JavaScript y es que los diferentes navegadores web y dispositivos lo interpretan de forma diferente. Por lo tanto, el código debe ser ejecutado y probado en una variedad de sistemas durante su desarrollo y tener en cuenta los más antiguos que no pueden ser actualizados.


</br>


### POPULARIDAD

Hay dos factores principales por los que JavaScript ha cosechado una gran popularidad: da vida a la web y es fácil de aprender.

![Developer](/images/developer.jpg)

</br>


Por un lado, a medida que el mundo digital evoluciona, Javascript continúa siendo la columna vertebral del desarrollo web. Impulsa la creación de sitios y aplicaciones web que tienen interfaces interactivas, dinámicas y atractivas que son capaces de proporcionar una experiencia de usuario muy positiva.

Por otro, JavaScript es uno de los lenguajes de programación más fáciles de aprender, especialmente para la programación web, y ha sido diseñado para que sea sencillo de entender y utilizar. Tiene una barrera de entrada baja y la disponibilidad de recursos y herramientas de aprendizaje es cada vez mayor.

</br></br></br></br>




# TIPOS DE DATOS

En JavaScript las variables pueden contener datos de cualquiera tipo y es por ello que no se necesita asignar un tipo de valor de antemano. Además, estas pueden cambiar el tipo de dato contenido de forma dinámica.

```js
let variable;

variable = false;
variable = 23;
variable = "Manzana";
variable = null;
```

</br>


Sin embargo, los tipos de datos de JavaScript definen valores inmutables y no pueden alterarse a no ser que sean reasignados. Estos tipos de datos se conocen como *Primitive Values* o valores primitivos.

</br>


Hay básicamente siete tipos de datos a nuestra disposición en JavaScript y son los siguientes:

- Undefined
- Boolean
- Number
- String
- BigInt
- Symbol
- Null

</br>


Para conocer el tipo de dato de una variable podemos usar `typeof`.

```js
console.log(typeof undefined); //undefined

console.log(typeof true); //boolean

console.log(typeof 1.25); //number

console.log(typeof "Hola Mundo"); //string

console.log(typeof 99999n); //bigint

console.log(typeof Symbol()); //symbol

console.log(typeof null); //object
```

</br>


### TIPO UNDEFINED

Una variable a la que no se le ha asignado ningún valor es del tipo Undefined y su valor es `undefined`.

También podemos asignar explícitamente el valor `undefined` a la variable para darle este tipo. 

```js
let nota;
console.log(nota); //undefined

let asistentes = undefined;
console.log(asistentes); //undefined
```

</br>


Cabe destacar que el valor `""` convierte la variable en tipo String y no en Undefined. 

</br>


### TIPO BOOLEAN

Boolean representa una entidad lógica y puede tener dos valores: `true` y `false`. Estos dos valores equivalen a "sí" y "no", "se cumple" y "no se cumple", y son mayormente usados en estructuras condicionales.

```js
valorVerdadero = true;
valorFalso = false;
```

</br>


### TIPO NUMBER

El tipo Number es uno de los dos tipos numéricos disponibles en JavaScript: Number y BigInt.

A diferencia de otros lenguajes de programación en JavaScript no existen los tipos numéricos Int y Float por separado, ambos se incluyen en el tipo Number.

```js
numeroUno = 78;
numeroDos = 1.238;
```

</br>


El tipo Number también puede tomar los valores especiales `+Infinity`, `-Infinity` y `NaN`. El valor `NaN` significa *Not a Number* y representa que el valor no es un número.

```js
valorMuyAlto = +Infinity;
valorMuyBajo = -Infinity;

console.log(53 - "azul"); //NaN
```

</br>


Para comprobar los valores máximos y mínimos que el tipo Number puede representar podemos usar `MAX_VALUE` y `MIN_VALUE`.

```js
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
```

</br>


### TIPO STRING

El tipo String o cadena se utiliza para representar datos textuales y, a diferencia de otros lenguajes de programación, en JavaScript son inmutables. Esto significa que una vez que se crea una cadena esta no puede ser modificarla y por ello debe ser reasignada para cambiar su valor.

Cada elemento de la cadena ocupa una posición determinada por un índice que comienza a partir del valor 0 para el primer elemento. La longitud de una cadena es el número de elementos que contiene.

Podemos usar comillas simples, comillas dobles y tildes invertidas para definir una cadena en JavaScript.

```js
cadena1 = 'Hola Mundo';
cadena2 = "Hola Mundo";
cadena3 = `Hola Mundo`;
```

</br>


Sin embargo, el usar tildes invertidas para definir una cadena proporciona una funcionalidad extendida y permite intercalar variables y expresiones dentro de la cadena usando `${}`.

```js
cantidadPiezas = 5;

console.log(`Quedan ${cantidadPiezas} piezas`) //Quedan 5 piezas
```

</br>



### TIPO BIGINT

El tipo BigInt es uno de los dos tipos numéricos disponibles en JavaScript: Number y BigInt.

Un BigInt se define agregando `n` al final de un número entero.

```js
enteroMuyGrande = 8258725862387289285728n;
console.log(typeof enteroMuyGrande); //bigint
```

</br>

El valor `9007199254740992` es el entero más alto que puede representarse con un tipo de dato Number. Para trabajar de forma segura con valores mayores debemos usar el tipo BigInt.

```js
console.log(9007199254740992 === 9007199254740993); //true

console.log(9007199254740992n === 9007199254740993n); //false
```

</br>


Cabe mencionar que los números de tipo BigInt no se pueden utilizar indistintamente con los de tipo Number.

```js
console.log(9007199254740993n + 2); //ERROR!!
```

</br>


### TIPO SYMBOL

Un dato de tipo Symbol o símbolo representa un valor único. Esto quiere decir que cada vez que creamos uno nuevo este es completamente diferente a cualquier otro símbolo.

```js
const simboloUno = Symbol();
const simboloDos = Symbol();

simboloUno === simboloDos; //false
```

</br>


Los símbolos se utilizan principalmente para crear propiedades de objetos privadas o para crear una forma de nombrar eventos de forma única. Sirven para asegurarnos que creamos una referencia única que nunca entrará en conflicto con otra.

Si se quiere tener control sobre el símbolo creado podemos utilizar `Symbol.for()` y pasar una cadena clave como argumento. Todo símbolo creado a partir de esa cadena clave será idéntico.

```js
const simboloUno = Symbol.for("cadena clave");
const simboloDos = Symbol.for("cadena clave");

simboloUno === simboloDos; //true
```

</br>


### TIPO NULL

El tipo Null representa la ausencia intencional de cualquier valor de objeto y tiene un único valor: `null`. Se trata de un tipo especial de valor primitivo de JavaScript que equivale a "nada", "vacío" o "valor desconocido".

En operaciones booleanas el valor `null` se entiende como `false`.

```js
respuesta = null;

console.log(respuesta ? "Hay respuesta" : "No hay respuesta"); //No hay respuesta
```

</br></br></br></br>




# MÉTODOS CON CADENAS

En JavaScript las cadenas tienen una serie de métodos integrados que nos pueden ser de gran utilidad. Estos métodos implementan acciones que se usan frecuentemente cuando se trabaja con cadenas.

Normalmente, en los lenguajes de programación las cadenas no pueden tener métodos ni propiedades porque no son objetos. Sin embargo, JavaScript trata las cadenas como objetos y cuando creamos una cadena realmente lo que hacemos es crear una instancia del objeto cadena. Es por ello que pueden tener propiedades y ejecutar métodos.

</br>


> **NOTA:**</br>
Es importante destacar que todos los métodos devuelven un valor nuevo y en ningún caso alteran la cadena original.

</br>


### MÉTODO `slice()`

Este método devuelve una nueva cadena con parte de la cadena original. Se deben especificar los índices entre los que se debe extraer la cadena:

```js
let frase = "El veloz murciélago hindú comía feliz cardillo y kiwi.";

console.log(frase.slice(3, 8)); //veloz
console.log(frase.slice(-5, -1)); //kiwi
console.log(frase.slice(26, )); //comía feliz cardillo y kiwi.
```

</br>


### MÉTODO `concat()`

Este método concatena una o mas cadenas a la cadena original:

```js
let frase = "La frase es: "

let parte1 = "El veloz murciélago hindú";
let parte2 = " comía feliz";
let parte3 = " cardillo y kiwi.";

console.log(frase.concat(parte1, parte2, parte3)); //La frase es: El veloz murciélago hindú comía feliz cardillo y kiwi.
```

</br>


### MÉTODO `replace()`

Este método busca la primera coincidencia de una palabra o cadena dentro de la cadena original y la reemplaza por la cadena especificada:

```js
let frase = "El veloz murciélago hindú comía feliz cardillo y kiwi.";

console.log(frase.replace("veloz", "lento")); //El lento murciélago hindú comía feliz cardillo y kiwi.
```

</br>


### MÉTODO `toUpperCase()`

Este método transforma la cadena entera a letras mayúsculas:

```js
let frase = "El veloz murciélago hindú comía feliz cardillo y kiwi.";

console.log(frase.toUpperCase()); //EL VELOZ MURCIÉLAGO HINDÚ COMÍA FELIZ CARDILLO Y KIWI.
```

</br>


### MÉTODO `toLowerCase()`

Este método transforma la cadena entera a letras minúsculas:

```js
let frase = "EL VELOZ MURCIÉLAGO HINDÚ COMÍA FELIZ CARDILLO Y KIWI.";

console.log(frase.toLowerCase()); //el lento murciélago hindú comía feliz cardillo y kiwi.
```

</br>


### MÉTODO `trim()`

Este método elimina los espacios en blanco al inicio y final de la cadena:

```js
let frase = "       Soledad       "

console.log(frase.trim()); //Soledad
```

</br></br>


### LISTA COMPLETA DE MÉTODOS

La cantidad de métodos que podemos realizar con cadenas en JavaScript es amplia. Podemos ver una lista de todos ellos y su descripción a continuación:

</br>


Nombre | Descripción
:----- | :----------
charAt()            | Devuelve el carácter en un índice (posición) especificado
charCodeAt()        | Devuelve el Unicode del carácter en un índice especificado
concat()            | Devuelve dos o más cadenas unidas
endsWith()          | Devuelve si una cadena termina con un valor especificado
fromCharCode()      | Devuelve valores Unicode como caracteres
includes()          | Devuelve si una cadena contiene un valor especificado
indexOf()           | Devuelve el índice (posición) de la primera aparición de un valor en una cadena
lastIndexOf()       | Devuelve el índice (posición) de la última aparición de un valor en una cadena
localeCompare()     | Compara dos cadenas en la configuración regional actual
match()             | Busca un valor o una expresión regular en una cadena y devuelve las coincidencias.
repeat()            | Devuelve una nueva cadena con un número de copias de una cadena
replace()           | Busca un patrón en una cadena y devuelve una cadena donde se reemplaza la primera coincidencia
replaceAll()        | Busca un patrón en una cadena y devuelve una nueva cadena donde se reemplazan todas las coincidencias
search()            | Busca en una cadena un valor o expresión regular y devuelve el índice (posición) de la coincidencia.
slice()             | Extrae una parte de una cadena y devuelve una nueva cadena
split()             | Divide una cadena en una matriz de subcadenas
startsWith()        | Comprueba si una cadena comienza con caracteres específicos
substr()            | Extrae una cantidad de caracteres de una cadena, desde un índice inicial (posición)
substring()         | Extrae caracteres de una cadena, entre dos índices (posiciones) especificados
toLocaleLowerCase() | Devuelve una cadena convertida a letras minúsculas, utilizando la configuración regional del host.
toLocaleUpperCase() | Devuelve una cadena convertida a letras mayúsculas, utilizando la configuración regional del host.
toLowerCase()       | Devuelve una cadena convertida a letras minúsculas
toString()          | Devuelve una cadena o un objeto de cadena como una cadena
toUpperCase()       | Devuelve una cadena convertida a letras mayúsculas
trim()              | Devuelve una cadena con espacios en blanco eliminados
trimEnd()           | Devuelve una cadena con espacios en blanco eliminados del final
trimStart()         | Devuelve una cadena con espacios en blanco eliminados desde el principio
valueOf()           | Devuelve el valor primitivo de una cadena o un objeto de cadena

</br></br></br></br>




# EXPRESIONES CONDICIONALES

Las expresiones condicionales en JavaScript son una estructura de control básica capaz de evaluar una condición y ejecutar líneas de código u omitirlas en función de si esta se cumple o no se cumple.

Las condiciones evaluadas devuelven un valor booleano por lo que solo pueden ser `true` o `false`.

Para definir un condicional se debe usar la palabra clave `if` seguida de la expresión condicional a evaluar dentro de paréntesis. A continuación se agrega el bloque de código a ejecutar en caso de cumplirse la condición. Este bloque debe estar definido dentro de llaves `{}` salvo en el caso de que contenga una única línea de código. 

Vemos un ejemplo a continuación:

```js
cantidadHojas = 12;

if (cantidadHojas < 50) {
      console.log("ALERTA!!!");
      console.log("Quedan pocas hojas");
}
    
//ALERTA!!!
//Quedan pocas hojas
```

</br>


La condición a evaluar también puede ser una variable. Esta puede ser un número o incluso una cadena en cuyo caso solo el número `0` y una cadena vacía `""` serán interpretados como `false`, y cualquier otro valor será evaluado como `true`. Vemos un ejemplo de ello a continuación:

```js
lluvia = true;

if (lluvia)
      console.log("Está lloviendo");

//Está lloviendo
```

</br>


### OPERADORES DE COMPARACIÓN

Existen varios tipos de operadores para poder comparar expresiones y se muestran en la siguiente tabla:

Símbolo | Operación
:-----: | ---------
== | igual
!= | no Igual
< | menor que
<= | menor o igual que
\> | mayor que
\>= | mayor o igual que
</br>

Podemos ver varios ejemplos a continuación:

```js
console.log("abc" == "ABC") //false

console.log("Entrar" != "Salir") //true

console.log(3 < 8) //true

console.log(7 <= 5) //false

console.log("a" > "z") //false

console.log(4 >= 4) //true
```

</br>


### ELSE IF

En caso de que la primera condición no se cumpla y deseemos agregar condiciones alternativas a evaluar podemos hacerlo mediante la palabra clave `else if`.

Se pueden añadir tantos bloques `else if` como se desee pero estos se evalúan en el orden en el que han sido definidos en el condicional y en ningún caso se ejecutará más de uno. El primero en cumplir la condición será el único ejecutado.


```js
porcentajeCarga = 43;

if (porcentajeCarga < 5)
      console.log("Queda muy poca batería");
    
else if (porcentajeCarga < 25)
      console.log("Queda menos del 25% de la batería");

else if (porcentajeCarga < 50)
      console.log("Queda menos del 50% de la batería");

else if (porcentajeCarga < 75)
      console.log("Queda menos del 75% de la batería");

//Queda menos del 50% de la batería
```
</br>


### ELSE

Podemos agregar un bloque de código que se ejecute en caso de que no se cumpla ninguna de las condiciones anteriores. Para ello debemos hacer uso de la palabra clave `else` sin ninguna condición asociada.

Solo puede haber un bloque `else` en un condicional y siempre debe estar definido al final de este. Podemos ver un ejemplo a continuación:

```js
colorObjeto = "morado"

if (colorObjeto == "azul")
      console.log("El objeto es azul");
    
else if (colorObjeto == "rojo")
      console.log("El objeto es rojo");
    
else
      console.log("El objeto no es ni azul ni rojo");
    
//El objeto no es ni azul ni rojo
```

</br>


### OPERADORES LÓGICOS

Estos operadores evalúan dos condiciones y devuelven `true` en función de la operación representada. En el caso de la  operación NOT solo se evalúa una condición. Podemos ver en la tabla siguiente la operación realizada por cada uno:

Nombre | Operador | Descripción
:-------: | :-------: | ---------
AND | && | ambas condiciones se cumplen
OR | \|\| | al menos una de las dos condiciones se cumple
NOT | ! | la condición no se cumple
</br>


A continuación se muestran algunos ejemplos de su uso:

```js
console.log(true && true) //true
console.log(true && false) //false
console.log(false && false) //false

console.log(true || true) //true
console.log(true || false) //true
console.log(false || false) //false

console.log(!true) //false
console.log(!false) //true
```

</br>


Vemos el uso de la operación lógica NOT en el siguiente condicional:

```js
accesoPermitido = false;

if (!accesoPermitido)
      console.log("No puedes pasar");
    
//No puedes pasar
``` 
</br>


Podemos usar operadores lógicos para crear condicionales compuestos que nos permiten evaluar múltiples condiciones a la vez. Vemos un ejemplo a continuación:

```js
alturaViajero = 120;
edadViajero = 9;

if (alturaViajero >= 130 || edadViajero >= 8)
      console.log("El viajero puede montarse en la atracción");

else
      console.log("El viajero no puede montarse en la atracción");
    
//El viajero puede montarse en la atracción
```

</br>


### CONDICIONAL SWITCH

En ocasiones es necesario evaluar una variable y ejecutar un código concreto en función de su valor. Para estos casos puntuales las estructura *if-else* resultan poco eficientes y su código difícil de leer, sobre todo cuando las opciones son muchas. Es por ello que JavaScript nos permite usar una expresión condicional alternativa llamada `switch` y que resulta óptima para esos casos.

En un condicional `switch` una variable es evaluada y se comprueba si coincide con alguno de los valores definidos en él. En caso de que exista esa correspondencia se ejecuta el código correspondiente a ese valor en concreto.

Para su definición se usa la palabra clave `switch` junto con la variable a evaluar dentro de paréntesis. El resto del código contiene los diferentes casos posibles y debe estar declarado dentro de llaves `{}`. Cada caso se define con la palabra clave `case` seguido del valor, el signo `:` y todo el código correspondiente a ejecutar. Se pueden definir tantos casos como se quiera y cada uno de estos debe finalizar con la sentencia `break` que se encarga de romper el flujo del condicional `switch` y continuar con el resto del programa.

También se puede especificar un caso especial `default` que será el ejecutado por defecto en caso de no haber ninguna coincidencia con el resto de casos.

</br>


Vemos un ejemplo de un condicional `switch` a continuación:

```js
let díaSemana = "Jueves";

switch (díaSemana) {
      case "Lunes":
            console.log("Es lunes");
            break;
            
      case "Martes":
            console.log("Es martes");
            break;
            
      case "Miércoles":
            console.log("Es miércoles");
            break;
            
      case "Jueves":
            console.log("Es jueves");
            break;
            
      case "Viernes":
            console.log("Es viernes");
            break;

      default:
            console.log("Es fin de semana");
}
```

</br>


En ocasiones puede resultar útil ejecutar el código correspondiente a varios casos para algunos casos en concreto. Para ello podemos prescindir de la sentencia `break` en los casos cuyo código deba extenderse al del siguiente caso. Vemos su uso práctico en el siguiente ejemplo:

```js
let accesoVIP = accesoPremium = AccesoBasic = "NO PERMITIDO";

let categoríaSocio = "Premium";

switch (categoríaSocio) {
      case "VIP":
            accesoVIP = "PERMITIDO";
            
      case "Premium":
            accesoPremium = "PERMITIDO";
            
      case "Basic":
            accesoBasic = "PERMITIDO";
            break;
}

console.log(`Acceso a instalaciones VIP: ${accesoVIP}`)
console.log(`Acceso a instalaciones premium: ${accesoPremium}`)
console.log(`Acceso a instalaciones básicas: ${accesoBasic}`)

//Acceso a instalaciones VIP: NO PERMITIDO
//Acceso a instalaciones premium: PERMITIDO
//Acceso a instalaciones básicas: PERMITIDO
```

</br></br></br></br>




# OPERADOR TERNARIO

Un operador ternario es un tipo de condicional usado en JavaScript que nos permite escribir una expresión *if-else* de forma abreviada en una sola línea. En él se evalúa una única condición y dependiendo del resultado se ejecuta una de las dos expresiones definidas. La primera expresión corresponde al valor `true` y la segunda al valor `false`.

El operador ternario es el único operador de JavaScript que tiene tres operandos.

</br>


### SINTAXIS

La estructura de un operador ternario es la siguiente:

```js
condición ? expresión1 : expresión2
```

</br>

- **condición** - es la condición evaluada como `true` o `false`
- **expresión1** - es la expresión ejecutada si el resultado es `true`
- **expresión2** - es la expresión ejecutada si el resultado es `false`

</br>


A continuación podemos ver un ejemplo del uso de un operador ternario:

```js
let edad_usuario = 27

console.log(edad_usuario >= 18 ? "El usuario es mayor de edad" : "El usuario es menor de edad");
//El usuario es mayor de edad
```

</br>


### USOS FRECUENTES

El operador ternario es una herramienta muy versátil y se puede usar de múltiples formas. A continuación se exponen algunas de las más frecuentes.

</br>


##### ASIGNACIÓN DE VARIABLES

Se pueden asignar variables dependiendo del resultado de la condición ternaria:

```js
let número = 3;

let esImpar =  número % 2 ? true : false;

console.log(esImpar); //true
```

</br>


##### SELECTOR DE CÓDIGO

Se pueden usar operaciones ternarias directamente en el código con el propósito de ejecutar diferentes comandos en fución de una condición:

```js
let permiso = true;

permiso ? console.log("Eres bienvenido") : alert("Intruso detectado!!"); //Eres bienvenido
```

</br>


##### OPERADORES TERNARIOS ANIDADOS

Es posible realizar evaluaciones ternarias múltiples utilizando operadores ternarios dentro de las expresiones a ejecutar por otros operadores ternarios:

```js
let fruta = "manzana";
let color = "verde";

fruta != "manzana"
      ? console.log("No es una manzana")
      : color == "verde"
            ? console.log("Es una manzana verde")
            : console.log("Es una manzana pero no es verde");
      ; //Es una manzana verde
```

</br>


##### MÚLTIPLES COMANDOS

Podemos utilizar paréntesis y separar con comas varios comandos para que sean ejecutados dentro de la misma expresión del operador ternario:

```js
let num1, num2, num3;
let valoresAsignados = false;

!valoresAsignados
  ? (num1 = 10 , num2 = 20, num3 = 30)
  : (num1 += 1 , num2 += 2 , num3 += 3);
 
console.log(num1, num2, num3); //10 – 20 – 30
```

</br></br></br></br>




# DECLARACIONES DE FUNCIÓN Y EXPRESIONES DE FUNCIÓN

Tanto las declaraciones como las expresiones de función se definen usando la palabra clave `function` y aceptan los mismos tipos de parámetros. Sin embargo, El uso de cada una de las dos formas para definir una función resulta adecuada en situaciones diferentes. 

A continuación se analizan las principales diferencias que existe entre el uso de ambas en JavaScript.

</br>


### SINTAXIS

Como es lógico una de las principales diferencias es la estructura de su definición.

</br>


- **DECLARACIÓN DE FUNCIÓN:** Se define de forma independiente dentro del programa.

```js
function funciónSuma(num1, num2) {
      return num1 + num2;
}

console.log(funciónSuma(5, 6)); //11
```

</br>


- **EXPRESIÓN DE FUNCIÓN:** La función es asignada a una variable en su definición.

```js
const variableSumar = function (num1, num2) {
      return num1 + num2;
}

console.log(variableSumar(5, 6)); //11
```

</br>


### NOMBRE

El nombre de la función nos permite hacer referencia a ella y llamarla.

</br>


- **DECLARACIÓN DE FUNCIÓN:** Una declaración de función necesita siempre de un nombre ya que es la única forma para poder llamarla dentro del programa.

</br>


- **EXPRESIÓN DE FUNCIÓN:** En una expresión de función se puede prescindir del nombre ya que va asociada a una variable. Es por ello que también suelen conocerse como funciones "anónimas" o "sin nombre".

</br>


También podemos crear una expresión de función con nombre. Esto nos permite hacer referencia a la propia función dentro de su cuerpo. Podemos verlo en el siguiente ejemplo:

```js
const variableContenedora = {
      cuentaAtras: function descontar(n) {
            console.log(n);
            if (n > 1) 
                  return descontar(n - 1);
            
      }
};

variableContenedora.cuentaAtras(3);
//3
//2
//1
```

</br>


### HOISTING

El concepto de *hoisting* o izado en JavaScript se refiere a la disponibilidad de las funciones antes de haber sido declaradas. Las funciones se inicializan en el momento de la compilación y están disponibles en cualquier parte del programa.

</br>


- **DECLARACIÓN DE FUNCIÓN:** Se benefician del *hoisting* y por ello pueden ser llamadas antes de haber sido definidas.

```js
console.log(funciónSuma(5, 6)); //11

function funciónSuma(num1, num2) {
      return num1 + num2;
}
```

</br>


- **EXPRESIÓN DE FUNCIÓN:** Al estar asociadas a una variable nunca pueden ser usadas antes de haber sido declarada la variable.

```js
console.log(variableSumar(5, 6)); //ERROR!!

const variableSumar = function (num1, num2) {
      return num1 + num2;
}
```

</br>


### SCOPE

El *scope* o ámbito de la función determina en qué partes del programa se pueden usar y es una de las propiedades clave que diferencia a las declaraciones de función y las expresiones de función.

</br>


- **DECLARACIÓN DE FUNCIÓN:** Resultan idóneas para un uso en el ámbito global debido a tener un nombre y el *hoisting*. Al estar disponibles en todo el programa pueden llamarse desde cualquier punto del mismo.

</br>


- **EXPRESIÓN DE FUNCIÓN:** Su uso es muy útil para ámbitos locales en los que no se necesita que las funciones estén accesibles al resto de programa.

</br>


También puede crearse y llamarse instantáneamente a una función permaneciendo completamente anónimas para el resto del código.

```js
(function () {
      console.log("Hola Mundo!!");
})();
```

</br>


### CALLBACK

Una función *callback* es aquella que es pasada como argumento a otra función para que sea "llamada de nuevo" en un momento posterior. Esta otra función contiene la lógica para determinar cuándo se ejecuta la función *callback*.

</br>


- **DECLARACIÓN DE FUNCIÓN:** Debido al ámbito global de una declaración de función esta puede ser llamada desde dentro de cualquier función, por lo que no es necesario pasarla como un argumento.

</br>


- **EXPRESIÓN DE FUNCIÓN:** Normalmente la función *callback* solo debe ser llamada dentro de la función a la que es pasada por lo que resulta adecuado usar una expresión de función para ello.

</br>


El siguiente ejemplo es un uso muy común de una expresión de función como *callback* en el manejo de eventos:

```js
button.addEventListener("click", function (event) {
      console.log("El botón ha sido pulsado!");
});
```

</br></br></br></br>




# PALABRA CLAVE THIS

En términos generales, la palabra clave `this` hace referencia al objeto que está ejecutando el fragmento de código actual.

Cuando `this` está definido dentro de una función el objeto al que hace referencia depende del contexto en el que la función es llamada. Al usar la misma función en contextos diferentes la palabra clave `this` hará referencia a diferentes objetos. Lo que realmente determina el objeto al que `this` hace referencia es dónde se invoca a la función y no dónde es definida esta.

</br>

Podemos ver los principales contextos en los que se puede invocar una función que haga uso de `this` a continuación:

- Ámbito global
- Método de objeto
- Constructor
- Función `call()`

</br>


### ÁMBITO GLOBAL

Cuando hacemos uso de `this` en el ámbito global este siempre hace referencia al objeto Window que contiene la página web.

```js
console.log(this); //Window
```

</br>


De igual forma, si una función que contenga la palabra clave `this` en su cuerpo es llamada directamente en el programa esta también hace referencia al objeto Window.

```js
function agregarNota() {
      this.nota = `'this' se refiere a mí: ${this}`
};

agregarNota();

console.log(window.nota); //'this' se refiere a mí: [object Window]
```

</br>


### MÉTODO DE OBJETO

Si la función es invocada como un método de un objeto, `this` hace referencia al propio objeto que la invoca.

```js
function describir() {
      console.log(`El ${this.nombre} tiene ${this.caras} caras`);
}

const dodecaedro = {
  nombre: "dodecaedro",
  caras: 12,
  describir : describir,
};

const icosaedro = {
  nombre: "icosaedro",
  caras: 20,
  describir : describir,
};

dodecaedro.describir(); //El dodecaedro tiene 12 caras

icosaedro.describir(); //El icosaedro tiene 20 caras
```

</br>


### CONSTRUCTOR

Cuando usamos `this` dentro de un constructor este hace referencia al nuevo objeto creado mediante la palabra clave `new`.

```js
class Rectángulo {
      constructor(alto, ancho) {
            this.alto = alto;
            this.ancho = ancho;
      }
};

const miRectángulo = new Rectángulo(3, 7);

console.log(`Rectángulo de ${miRectángulo.alto}cm de alto y ${miRectángulo.ancho}cm de ancho`);
//Rectángulo de 3cm de alto y 7cm de ancho
```

</br>


### FUNCIÓN CALL

Con la función `call()` podemos definir de forma explícita a qué objeto debe hacer referencia la palabra clave `this`. Toda función creada tiene predefinido el método `call()`. El primer argumento pasado siempre es el objeto al que queremos que haga referencia y el resto son los parámetros de la función invocada si los hay.

```js
function darBienvenida(materia) {
      console.log(`Hola ${this.nombre}, bienvenido a la clase de ${materia}`);
}

const profesor = {
      nombre: "Pablo",
      saludar: darBienvenida,
}

const alumno = {
      nombre: "Jorge",
}

profesor.saludar.call(alumno, "química");
//Hola Jorge, bienvenido a la clase de química
```