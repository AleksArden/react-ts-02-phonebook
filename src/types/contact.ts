export interface IContact { 
  id: string,
  name: string,
  number: string,
}
export type NewContact = Pick<IContact, 'name' | 'number'>