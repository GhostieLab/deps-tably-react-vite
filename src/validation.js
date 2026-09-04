const isObject = (value) => {
    return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export const validateTably = (columns, data) => {
    if (!Array.isArray(columns)) {
        throw new Error('Tably: "columns" must be an array.')
    }

    if (!Array.isArray(data)) {
        throw new Error('Tably: "data" must be an array.')
    }

    const fields = new Set()

    columns.forEach((column, index) => {
        if (!isObject(column)) {
            throw new Error(`Tably: Column at index ${index} must be an object.`)
        }

        if (typeof column.field !== 'string' || column.field.length === 0) {
            throw new Error(
                `Tably: "field" for column at index ${index} must be a non-empty string.`,
            )
        }

        if (
            typeof column.headerName !== 'string' ||
            column.headerName.length === 0
        ) {
            throw new Error(
                `Tably: "headerName" for column "${column.field}" must be a non-empty string.`,
            )
        }

        if (fields.has(column.field)) {
            throw new Error(
                `Tably: Duplicate column field "${column.field}".`,
            )
        }

        fields.add(column.field)
    })

    data.forEach((row, rowIndex) => {
        if (!isObject(row)) {
            throw new Error(`Tably: Data row at index ${rowIndex} must be an object.`)
        }

        columns.forEach((column) => {
            if (!Object.prototype.hasOwnProperty.call(row, column.field)) {
                throw new Error(
                    `Tably: Column "${column.field}" does not exist in data row at index ${rowIndex}.`,
                )
            }
        })
    })
}
