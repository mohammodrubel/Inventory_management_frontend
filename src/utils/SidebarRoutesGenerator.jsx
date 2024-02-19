import { NavLink } from "react-router-dom"

export const SidebarRoutesGenarator = (items,role)=>{
     const Sidebar = items.reduce((acc,item)=>{
        if(item.path && item?.name){
            acc.push({
                key:item.path,
                label:<NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
            })
        }
        if(item.children){
            acc.push({
                key:item.name,
                label:item.name,
                children:item.children.map((child)=>({
                    key:child.path,
                    label:<NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
                }))
            })
        }
        return acc
    },[])

    return Sidebar
}