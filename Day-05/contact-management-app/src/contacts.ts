import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

import { ContactType } from "./Types";



export const getContacts = async (query: string): Promise<ContactType[]> => {
  await fakeNetwork(`getContacts:${query}`)
  let contacts : ContactType[] = await localforage.getItem("contacts") || []
  if (query) contacts = matchSorter(contacts, query, { keys: ['first', 'last'] }) 
  return contacts.sort(sortBy('last', 'createdAt'))
}

export const createContact = async () : Promise<ContactType> => {
  await fakeNetwork()
  const id : string = Math.random().toString(36).substring(2, 9)
  const contact: ContactType = {
    id, createdAt: Date.now(),
    first: "",
    last: "",
    avatar: "",
    twitter: "",
    notes: "",
    favorite: false
  };
  const contacts : ContactType[] = await getContacts('')
  contacts.unshift(contact)
  await set(contacts)
  return contact
}

export const getContact = async (id: string) : Promise<ContactType | null> => {
  await fakeNetwork(`contact:${id}`)
  const contacts : ContactType[] = await localforage.getItem("contacts") || []
  const contact : ContactType | null = contacts.find(contact => contact.id === id) || null
  return contact
} 

export const updateContact = async (id: string, update: Partial<ContactType>) : Promise<ContactType> => {
  await fakeNetwork()
  const contacts : ContactType[] = await localforage.getItem("contacts") || []
  const contact : ContactType | null = contacts.find(contact => contact.id === id) || null
  if (!contact) throw new Error(`No contact found for ${id}`)
  Object.assign(contact, update)
  await set(contacts)
  return contact
}

export const deleteContact = async (id: string) : Promise<boolean> => {
  await fakeNetwork()
  const contacts : ContactType[] = await localforage.getItem("contacts") || []
  const index : number = contacts.findIndex(contact => contact.id === id)
  
  if (index > -1) {
    contacts.splice(index, 1)
    await set(contacts)
    return true
  }
  return false
}

const set = (contacts: ContactType[]) => localforage.setItem("contacts", contacts)

// fake a cache so we don't slow down stuff we've already seen
let fakeCache : {[key: string] : boolean} = {};

export const fakeNetwork = async (key?: string): Promise<void> => {
  if (!key) fakeCache = {};
  else if (fakeCache[key]) return;
  else fakeCache[key] = true;

  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
};
