# React CopyWeasel

A React client for CopyWeasel, a micro-CMS copy manager.

## Installation

Install with either `yarn` or `npm`:

``` bash
yarn add react-copyweasel
```

or

``` bash
npm i react-copyweasel
```

## Usage

`react-copyweasel` depends on the addition of a context provider in
your React tree. The provider takes an API key for your CopyWeasel
account:

``` javascript
import {CopyProvider} from 'react-copyweasel'

const COPYWEASEL_API_KEY = '...'

function MyApp({children}) {
  return (
    <CopyProvider apiKey={COPYWEASEL_API_KEY}>
      {children}
    </CopyProvider>
  )
}
```

With that in place, copy may be used from your CopyWeasel account by
way of the `Copy` component:

``` javascript
import {Copy} from 'react-copyweasel'

function MyComponent({children}) {
  const copyContext = {...}
  return (
    <Copy copyKey="my-heading" context={copyContext} />
  )
}
```

### Defeault Copy

In case of a missing copy key, or an incompatible set of context data,
default copy may be specified as child components to `Copy`:

``` javascript
import {Copy} from 'react-copyweasel'

function MyComponent({children}) {
  const copyContext = {...}
  return (
    <Copy copyKey="my-heading" context={copyContext}>
      This is the default copy.
    </Copy>
  )
}
```

### Specifying the Component

By default, `Copy` uses a `span` element. However any element string,
or React component, may be provided to use in its stead:

``` javascript
import {Copy} from 'react-copyweasel'

function MyComponent({children}) {
  const copyContext = {...}
  return (
    <Copy as="h1" copyKey="my-heading" context={copyContext} />
  )
}
```
