import React from "react";

type Obj = { execute: (...args: any[]) => void; delay: number };

export default (props: number | Obj) => {
  const [state, set] = React.useState(false);
  React.useEffect(() => {
    // if the props given is a number, the hook will return a state
    // which will be updated after the delay given
    if (typeof props === "number") {
      let timeout = setTimeout(() => set(true), props);

      return () => clearTimeout(timeout);
    }
    // if the props given is an object then we will run
    // the execute property after the delay property
    if (typeof props === "object") {
      const { execute, delay } = props;

      let timeout = setTimeout(execute, delay);
      return () => clearTimeout(timeout);
    }
  }, [props]);

  if (typeof props === "number") return state;
};
