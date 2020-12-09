import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    container: {
        padding: '0 2.5%',
        width: '100%',
        margin: 0,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: '5%',
        borderRadius: 10,
        color: 'white',
         
    },
    infoCard: {
        display: 'flex',
        flexDrirection: 'column',
        textAlign: 'center'
    }
});