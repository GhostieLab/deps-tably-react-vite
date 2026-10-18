import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Tably } from '../src/index.js'

const columns = [
    { field: 'name', columnName: 'Name' },
    { field: 'age', columnName: 'Age' },
]

const data = [
    { name: 'Alice', age: 32 },
    { name: 'Bob', age: 41 },
]

describe('Tably', () => {
    it('renders a custom column value', () => {
        const customColumns = [
            {
                field: 'name',
                columnName: 'Name',
                render: (value) => `User: ${value}`,
            },
        ]
        
        render(<Tably columns={customColumns} data={data} />)
        
        expect(screen.getByText('User: Alice')).toBeTruthy()
        expect(screen.getByText('User: Bob')).toBeTruthy()
    })

    it('renders React elements from a custom column renderer', () => {
        const customColumns = [
            {
                field: 'name',
                columnName: 'Name',
                render: (value) => <strong>{value}</strong>,
            },
        ]
        
        render(<Tably columns={customColumns} data={data} />)

        expect(screen.getByText('Alice').tagName).toBe('STRONG')
        expect(screen.getByText('Bob').tagName).toBe('STRONG')
    })

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
