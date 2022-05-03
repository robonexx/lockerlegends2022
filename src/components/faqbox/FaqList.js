import React from 'react';
import { steps } from '../../content/steps';
import FaqItem from './FaqItem';

//styles

export default function FaqList() {
  return (
    <ul className=''>
      {steps.map(({ name, desc, id }) => {
        return <FaqItem name={name} desc={desc} key={id} />;
      })}
    </ul>
  );
}
