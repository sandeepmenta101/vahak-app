import MetaInterface from './Meta.interface';

export default interface SelectInterface{
    form: object,
    field: object,
    meta: MetaInterface,
    placeholder: string,
    labelName: string,
    id: string,
    inputType: string,
    options: Array<TemplateStringsArray>
}