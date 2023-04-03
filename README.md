[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/fmDo8ROl)
# Práctica 9

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-edurguezsb/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-edurguezsb?branch=master)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-edurguezsb&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-edurguezsb)


En esta actividad, la Práctica 9 de la asignatura, se nos plantea realizar una aplicación que nos ayudará a almacenar la información sobre los funkos de un usuario, todo esto gracias a que vamos a trabajar como almacenar la información en un JSON al igual que tuvimos que hacer en la práctica anterior realizada en grupo. También, al igual que llevamos haciendo en prácticas anteriores hasta ahora, a parte de llevar a cabo una buena estructura y organización de ficheros y directorios, no debemos olvidarnos de utilizar los principios SOLID,sus pruebas TDD o BDD para confirmar el correcto funcionamiento del código desarrollado, todo el código con comentarios tipo TypeDoc, cubrimiento de código con Istanbul y Coveralls, Sonar Cloud para analizar la calidad, y los github actions.

Los objetivos de esta práctica son seguir familiarizándonos con el manejo de las herramientas mencionadas anteriormente ya que son bastante fundamentales a la hora de realizar un proyecto en TypeScript para asegurarnos de que nuestra solución es buena, y que serán necesarios para el correcto desarrollo y avance en la asignatura de Desarrollo de Sistemas Informáticos, junto con lo ya trabjado en prácticas anteriores, y lo que iremos viendo en las próximas semanas.


También será explicado a continuación el ejercicio realizado en clase en el grupo PE103, y depués el de los Funkos:

## Ejercicio PE103

### Enunciado

- Desarrolle los siguientes ejercicios en un proyecto alojado en un nuevo repositorio de GitHub:
Suponga que tiene que utilizar un algoritmo para extraer información de ficheros que contienen información sobre una instancia del problema de la mochila. El inconveniente es que los ficheros se encuentran en diferentes formatos: CSV y JSON.
El formato de uno de los ficheros CSV es el siguiente. En la primera línea, un valor numérico que especifica la capacidad de la mochila; en la segunda línea, un valor que especifica el número de elementos n de la mochila; y, a continuación, n líneas, donde cada línea tiene el número de elemento, peso y beneficio separado por comas.
El formato de uno de los ficheros JSON es el siguiente: una propiedad "capacidad", con la capacidad de la mochila, una propiedad "numElementos", con el número de elementos de la mochila y, luego, una propiedad "elementos" que consiste en un array de objetos, donde cada objeto contiene las propiedades "númElemento", "peso" y "beneficio".
Escriba una clase con un método de plantilla que consista en un único paso "procesar", que lleve a cabo la lectura de un fichero CSV o un fichero JSON con los formatos anteriormente especificados y que devuelva dos arrays: uno con los beneficios de los elementos de la mochila y otro con los pesos de los elementos de la mochila. El método de plantilla también deberá hacer uso de dos métodos de enganche o hooks.

#### Código

- En el directorio src/PE103/Prueba tenemos ```Prueba.ts```:

```TypeScript
import { Mochila } from '../Mochila/Mochila';

const mochila = new Mochila();

const [beneficios, pesos] = mochila.procesar('./a.csv');
console.log(beneficios); // [20, 10, 25, 8, 35]
console.log(pesos); // [10, 5, 12, 6, 15]

const [beneficios2, pesos2] = mochila.procesar('./a.json');
console.log(beneficios2); // [20, 10, 25]
console.log(pesos2); // [10, 5, 12]
```

Se importa una clase ```Mochila``` desde el archivo '../Mochila/Mochila'. Luego, crea una instancia de ```Mochila``` y la almacena en la variable ```mochila```.

A continuación, el código llama al método ```procesar``` de ```mochila``` dos veces: una vez con el argumento './a.csv' y otra vez con el argumento './a.json'.

Cada vez que se llama al método ```procesar```, devuelve dos arrays: uno llamado ```beneficios``` y otro llamado ```pesos```.

Finalmente, el código imprime los valores de los arrays ```beneficios``` y ```pesos``` devueltos por cada llamada a ```procesar```. En el primer caso, los arrays contienen los valores [20, 10, 25, 8, 35] y [10, 5, 12, 6, 15], y en el segundo caso, los arrays contienen los valores [20, 10, 25] y [10, 5, 12].


- En el directorio src/PE103/Mochila tenemos ```Mochila.ts```:

```TypeScript
import * as fs from 'fs';

/**
 * Clase Mochila
 * @param capacidadMochila capacidad de la mochila
 * @param elementos elementos que se pueden meter en la mochila
 * @param leerArchivoCSV leer un archivo CSV
 * @param leerArchivoJSON leer un archivo JSON
 * @param procesar procesar un archivo
 */
export class Mochila<T extends { peso: number; beneficio: number }> {
  private capacidadMochila: number = 0;
  private elementos: T[] = [];

  constructor() {}

  /**
   * Método que lee un archivo CSV
   * @param ubicacion ubicación del archivo
   */
  private leerArchivoCSV(ubicacion: string): void {
    // Importamos el módulo fs
    const archivo = fs.readFileSync(ubicacion, 'utf-8');
    const lineas = archivo.trim().split(/\r?\n/);
    this.capacidadMochila = Number(lineas[0]);
    const numElementos = Number(lineas[1]);
    for (let i = 2; i < numElementos + 2; i++) {
      const [peso, beneficio] = lineas[i].trim().split(/\s+/).map(Number);
      this.elementos.push({ peso, beneficio } as T);
    }
  }

  /**
   * Método que lee un archivo JSON
   * @param ubicacion ubicación del archivo
   */
  private leerArchivoJSON(ubicacion: string): void {
    // Importamos el módulo fs
    const archivo = fs.readFileSync(ubicacion, 'utf-8');
    const { capacidad, numElementos, elementos } = JSON.parse(archivo);
    this.capacidadMochila = capacidad;
    for (const elemento of elementos) {
      const { númElemento, peso, beneficio } = elemento;
      this.elementos.push({ peso, beneficio } as T);
    }
  }

  /**
   * Método que procesa un archivo CSV o JSON
   * @param ubicacion ubicación del archivo a procesar
   * @returns un array con los beneficios y pesos de los elementos de la mochila
   * @throws un error si el formato del archivo no es válido
   */
  public procesar(ubicacion: string): [number[], number[]] {
    // Importamos el módulo fs
    const extension = ubicacion.split('.').pop();
    switch (extension) {
      case 'csv':
        this.leerArchivoCSV(ubicacion);
        break;
      case 'json':
        this.leerArchivoJSON(ubicacion);
        break;
      default:
        throw new Error(`El formato del archivo ${ubicacion} no es válido`);
}

    const beneficios: number[] = [];
    const pesos: number[] = [];
    for (const elemento of this.elementos) {
      beneficios.push(elemento.beneficio);
      pesos.push(elemento.peso);
    }
    return [beneficios, pesos];
  }
}
```

Se define una clase llamada ```Mochila```. La clase tiene una propiedad privada ```capacidadMochila``` que representa la capacidad de la mochila y una propiedad privada ```elementos``` que es un array de objetos con propiedades ```peso``` y ```beneficio```. La clase tiene tres métodos privados ```leerArchivoCSV```, ```leerArchivoJSON``` y ```procesar```, y un ```constructor``` vacío.

El método ```leerArchivoCSV``` lee un archivo CSV en la ubicación dada y carga los datos en la propiedad ```elementos```. El método ```leerArchivoJSON``` lee un archivo JSON en la ubicación dada y carga los datos en la propiedad ```elementos```. El método ```procesar``` toma una ubicación de archivo y procesa el archivo usando los métodos ```leerArchivoCSV``` o ```leerArchivoJSON``` según la extensión del archivo. Si el formato del archivo no es válido, lanza un error.


También se realizaron pruebas con Mocha y Chai que fueron debidamente superadas:

```
  Mochila
    procesar
      ✔ debería leer un archivo CSV correctamente
      ✔ debería leer un archivo JSON correctamente
      ✔ debería lanzar un error si el formato del archivo no es válido


  3 passing (38ms)

-----------------|---------|----------|---------|---------|-------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------|---------|----------|---------|---------|-------------------
All files        |     100 |      100 |     100 |     100 |                   
 PE103/Mochila   |     100 |      100 |     100 |     100 |                   
  Mochila.ts     |     100 |      100 |     100 |     100 |                   
-----------------|---------|----------|---------|---------|-------------------
```
































By:
```
EEEEEEEEEEEEEE   DDDDDDDDDDDDD         UUUUUUU       UUUUUUU
E::::::::::::E   D:::::::::::::D       U:::::U       U:::::U
E::::::::::::E   D:::::::::::::::D     U:::::U       U:::::U
EE:::::::EEEEE   DDD::::DDDDD:::::D    U:::::U       U:::::U
  E:::::E         D:::::D    D:::::D   U:::::U       U:::::U 
  E:::::E         D:::::D     D:::::D  U:::::U       U:::::U 
  E::::::EEEEEEE  D:::::D     D:::::D  U:::::U       U:::::U 
  E::::::::::::E  D:::::D     D:::::D  U:::::U       U:::::U 
  E::::::::::::E  D:::::D     D:::::D  U:::::U       U:::::U 
  E::::::EEEEEEE  D:::::D     D:::::D  U:::::U       U:::::U 
  E:::::E         D:::::D     D:::::D  U:::::U       U:::::U 
  E:::::E         D:::::D    D:::::D   U::::::U     U::::::U 
EE:::::::EEEEE   DDD::::DDDDD:::::D     U:::::::UUU:::::::U 
E::::::::::::E   D:::::::::::::::D       UU:::::::::::::UU  
E::::::::::::E   D:::::::::::::D           UU:::::::::UU    
EEEEEEEEEEEEEE   DDDDDDDDDDDDD               UUUUUUUUU  
```