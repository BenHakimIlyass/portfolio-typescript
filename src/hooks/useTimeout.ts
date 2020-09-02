import React from "react";
export default ({ execute, delay }: { execute?: any; delay: number }) => {
  const [state, set] = React.useState(false);
  React.useEffect(() => {
    let timeout = setTimeout(() => {
      set(false);
      !!execute && execute();
    }, delay);
    return () => clearTimeout(timeout);
  }, []);

  if (!!!execute) return state;
};
