import React from 'react';
import { UserContext } from '../UserProvider/UserProvider';

function Avatar() {
  const { user } = React.useContext(UserContext);
  return <div>{user.name}</div>;
}

export default Avatar;
