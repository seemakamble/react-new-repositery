import React from 'react';
import { useParams } from 'react-router-dom';
const DynamicRouting = () => {
  const { pageid } = useParams();
  return (
    <div>
      <h2>iam the pag1{pageid} </h2>
    </div>
  );
};
export default DynamicRouting;
