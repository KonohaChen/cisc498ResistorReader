import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCrators as registerActionCreators } from "./store";
import { actionCrator as flashActionCreators } from "./store";


class Register extends Component {
    render() {
        return <RegisterForm {...this.props} />;
    }
}

const mapStateToProps = state => {
    return {
        registerData: state.register,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        registerFn: bindActionCreators(registerActionCreators, dispatch),
        flashFn: bindActionCreators(flashActionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);