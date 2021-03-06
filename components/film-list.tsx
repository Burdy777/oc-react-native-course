import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import Film from "../helpers/film-model";
import FilmItem from "./filter-item";

class FilmList extends React.Component<{ navigation: any, films: Film[], favoritesFilm: Film[], onEndReached: Function }> {

    _displayDetailForFilm = (filmId: number) => {
        this.props.navigation && this.props.navigation.navigate('FilmDetail', { filmId: filmId });
    };

    _isFilmFavorite(film: Film) {
        return this.props.favoritesFilm.findIndex(item => item.id === film.id) !== -1;
    }

    render() {
        return (
            <View style={styles.main_container}>
                <FlatList
                showsVerticalScrollIndicator={true}
                data={this.props.films}
                extraData={this.props.favoritesFilm}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} isFilmFavorite={this._isFilmFavorite(item)}/>}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    this.props.onEndReached()
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    }
});

export default FilmList;
