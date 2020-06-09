import React from 'react';
import { useDispatch } from 'react-redux'
import {View} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {userSignined, userSignouted} from '../Store/actions';

const FBLoginButton = props => {
  const dispatch = new useDispatch();
  getFbData = async accessToken => {
    const EndPoint = `https://graph.facebook.com/me?access_token=${accessToken}&fields=email,name,picture.type(large)`;
    const response = await axios.get(EndPoint);
    dispatch(
      userSignined({
        image: response.data.picture.data.url,
        userName: response.data.name,
      }),
    );
  };
  return (
    <View style={{margin: 5}}>
      <LoginButton
        publishPermissions={['email']}
        onLoginFinished={(error, result) => {
          if (error) {
            dispatch(userSignouted());
            alert('Login failed with error: ' + error.message);
          } else if (result.isCancelled) {
            dispatch(userSignouted());
            alert('Login was cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then(accessToken =>
                getFbData(accessToken.accessToken),
            );
          }
        }}
        onLogoutFinished={() => dispatch(userSignouted())}
      />
    </View>
  );
};

export default  FBLoginButton;
