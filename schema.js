const todoInputSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        text: {
            type: 'string',
            minLength: 1,
            maxLength: 80
        },
        done: {
            type: 'boolean',
            default: false
        }
    },
    required: ['text']
}

const todoUpdateSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        done: {
            type: 'boolean',
            default: false
        }
    }
}

const todoIdSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            minLength: 24,
            maxLength: 24
        }
    }
}

const todosArraySchema = {
    type: 'array',
    items: {
        type: 'object',
        additionalProperties: false,
        properties: {
            id: { type: 'string' },
            text: { type: 'string' },
            done: { type: 'boolean' },
            doneAt: { type: 'date-time' }
        }
    }
}
