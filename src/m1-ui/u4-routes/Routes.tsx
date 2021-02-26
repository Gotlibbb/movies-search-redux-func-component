import React from "react";
import { Route, Switch } from "react-router-dom";
import ResultsContainer from "../u2-components/c2-results/ResultsContainer";
import MovieContainer from "../u2-components/c3-movie/MovieContainer";

export function Routes() {
    return<Switch>
        <Route path={'/movies-search-useState/search-results/:filmNameUrl/:page'}>
            <ResultsContainer/>
        </Route>

        <Route path={'/movies-search-useState/movie/:filmNameUrl/:movieId'}>
            <MovieContainer/>
        </Route>
    </Switch>
}