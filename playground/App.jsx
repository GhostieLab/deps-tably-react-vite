import { Tably } from '../src/index.js'

const columns = [
    { field: 'name', columnName: 'Name' },
    { field: 'age', columnName: 'Age' },
    { field: 'email', columnName: 'Email' },
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
    {
        name: 'Charlie',
        age: 27,
        email: 'charlie@example.com',
    },
]

export const App = () => {
    return <Tably columns={columns} data={data} />
}
