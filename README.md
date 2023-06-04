# GlamourXpressions

Es una tienda en online que ofrece perfumes y productos cosméticos.

## Caracteristicas principales 🔥

_Login y Registro de usuario_: Lo puedes realizar a través de una dirección de correo electrónico o con una cuenta de Google.

_Comunicación en redes sociales y contacto_: Se incluyen iconos de redes sociales y correo electrónico.

_Productos (Shop)_: En esta sección se puede explorar todos los productos disponibles. Y utilizar filtros para buscar por nombre, categoría y precio.

_New Arrivals_: En la página de inicio, se pueden descubrir las últimas novedades de la tienda.

_Carrito de compras_: En el carrito se puede ver un resumen de los productos seleccionados, ajustar las cantidades, eliminar productos individuales o vaciar completamente el carrito.

_Checkout_: Aquí podes proceder al proceso de pago. Si bien la funcionalidad de pago no está activada en este momento, desde el checkout se pueden completar los datos necesarios para el proceso de compra, como la dirección de envío etc.

## Tecnologías utilizadas en este proyecto

Javascript

Firebase

Reactjs

React Hook Forms

React Router DOM

Chakra UI

React Icon

Vitejs

## Instrucciones de instalación 🔧

- Necesitas clonar el repo
  https://github.com/poliferreyra/project-Ecommerce.git

- Luego, instalar todas las dependencias necesarias.

- Cuando crees tu proyecto en Firebase se van generan variables de entorno con claves propias.

Deberás crear un archivo `.env` en la raiz del proyecto y hace una copia de las mismas.

Puede usar el archivo `.env.example` como ejemplo y copiar ahi las claver proporcionadas.
Estas son las que luego se van a importar en tu archivo config.js

`const firebaseConfig = {`

` apiKey: import.meta.env.VITE_FIREBASE_KEY,`

`  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,`

`  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,`

`  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,`

`  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,`

`  appId: import.meta.env.VITE_FIREBASE_APP_ID,`

`}`

- Por último ejecuta `npm run dev` y podras acceder a la aplicación el tu localhost.

## Pasos para hacer el deployed en Vercel

- Sube tu proyecto a Github (o al repositorio que utilices).
- En el panel de control de Vercel, haz clic en el botón "New Project" para agregar un nuevo proyecto.
- Selecciona la opción para importar tu proyecto desde un repositorio en Git (en mi caso GitHub).
- IMPORTANTE! en las configuraciones del proyecto necesitas hacer una copia de tus variables de entorno.
  Entra en `Environment Variables` y copialas (podes hacerlo de a una o bien todas juntas en el campo name).
- Por último genera el deployed

## Agradecimientos 💖

Agradezco a ADA ITW por brindarme la oportunidad de aprender y formarme como Desarrolladora Frontend.  
Gracias a esta formación adquiri competencias necesarias para diseñar y desarrollar aplicaciones web atractivas y funcionales.

GRACIAS!!! a mis docentes por su dedicación, conocimientos y fundamentalmente paciencia para enseñar y brindarme teoria, mejores practicas y todos los `plus` que compartieron con nosotras.

A mis compañeras 💗 que estuvieron siempre apoyandome. Con quienes hicimos frente a los desafios, compartiendo conocimientos y celebrando nuestros exitos 🎉✨

E inmensas GRACIAS a mis familia!! por su apoyo constante e incondicional. Por creer en mi y alentarme a perseguir mis sueños. 💖

Autora

Poli Ferreyra

_Te invito a visitar la tienda !!_ 😉👉
https://project-ecommerce-black.vercel.app/
