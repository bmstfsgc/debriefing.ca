

export type menutype = {
    icon: object,
      title: string,
  id: string,
      to: string,
      class: string,
      divider: string,
  level:number,
  multiple:boolean,
  items:object[]
};


export type submenutype = {
menuitems: Array<menutype>,
menulevel:number
}


export type menusettingstype = {
    foreground:string,
    background:string
}
    
    
    