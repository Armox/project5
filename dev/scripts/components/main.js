import React, { Component } from 'react';
import IntroBox from './intro_box'
const Main = (props) => {
    
    console.log(props.phase)
    let $DisplayBox;
    if(props.phase < 2){
        console.log('hit')
        $DisplayBox = <IntroBox countryList={props.countryList} setStateCuisine={props.setStateCuisine} />
    } else {
        $DisplayBox = <div></div>
    }


    return(
        $DisplayBox
    )
}

export default Main
