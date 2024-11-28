import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'


export const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textSize}> Логотип |</Text>
            </View>
            <View>
                <Text style={styles.textSize}> Название приложения </Text>
            </View>
        </View>
    )
}
export const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: 60,
        backgroundColor: '#cccccc',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        marginBottom: 20
    },
    textSize: {
        fontSize: 20,
    }

})
