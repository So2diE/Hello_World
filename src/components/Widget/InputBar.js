import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import * as styleGuide from '../../constants/styleGuide'
import {Input,Grid} from '@material-ui/core'


const styles = theme => ({
    inputBar: {
        backgroundColor: '#f5f5f7',
        borderRadius: '5px',
        height: '35px',
        border: '1px solid #E8E4ED',
        fontSize: '14px',
        color: styleGuide.purpleText,
        paddingRight: '10px',
        boxShadow: 'inset 0 2px 2px 0px #ededed'

    },
    title: {
        color: styleGuide.lighterText,
        fontSize: styleGuide.L,

        fontWeight: '100',
        paddingBottom:'5px',

    }
});

class InputBar extends React.Component {
    state = {
        anchor: 'left',
    };

    constructor() {
        super()
        this.state = {
            placeHolder: '',
            title: '',
            startAdornment:'',
            endAdornment:'',

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
            <Grid container alignItems={'center'}>
                <div className={classes.title}>
                    {this.props.title}
                </div>

                < Input className={classes.inputBar}
                        fullWidth={true}
                        placeholder={this.props.placeHolder
                        }
                        disableUnderline={true}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        startAdornment={this.props.startAdornment}
                        endAdornment={this.props.endAdornment}

                />
            </Grid>
        );
    }
}

InputBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputBar);