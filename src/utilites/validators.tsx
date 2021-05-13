export type FieldValidatorType = (value : string) => string | undefined

export const required : FieldValidatorType = (value) => {
    if (value) {
        return undefined
    }
    return ('Form is empty')
}

export const maxLengthCreator  = (maxLength : number) :  FieldValidatorType => (value) => {
    if (value.length > maxLength) {
        return (`Max length is ${maxLength}`)
    }
    return undefined
}