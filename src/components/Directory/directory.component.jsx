import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectoryCards} from "../../redux/directory/directory.selectors"
import MenuCard from '../Menu-card/menu-card.component'
import './directory.styles.scss'

const Directory = ({cards}) => 
{
      return(  
            <div className="menu-directory">
                {
                    cards.map(({id , ...restComponents})=>
                    {
                       return <MenuCard key={id} {...restComponents} />
                    })
                }
            </div>
      );
}

const mapStateToProps = createStructuredSelector({
  cards:selectDirectoryCards
})



export default connect(mapStateToProps)(Directory);