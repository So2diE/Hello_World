import PropTypes from "prop-types";
import React from 'react'
import {Divider, Grid,Collapse} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import * as styleGuide from '../../constants/styleGuide'
import SubTitle from '../Widget/SubTitle'
import SearchBar from '../Widget/SearchBar'
import WhiteDropDown from '../Widget/WhiteDropDown'
import WhiteButton from '../Widget/WhiteButton'
import OrderDetail from './Detail'
import Header from '../Layout/Body/Header'
const styles = theme => ({
    root: {
        padding: '40px'
    },
    title: {
        padding: ' 0 20px'
    },
    saveCancelButton: {
        paddingLeft: '60px',
    },
    form: styleGuide.formBlock,
    childInput: {
        padding: '60px'
    },
    shopListItem: styleGuide.shopListItem

});

class OrdersOverview extends React.Component {
    constructor(props) {
        super()
        this.state = {
            open: true,
        }

    }


    render() {
        const {classes} = this.props;

        return (
            <Grid container className={classes.root}>

                <Header
                title={(
                    <SubTitle title={'Orders'}/>

                )}
                leftControl={(
                    <Grid container alignItems={'center'}>

                        <WhiteDropDown
                            icon={'icon-more-16'}
                            value={'Filter'}
                        />

                        <SearchBar
                            placeHolder={'Search Orders...'}/>
                    </Grid>
                )}
                rightControl={(
                    <WhiteButton
                        icon={'icon-share-16'}
                        value={'Export List'}
                    />
                )}

                />
                <Grid item sm={12}>
                    <Grid container alignItems={'center'} style={{
                        paddingLeft:'24px',
                        paddingRight:'24px' }}>
                        <Grid item sm={2}>
                            order id
                        </Grid>
                        <Grid item sm={2}>
                            status
                        </Grid>
                        <Grid item sm={2}>
                        customer
                        </Grid>
                        <Grid item sm={2}>
                            amount
                        </Grid>
                        <Grid item sm={2}>
                            shop
                        </Grid>
                        <Grid item sm={2}>
                            order created
                        </Grid></Grid>
                    <OrderDetail/>
                    <OrderDetail/>
                    <OrderDetail/>
                    <OrderDetail/>
                    <OrderDetail/>
                    <OrderDetail/>
                </Grid>
                <Grid item sm={12}>
                </Grid>
            </Grid>);
    }
}

OrdersOverview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrdersOverview);