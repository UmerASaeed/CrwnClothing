export const AddinCart = (oldItems,newItem)=>
{
    const ExistingItem = oldItems.find(item => item.id === newItem.id)
    let newArr=oldItems

    if(ExistingItem)
    {
        ExistingItem.quantity = ExistingItem.quantity + 1
        newArr = [...newArr] 
    }
    else
    {
        newItem.quantity=1
        newArr=[...newArr,newItem]    
    }

    return newArr
}