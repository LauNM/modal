# oc-react-modal-lb-2022

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install --save react-modal
    $ yarn add react-modal

## Documentation

``` 
<Modal />
```
### Modal Content

``` 
<Modal>
    <p>Modal Content</p>
    <p>Something else to say</p>
    <button>Click</button>
</Modal>
```

### Open modal

**isOpen** : *Boolean (required)*
``` 
<Modal isOpen=true />
<Modal isOpen=false />
```

### Close Modal

**hasCloseIcon** : *Boolean (default true)*
``` 
<Modal hasCloseIcon=false />
```

**closeIcon** : *SVG, component, icon (default SVG)*
``` 
<Modal closeIcon={ faUserCircle } />
```

**closeModal** : *Function*
``` 
function Component() {

    const [displayModal, setDisplayModal] = useState(false);
    
    return(
    
        <Modal 
            isOpen={ displayModal }
            closeModal={ () => setDisplayModal(false) } 
        />
        
    )
}
```

### Style

**isFullPage** : *Boolean (default false)*
``` 
<Modal isFullPage=true />
```

**modalBackground**: *String or HEX code* 
``` 
<Modal modalBackground="blue" />
<Modal modalBackground="#4287f5" />
```

**header**: *HTML or Component*
```
<Modal header={ <h2>Header Title</h2> } />
```
``` 
const Header = () => {
  return (
    <div>
      <h2>Header Title</h2>
      <p>Header Subtitle</p>
    </div>
  );
}
<Modal header={ <Header /> } />
```

**headerBackgroundColor**: *String or HEX code*
``` 
<Modal headerBackground="grey" />
<Modal headerBackground="#b4c0d4" />
```
**footer**: *HTML or Component*
```
<Modal footer={ <p>This is footer</p> } />
```
``` 
const Footer = () => {
  return (
    <div>
      <p>Footer Text</p>
      <p>Other Footer Text</p>
    </div>
  );
}
<Modal footer={ <Footer /> } />
```

**footerBackgroundColor**: *String or HEX code*
``` 
<Modal footerBackgroundColor="grey" />
<Modal footerBackgroundColor="#b4c0d4" />
```

**divider** : *Boolean (default false) add header and footer divider (only if header and/or footer)*
``` 
<Modal 
    header={ <h2>Header Title</h2> }
    footer={ <p>This is footer</p> }
    divider 
/>
```
