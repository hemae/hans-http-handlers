# hans-http-handlers
http handlers for express

## Table of contents
* [Installing](#installing)
* [Example](#example)
* [Handlers](#handlers)

<a name="installing"><h2>Installing</h2></a>
Add the package to your project
```
npm i hans-http-handlers
```
using yarn
```
yarn add hans-http-handlers
```


<a name="example"><h2>Example</h2></a>

Export handlers from *hans-http-handlers*

```javascript
const {error500, error401, status201} = require('hans-http-handlers')
```
using TypeScript
```typescript
import {error500, error401, status201} from 'hans-http-handlers'
```  

```typescript
async function anyController(res: Response, req: Request) {
    try {
        
        
        if ('some unauthorized condition') return error401(res)

        const data = {}
        
        status201(res, data)
    } catch (e: any) {
        error500('any controller', res, e, __filename)
    }
```

<a name="handlers"><h2>Handlers</h2></a>

```
    status200(res: Response, data: Record<string, any> | null)
```
```
    status200Message(res: Response, message: string)
```
```
    status201(res: Response, data: Record<string, any>)
```
```
    error400(res: Response, message?: string, additionalErrors?: Record<string, any>)
```
```
    error401(res: Response, message?: string)
```
```
    error403(res: Response, message?: string)
```
```
    error500(initiator: string, res: Response, e: any, file: string)
```
