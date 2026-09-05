# Tably

A simple and reusable React table component built with Material UI.

## Installation

Tably is currently in development and has not been published to the public
npm registry yet.

Installation instructions will be added when the first public release is
available.

## Usage

The following example uses `tably` as the package name for illustration.
The final public package name will be documented when Tably is published.

```jsx
import { Tably } from 'tably'

const columns = [
    {
        field: 'name',
        headerName: 'Name',
    },
    {
        field: 'age',
        headerName: 'Age',
    },
    {
        field: 'email',
        headerName: 'Email',
    },
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

Tably uses `columns` to define the table structure and `data` to provide the
rows that will be rendered.

Each column requires:

- `field`: the property name used to read values from each data row.
- `headerName`: the text displayed in the table header.

Each data row must contain every field declared by `columns`.

Additional properties in data rows are allowed.

For the complete public API, see [API](docs/API.md).

For runtime validation rules and error behavior, see
[Validation](docs/VALIDATION.md).

## Development

Install dependencies:

```bash
pnpm install
```

Start the development playground:

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

Tably is licensed under the MIT License. See [LICENSE](LICENSE).
