import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title="My favorites teachers" />
        </View>
    );
}

export default Favorites;