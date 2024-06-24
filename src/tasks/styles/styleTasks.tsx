import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentLogo: {
        alignItems: 'center',
        marginTop: 50
    },
    addConten: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    addBotton: {
        backgroundColor: '#00045E',
        width: 180,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    addText: {
        color: 'white',
        fontSize: 25
    },
    contentFlastList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    contentTasksList: {
        width: '85%',
        backgroundColor: '#70718C',
        marginBottom: 30,
        borderRadius: 10
    },
    tasksViewText: {
        margin: 15
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    descriptionText: {
        color: 'white',
        fontSize: 15
    }
})