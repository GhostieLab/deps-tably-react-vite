import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Tably } from '../src/index.js'

const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'age', headerName: 'Age' },
]

const data = [
    { name: 'Alice', age: 32 },
    { name: 'Bob', age: 41 },
]

describe('Tably', () => {
    it('renders a table', () => {
        render(<Tably columns={columns} data={data} />)

        expect(screen.getByRole('table')).toBeTruthy()
    })

    it('renders column headers', () => {
        render(<Tably columns={columns} data={data} />)

        expect(
            screen.getByRole('columnheader', { name: 'Name' }),
        ).toBeTruthy()

        expect(
            screen.getByRole('columnheader', { name: 'Age' }),
        ).toBeTruthy()
    })

    it('renders data rows and cells', () => {
        render(<Tably columns={columns} data={data} />)

        expect(screen.getByText('Alice')).toBeTruthy()
        expect(screen.getByText('32')).toBeTruthy()
        expect(screen.getByText('Bob')).toBeTruthy()
        expect(screen.getByText('41')).toBeTruthy()
    })

    it('renders with empty data', () => {
        render(<Tably columns={columns} data={[]} />)

        expect(screen.getByRole('table')).toBeTruthy()
        expect(screen.getAllByRole('row')).toHaveLength(1)
    })

    it('throws for invalid configuration', () => {
        expect(() =>
            render(<Tably columns="invalid" data={data} />),
        ).toThrow('Tably: "columns" must be an array.')
    })
})
