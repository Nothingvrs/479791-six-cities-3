import * as React from 'react';
import {Redirect, Route} from 'react-router';
import {connect} from 'react-redux';
import {getAuthStatus, isAuthResponseReceived} from '../../reducer/user/user-selector';
import {Authorization} from '../../reducer/user/user-reducer';

interface PrivateRouteProps {
  render: any;
  exact: boolean;
  path: string;
  isAuth: boolean;
}

const PrivateRoute: React.FC <PrivateRouteProps> = (props) => {
  const {render, exact, path, isAuth} = props;

  return (
    <Route exact={exact} path={path} render={() => isAuth ? render() : <Redirect to="/login" />} />
  );
};


const mapStateToProps = (state) => ({
  isAuth: getAuthStatus(state) === Authorization.AUTH && isAuthResponseReceived(state)
});

export default connect(mapStateToProps)(PrivateRoute);
