import React from 'react';

const Contact = ({title, value}) => {
  return (value ? <div><b>{title}: </b>{value}</div> : null);
};
export default Contact;