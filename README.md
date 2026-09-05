# Tably

A simple and reusable React table component built with Material UI.

## Installation

Install Tably together with its peer dependencies:

```bash
pnpm add @labs/tably @mui/material @emotion/react @emotion/styled react react-dom
```

> `@labs/tably` is the current development package name and may change before the public npm release.

## Usage

Import `Tably` and provide column definitions and row data:

```jsx
import { Tably } from '@labs/tably'

const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'age', headerName: 'Age' },
    { field: 'email', headerName: 'Email' },
]

const data = [
    {
        name: 'Alice',
        age: 32,
        email: 'alice@example.com',
    },
    {
        name: 'Bob',
        age: 41,
        email: 'bob@example.com',
    },
]

export const App = () => {
    return <Tably columns={columns} data={data} />
}
```

Tably renders each column as a table header and uses the column's `field`
property to read the corresponding value from every data row.

## API

Tably currently exposes a single component:

```jsx
<Tably columns={columns} data={data} />
```

See [API documentation](docs/API.md) for the complete public API.

## Validation

Tably validates its structural configuration before rendering and throws an
error when `columns` or `data` do not satisfy its contract.

See [Validation](docs/VALIDATION.md) for the complete validation rules.

## Development

Run the playground:

```bash
pnpm dev
```

Run the automated tests:

```bash
pnpm test
```

Run ESLint:

```bash
pnpm lint
```

## License

MIT
