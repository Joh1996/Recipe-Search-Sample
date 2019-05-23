import React, { Component } from 'react'
import axios from 'axios'
import { Table, TableHeader, TableRow, TableCell, TableBody, Button, TextInput, RangeInput, Meter, Stack, Text, Grid, Box } from 'grommet';

// MY APP ID : a6adab8f
// MY APP KEY : b62834aa73724f466e1d7593852a0cea
//"https://api.edamam.com/recipe?q={recipe}&app_id=${d68b925b}&app_key=${03f2cc15a337e3e95aa95a0c39cdac07}&from=0&to=5"

// https://api.edamam.com/search?q=bread&d68b925b&03f2cc15a337e3e95aa95a0c39cdac07

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: '',
            url: '',
            urls: [],
            recipeImage: '',
            recipe_results: []
        };
    }

    handleChange(e) {
        this.setState({
            recipe: e.target.value
        })
    }


    getRecipe = (e) => {
        e.preventDefault();
        const result = this.state.recipe
        axios.get("https://api.edamam.com/search?q=" + result + "&app_id=a6adab8f&app_key=b62834aa73724f466e1d7593852a0cea&from=0&to=5").then((result) => {
            const recipe_urls = result.data.hits[0].recipe.url;
            for (var i = 0; i < 5; i++) {
                this.state.urls.push(result.data.hits[i].recipe.url)
                this.state.recipe_results.push(result.data.hits[i].recipe.label)
            }
            console.log(result)
            console.log(this.state.recipe_results[1])
            console.log(this.state.urls[1])
        })
    }


    render() {
        return (
            <div>
                <input style={{ margin: '20px auto', display: 'block' }} type='text' name='grocery' value={this.state.recipe} onChange={this.handleChange.bind(this)} />
                <button onClick={this.getRecipe}> Submit </button>
                <Table>
                    <TableHeader>
                        <TableCell scope='col' border='bottom'>
                            RECIPES
                    </TableCell>
                    </TableHeader>
                    <TableBody>
                        {Object.keys(this.state.recipe_results).map(k => {
                            return (
                                <TableRow>
                                    <TableCell scope='row'>
                                        <a key={k} href={this.state.urls[k]}>
                                            {this.state.recipe_results[k]}
                                        </a>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default UserForm