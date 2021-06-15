import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Inicio} from './Inicio'



export const Pages = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio} />
            </Switch>
        </section>
    )
}
