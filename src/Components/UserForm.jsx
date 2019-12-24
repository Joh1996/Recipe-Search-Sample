import React, { Component } from 'react'
import axios from 'axios'
import { Table, TableHeader, TableRow, TableCell, TableBody, Button, TextInput, RangeInput, Meter, Stack, Text, Grid, Box } from 'grommet';

// MY APP ID : 
// MY APP KEY : 


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
        axios.get("https://api.edamam.com/search?q=" + result + {key}).then((result) => {
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
