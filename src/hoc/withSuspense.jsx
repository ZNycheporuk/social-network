import React, {Suspense} from 'react';

const withSuspense = Component => props => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props}/>
    </Suspense>
  );
};

export default withSuspense;
