import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Inicio} from './Inicio'
import {ProductsList} from './Products'



export const Pages = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/productos" exact component={ProductsList} />
            </Switch>
        </section>
    )
}
