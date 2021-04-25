import React, { Suspense } from "react";

export const ReactLazyHOC = (Component) => {
  return (
    <Suspense fallback='loading...'>
        <Component />
    </Suspense>
  )
};