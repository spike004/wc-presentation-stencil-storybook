import { Component, h, State } from '@stencil/core';

@Component({
    tag:'swapi-component',
    styleUrl: './swapi-component.scss',
    shadow: true
})
export class Swapi{
    @State() fetchedData: string;
    @State() fetchedPerson: string;
    onFetchSwapi(event: Event){
        event.preventDefault();
        console.log(event.composedPath()[1][0].value)
        fetch(`https://swapi.dev/api/people/?search=${event.composedPath()[1][0].value}`).then(res=>{
            return res.json()
        }).then(parsedRes=>{
            this.fetchedData = parsedRes.results
            console.log( this.fetchedData)
            this.fetchedPerson = parsedRes.results[0].name
            console.log( this.fetchedPerson)
        }).catch(err => {
            console.log(err)
        });
    }
    render(){
        return[
           <form>
               <label htmlFor="char">Choose your character</label>
 <input id="char"/>
 <button type="submit" onClick={this.onFetchSwapi.bind(this)}>Fetch</button>
           </form>,
            <div>
                <p>Character: {this.fetchedPerson}</p>
            </div>
        ]
    }
}