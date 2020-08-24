export const AddinCart = (oldItems,newItem)=>
{  
    const ExistingItem = oldItems.find(item => item.id === newItem.id)

    if (ExistingItem)
    {
        return oldItems.map(item=>item.id===newItem.id?{...item,quantity:item.quantity +1}:item)
    }

    return [...oldItems,{...newItem,quantity:1}]
}


export const RemoveFromCart = (oldItems,newItem) =>
{
    const filterArr = oldItems.filter(item=>
        {
            return item.id !== newItem.id
        }) 
    return [...filterArr]
}

export const RemoveItem = (oldItems,newItem) =>
{
    const ExistingItem = oldItems.find(item => item.id === newItem.id)
    
    
    if(ExistingItem.quantity===1)
    {
        return oldItems.filter(item=>
            {
                return item.id !== newItem.id
            }) 
           
    }
    else
    {
        return oldItems.map(item=> item.id===newItem.id ? {...item ,quantity:item.quantity-1} : item)
    }
    

}