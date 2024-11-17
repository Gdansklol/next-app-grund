## 5  Dynamic routing
ex: path href="/read/1"
  <li><Link href="/read/1">HTML</Link></li>
1. Create a read folder under the app folderCreate a read folder under the app folder
2. I want to give a name called ID to the segment labeled 1.
3. The ID in square brackets under the folder name, [id]
4. And then create a page.js file underneath it.
5. src/app/read/[id]/page.js

page.js
** parameters: {props.params.id}** --->
http://localhost:3000/read/2 

```js
export default function Read(props) {
    return (
        <>
        <h2>Read</h2>
        parameters: {props.params.id}
        </>
    )
}
```

## 6. Singel Page Application
: An application that behaves as if a web page is one page, even though it consists of multiple pages, is called a single-page application.

- Server Side Rendering

## 7. Static resource
- Public, Using static resources, Adding image resources in the public folder.
public/hello.png

src/app/layout.js
```js
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// Content
import Image from "next/image";

export default function Home() {
  return (
    <>
    <h1>Welcome</h1>
    <h2>Hello, WEB!</h2>
    <br></br>
    <Image 
        src="/hello.png" 
        alt="Hello Image" 
        width={200} 
        height={200} 
      />
    </>
  );
}

```

## 8. CSS

## 9. backend (json-server)
1. create api 
2. Route Handlers :(https://nextjs.org/docs/app/building-your-application/routing/route-handlers
)

3. But I will use json-server 

```bash
npx json-server --port 9999 --watch db.json
```
- Kör JSON Server
Nu när filen existerar, kör:

bash
npx json-server --port 9999 --watch db.json

- Förklaring av nyckelbegrepp:
--port 9999: Startar JSON Server på port 9999.
--watch db.json: Övervakar ändringar i db.json och uppdaterar servern automatiskt. (I JSON Server 1+ är detta standard och kan utelämnas.)

- För att kontrollera andra resurser, gå till http://localhost:9999/comments.


```bash
npx json-server --port 9999 --watch db.json

```
- Communicating with the server from the DevChang console
- fetch.then()


