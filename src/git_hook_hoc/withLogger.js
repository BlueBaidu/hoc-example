import React, { useEffect } from "react";

const withLogger = (WrappedComponent) => {
  const WithLogger = (props) => {
    useEffect(() => {
      // Log data on component mount
      console.log(`hook-hoc:Component ${WrappedComponent.name} mounted.`);
      return () => {
        // Log data on component unmount
        console.log(`hook-hoc:Component ${WrappedComponent.name} unmounted.`);
      };
    }, []);

    useEffect(() => {
      // Log data on component update
      console.log(`hook-hoc:Component ${WrappedComponent.name} updated.`);
    });

    return <WrappedComponent {...props} />;
  };

  WithLogger.displayName = `withLogger(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return WithLogger;
};

export default withLogger;
