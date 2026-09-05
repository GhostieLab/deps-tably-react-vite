# API

Tably exposes a React component for rendering tabular data using Material UI.

## `Tably`

```jsx
<Tably columns={columns} data={data} />
```

### Props

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `columns` | `Array` | Yes | Defines the columns rendered by the table. |
| `data` | `Array` | Yes | Contains the row data rendered by the table. |

## `columns`

`columns` is an array of column definition objects.

```js
const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'age', headerName: 'Age' },
]
```

Each column contains:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `field` | `string` | Yes | Identifies the property to read from each data row. |
| `headerName` | `string` | Yes | Text displayed in the table header. |

Both `field` and `headerName` must be non-empty strings.

Each `field` must be unique within the `columns` array.

An empty `columns` array is valid.

## `data`

`data` is an array of row objects.

```js
const data = [
    {
        name: 'Alice',
        age: 32,
    },
    {
        name: 'Bob',
        age: 41,
    },
]
```

Every row must contain an own property corresponding to every `field`
declared in `columns`.

Given:

```js
const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'age', headerName: 'Age' },
]
```

this row is valid:

```js
{
    name: 'Alice',
    age: 32,
}
```

while this row is invalid because the `age` property is missing:

```js
{
    name: 'Alice',
}
```

Additional properties that are not declared as columns are allowed:

```js
{
    name: 'Alice',
    age: 32,
    email: 'alice@example.com',
}
```

The existence of the property is what matters. Its value may be `null`,
`undefined`, `0`, `false`, or an empty string.

An empty `data` array is valid.

## Rendering

For every column, Tably renders a Material UI table header cell using
`headerName`.

For every data row, Tably renders one table cell per declared column. The
cell value is obtained using:

```js
row[column.field]
```

For example:

```js
const columns = [
    { field: 'name', headerName: 'Name' },
]

const data = [
    { name: 'Alice' },
]
```

renders a `Name` column whose row contains `Alice`.

## Validation

Invalid structural configuration causes Tably to throw an `Error` before
rendering the table.

See [Validation](VALIDATION.md) for the complete validation contract.
