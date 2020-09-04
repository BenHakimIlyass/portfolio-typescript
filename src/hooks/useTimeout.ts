import React from "react";

type Obj = { execute: any; delay: number };

export default (props: number | Obj) => {
  const [state, set] = React.useState(false);
  React.useEffect(() => {
    if (typeof props === "number") {
      let timeout = setTimeout(() => set(true), props);

      return () => clearTimeout(timeout);
    }
    if (typeof props === "object") {
      const { execute, delay } = props;

      let timeout = setTimeout(() => execute(), delay);
      return () => clearTimeout(timeout);
    }
  }, []);

  if (typeof props === "number") return state;
};
