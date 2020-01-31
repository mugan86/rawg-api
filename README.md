# rawg-api-graphql

Introduce el contenido de tu README

Dentro de tsconfig.json en **compilerOptions**

```"plugins": [
    {
    "name": "typescript-tslint-plugin"
    }
],
```

Instalar **typescript-tslint-plugin**

```
npm install -D typescript-tslint-plugin
```

Crear el fichero tslint.json con unas normas básicas

```
{
    "rules": {
        "no-any": true, // No permitir que se use any
        "curly": true,  // necesario cerrar con llaves if / else / for / do / while
        "quotemark": [true, "double"] // Dobles comillas
    }
}
```