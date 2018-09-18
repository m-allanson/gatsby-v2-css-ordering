import React from "react";

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <style key="blah">{`
      .hello{
        border: 10px solid blue;
        color: white;
      }
    `}</style>
  ]);
};
