# React + TypeScript + Vite



## Use Reducer 02 may 2026 (fecha corregida)

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

## ActivityList 04 may 2026

Se creo el componente "ActivityList" encargado de renderizar las actividades ingresadas por el usuario

### Paso de parametros (state)
Desde el App.tsx se le pasao el parametro state.ativities con el nombre {activities} que contiene todas las actividades ingresadas por el usuario

### Crearcion de un type para los Props
Se creo "ActivityListProps" que es donde se guardan los types de los parametros pasados desde el main.
En este caso solo se imporyo el type "Activity" de types y se le asigno al prop activities como un arreglo.

### Renderización de las caracteristicas 
Se creo un h2 para el titulo y 3 p para renderizar las caracteristicas de la activity 
- category
- categoryName
- calories

### Uso de UseMemo
Se creo una funcion useMemo, la cual se manda a llamar al momento de renderizar la caracteristica "category"
Dicho useMemo revisa cada que "activities" (actividades ingresadas por el usuario) tenga un cambio y retorna el nombre de la categoria seleccionada por el usuario

