import React from 'react'

type Props = {
  label: string;
};

const Button = ({ label }: Props) => {
  return <button className="btn btn-primary">{label}</button>;
};

export default Button