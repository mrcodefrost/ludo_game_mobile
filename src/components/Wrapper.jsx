import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
const Wrapper = ({ children }) => {
    return (
        <ImageBackground
            source={BG}
            resizeMode='cover'
            style={styles.container}
        >
            <SafeAreaView style={[styles.safeArea, {...style}]}>
                <Text>Wrapper</Text>
            </SafeAreaView>
        </ImageBackground>
    );
}
export default Wrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    safeArea: {
        
    }
})