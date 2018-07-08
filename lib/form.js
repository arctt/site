const FieldTypes = Object.freeze({
  TEXT: 0x0,
  EMAIL: 0x1,
  PASSWD: 0x2,
  PARAGRAPH: 0x3,
  RADIO: 0x4,
  CHECKBOX: 0x5,
  DROPDOWN: 0x6,
  DATEPICK: 0x7
})

function assign (item, defaultValue) {
  return (item) || defaultValue
}

class Form {
  constructor () {
    this.fields = []
  }

  addField (field) {
    (feild.type && feild.type == 'Field')
      ? this.fields.push(field)
      : () => { throw new Error(field + 'is not a field') }
  }

  removeField (index) {
    this.fields.splice(index, 1)
  }

  reset () {
    this.fields = []
  }
}

class Field {
  constructor (name, description, type, options) {
    name = assign(name, 'Field')
    description = assign(description, 'Field')
    type = assign(type, FieldTypes.TEXT)
    options = assign(options, { })
    options.defaultValue = assign(options.defaultValue, '')
    options.placeHolder = assign(options.placeHolder, '')
    options.values = assign(options.values, ['Option 1', 'Option 2'])

    this.type = 'Field'

    this.properties = {
      name: name,
      type: type,
      description: description,
      value: defaultValue,
      placeHolder: placeHolder
    }
  }
}

exports = {
  FieldTypes: FieldsTypes,
  Form: Form,
  Field: Field
}
