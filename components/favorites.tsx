// components/favorites.tsx

import React from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native'
import {connect} from "react-redux";
import FilmList from "./film-list";
import Film from "../helpers/film-model";

class Favorites extends React.Component<{ navigation: any, favoritesFilm: Film[] }> {

    _displayDetailForFilm = (filmId: number) => {
        this.props.navigation && this.props.navigation.navigate('FavouriteDetail', { filmId: filmId });
    };

    render() {
        return (
            <SafeAreaView style={styles.main_container}>
                <FilmList films={this.props.favoritesFilm}
                          favoritesFilm={this.props.favoritesFilm}
                          onEndReached={() => {}}
                          displayDetailForFilm={this._displayDetailForFilm} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = (state: any) => {
    return {
        favoritesFilm: state.favoritesFilm
    }
};

export default connect(mapStateToProps)(Favorites);
