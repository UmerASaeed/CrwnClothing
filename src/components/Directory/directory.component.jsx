import React from 'react'
import MenuCard from '../Menu-card/menu-card.component'
import './directory.styles.scss'

class Directory extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
          cards:[
            {
                title: 'Hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
              },
              {
                title: 'Jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'Sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'Women',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'Men',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              }
          ]  
        }
    }

    render() 
    {
      return(  
            <div className="menu-directory">
                {
                    this.state.cards.map(({id , ...restComponents})=>
                    {
                       return <MenuCard key={id} {...restComponents} />
                    })
                }
            </div>
      );
    }
}

export default Directory;