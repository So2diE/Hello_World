import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import * as styleGuide from '../../constants/styleGuide'
import {Input} from '@material-ui/core'

const styles = theme => ({
    inputBar: {
        backgroundColor: styleGuide.greyInputBackGround,
        borderRadius: '5px',
        height: '35px',
        border: '1px solid #E8E4ED',
        fontSize: '14px',
        color: styleGuide.prupleText,
        paddingLeft:'10px',
        paddingRight:'10px',
        boxShadow: 'inset 0 5px 1px -5px #000000'
    }
});

class PermanentDrawer extends React.Component {
    state = {
        anchor: 'left',
    };
    constructor(){
        super()
        this.state = {
            placeHolder :''

        }
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,

        });
    };


    render() {
        const {classes} = this.props;

        return (
            <div>
                < Input className={classes.inputBar}
                        fullWidth={true}
                        placeholder={this.props.placeHolder
                        }
                        disableUnderline={true}
                        value={this.state.name}
                        onChange={this.handleChange('name')}/>
                <div>{this.state.name}</div>
            </div>
        );
    }
}

PermanentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);