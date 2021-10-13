self.addEventListener("install", event => {
    console.log("sw instalado")
});

self.addEventListener('fetch', event => {

    // const respOff = new Response(`
    //     Bienvenido a la página
    //     para usar la app necesitas internet
    // `)

    // const respOffHTML = new Response(`
    //     <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <title>Document</title>
    //     </head>
    //     <body>
    //         <h1>Bienvenido a la página offline</h1>
    //         <p>Para usar la app necesitas internet</p>
    //     </body>
    //     </html>
    // `,
    // {
    //     headers: {
    //         'Content-Type': 'text/html'
    //     }
    // })

    const responseOffFile = fetch('views/offline.html')

    const response = fetch(event.request)
    .catch( () => {
        console.log("error en la petición")
        return responseOffFile;
    })
    
    event.respondWith(response)
})