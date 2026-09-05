# Validation

Tably validates its column definitions and row data before rendering.

Invalid structural configuration throws an `Error`. All validation error
messages are prefixed with:

```text
Tably:
```

## Columns

`columns` must be an array.

```js
[]
```

is valid.

Every item in `columns` must be an object.

Each column must contain:

```js
{
    field: 'name',
    headerName: 'Name',
}
```

### `field`

`field` must be a non-empty string.

Column fields must also be unique.

The following is invalid:

```js
[
    { field: 'name', headerName: 'Name' },
    { field: 'name', headerName: 'Other Name' },
]
```

### `headerName`

`headerName` must be a non-empty string.

## Data

`data` must be an array.

```js
[]
```

is valid.

Every item in `data` must be an object.

## Relationship between columns and data

Every field declared by `columns` must exist as an own property in every
data row.

Given:

```js
const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'age', headerName: 'Age' },
]
```

the following data is valid:

```js
const data = [
    { name: 'Alice', age: 32 },
    { name: 'Bob', age: 41 },
]
```

The following is invalid:

```js
const data = [
    { name: 'Alice', age: 32 },
    { name: 'Bob' },
]
```

because the second row does not contain the `age` property.

## Additional properties

Rows may contain properties that do not correspond to declared columns.

For example:

```js
{
    name: 'Alice',
    age: 32,
    email: 'alice@example.com',
}
```

is valid even when only `name` and `age` are declared as columns.

## Values

Validation checks whether a declared property exists, not whether its value
is truthy.

These are all valid values:

```js
{
    nullValue: null,
    undefinedValue: undefined,
    zeroValue: 0,
    falseValue: false,
    emptyValue: '',
}
```

provided that their corresponding fields are declared in `columns`.

## Errors

Examples of validation errors include:

```text
Tably: "columns" must be an array.
Tably: "data" must be an array.
Tably: Column at index 0 must be an object.
Tably: "field" for column at index 0 must be a non-empty string.
Tably: "headerName" for column "name" must be a non-empty string.
Tably: Duplicate column field "name".
Tably: Data row at index 0 must be an object.
Tably: Column "age" does not exist in data row at index 1.
```

Validation errors represent invalid Tably configuration and are thrown
before the table is rendered.
