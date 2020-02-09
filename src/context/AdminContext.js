import React from 'react';

const admin = {
  isLoggedIn: false
};

const AdminContext = React.createContext(admin);

export default AdminContext;