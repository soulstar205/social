import React from 'react'
import Head from './headSection'
import './home.css'
import Followers from './followers'
import FollowData from './followData'
import FollowEntryData from './followEntryData'

class Home extends React.Component{
    state={
        data: FollowEntryData
    }

    render(){
        let {data} = this.state
        const newData = this.state.data.map(function(item){
            return(
                <FollowData key={item.id} 
                id={item.id} 
                name={item.name}
                img={item.img}
                likes={item.likes}/>
            )
        })
        return(
            <div className="home-container">
                <Head/>
                <Followers />
                <div className="head">
                    <div className="top-followers">
                        <h4>Top Followers</h4><button><small>view Followers</small></button>
                    </div>
                    {newData}
                </div>
                

            </div>
        )
       
    }
}
export default Home