import { describe, expect, it } from 'vitest'
import { validateTably } from '../src/validation.js'

const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'age', headerName: 'Age' },
]

const data = [
    { name: 'Alice', age: 32 },
    { name: 'Bob', age: 41 },
]

describe('validateTably', () => {
    it('accepts valid columns and data', () => {
        expect(() => validateTably(columns, data)).not.toThrow()
    })

    it('requires columns to be an array', () => {
        expect(() => validateTably('invalid', data)).toThrow(
            'Tably: "columns" must be an array.',
        )
    })

    it('requires data to be an array', () => {
        expect(() => validateTably(columns, 'invalid')).toThrow(
            'Tably: "data" must be an array.',
        )
    })

    it('requires every column to be an object', () => {
        expect(() => validateTably([null], data)).toThrow(
            'Tably: Column at index 0 must be an object.',
        )
    })

    it('requires column fields to be non-empty strings', () => {
        expect(() =>
            validateTably([{ field: '', headerName: 'Name' }], data),
        ).toThrow(
            'Tably: "field" for column at index 0 must be a non-empty string.',
        )
    })

    it('requires column header names to be non-empty strings', () => {
        expect(() =>
            validateTably([{ field: 'name', headerName: '' }], data),
        ).toThrow(
            'Tably: "headerName" for column "name" must be a non-empty string.',
        )
    })

    it('rejects duplicate column fields', () => {
        const duplicateColumns = [
            { field: 'name', headerName: 'Name' },
            { field: 'name', headerName: 'Other Name' },
        ]

        expect(() => validateTably(duplicateColumns, data)).toThrow(
            'Tably: Duplicate column field "name".',
        )
    })

    it('requires every data row to be an object', () => {
        expect(() => validateTably(columns, [null])).toThrow(
            'Tably: Data row at index 0 must be an object.',
        )
    })

    it('requires every declared column to exist in every data row', () => {
        const incompleteData = [
            { name: 'Alice', age: 32 },
            { name: 'Bob' },
        ]

        expect(() => validateTably(columns, incompleteData)).toThrow(
            'Tably: Column "age" does not exist in data row at index 1.',
        )
    })

    it('accepts empty columns and data', () => {
        expect(() => validateTably([], [])).not.toThrow()
    })

    it('accepts additional fields in data rows', () => {
        const dataWithExtraField = [
            { name: 'Alice', age: 32, email: 'alice@example.com' },
        ]

        expect(() => validateTably(columns, dataWithExtraField)).not.toThrow()
    })

    it('accepts existing fields regardless of their value', () => {
        const valueColumns = [
            { field: 'nullValue', headerName: 'Null' },
            { field: 'undefinedValue', headerName: 'Undefined' },
            { field: 'zeroValue', headerName: 'Zero' },
            { field: 'falseValue', headerName: 'False' },
            { field: 'emptyValue', headerName: 'Empty' },
        ]

        const valueData = [
            {
                nullValue: null,
                undefinedValue: undefined,
                zeroValue: 0,
                falseValue: false,
                emptyValue: '',
            },
        ]

        expect(() => validateTably(valueColumns, valueData)).not.toThrow()
    })
})
