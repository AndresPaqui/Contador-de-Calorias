# React + TypeScript + Vite



# Use Reducer 02 may 2026 (fecha corregida)

Empezamos con el uso de use Reducer para almacenar las actividades junto con su tipo y calorias

### Incio del Reducer
Se empezo creando la carpeta de reducer para tener organizados los reducer y se creo el reducer "activityReducer"

donde se declararon 
- "ActivityActions" que es el type de accions del reduce
- "initialState" que son los estados inciales del reducer
- "ActivityState" es el type que se le asigno a initialState, activities: activity[]. Un arreglo de activity

### Se creo el useReducer en el App.tsx
Se creo el useReducer para crear el state "global" y tener acceso a los props de state y dispatch

### Pasar Props de App.tsx a From.tsx
Se pasaron los props de state y dispatch
- dispatch para poder iniciar la actividad correspondiente 
- se creo el type "FormProps" que lleva los tipos de datos de state y dispatch



# ActivityList 04 may 2026

Se creo el componente "ActivityList" encargado de renderizar las actividades ingresadas por el usuario

### Paso de parametros (state)
Desde el App.tsx se le pasao el parametro state.ativities con el nombre {activities} que contiene todas las actividades ingresadas por el usuario

### Crearcion de un type para los Props
Se creo "ActivityListProps" que es donde se guardan los types de los parametros pasados desde el main.
En este caso solo se imporyo el type "Activity" de types y se le asigno al prop activities como un arreglo.

### Renderización de las caracteristicas 
Se creo un h2 para el titulo y 3 p para renderizar las caracteristicas de la activity.
- category
- categoryName
- calories

### Uso de UseMemo
Se creo una funcion useMemo, la cual se manda a llamar al momento de renderizar la caracteristica "category".
Dicho useMemo revisa cada que "activities" (actividades ingresadas por el usuario) tenga un cambio y retorna el nombre de la categoria seleccionada por el usuario.

# Editar actividades ingresadas 04 may 2026

## Editar

Instalamos la dependencia de heroicons con la linea de comando "npm i @heroicons/react.
Esto para asignar un icono a la accion de editar.

### Modificar el Reducer
- Se agrego un estado mas a nuestro reducer "activeId" el cualvamos a usar para guardar el id del elemento que el usuario quiere editar.
- Se creo la actividad "setActiveId".
- Cambiamos el uso de "if" para las actividades del reducer y lo remplazamos por un switch.

### Dispatch en ActivityList 05 may 2026
- Se envio el dispatch como prop hacia ActivityList.
- Se agrego type de dispatch en "ActivityListProps" y se mando como parametro a la funcion.
- Se mando a llamar al prop "dispatch" desde el boton editActivity. Donde se le paso el "type" (acciona a realizar) "set-activeId" y "payload" (dato a guardar "un arreglo") id: activity.id.

### Editar actividad desde el forumalrio
Una vez conseguido el "id" de la actividad a editar, se llenara el formulario con los datos de la actividad para su posterior edicion.
Se le paso el state general como prop al componente "Form" del cual se va extraer state.activeId.

### Uso de useEffect
Se uso la funcion de useEffect para que cada vez que surgiera un cambio en "state.activeId" se realizara lo siguiente:
- Usar .filter en state.activities para retornar el objeto con el mismo id que "state.activeId" en una variable de nombre "selectedActivity".
- Se seteo setActivity "setActivity(selectActivity)".
- Reflejando asi los valores en el formulario.

### Edicion mediante formulario mediando modificación del Reducer
Se modifico la actividad "save-activity".
- Se creo updatedActivities como un arreglo donde se guardaria el arreglo modificado.
- Se implemento un if, verifica si state.activeId tiene un id o no. Es decir si los datos enviados son para registrar una nueva actividad o modificar una previa.
- se uso .map en state.activities para modificar en objeto que coincidiera con el id de state.activeId, caso contrario que mantuviera el objeto intacto.
- En el return luego se recetea el state.activeId para evitar rescribir infinatemente una misma actvidad.

## Eliminar 10 may 2026

- Se creo un nuevo 'action' 'delete-activity' con un payload de nombre id de tipo Activity['id'].
- Se agrego un caso nuevo al swith con el mismo nombre donde se aplica un .filter a las actividades.
- El .filter devuelve todas las actividades exepto la que coincida con le id del payload.
- El boton quedo listo

### Mensaje cuaando no hay ni comidas ni actividades agregado





