export const createReactComponent = ({ name }: { name: string }) => {
  return `import React from 'react';
import { useViewModel } from "./useViewModel";

  type Props = {};

  const ${name} = ({}:Props) => {
    const {} = useViewModel();
    return (
      <div>

      </div>
    );
  };

  export default ${name};
  `;
};

export const createViewModelHooks = () => {
  return `export const useViewModel = () => {
    return {};
  }`;
};
