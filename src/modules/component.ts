export const createReactComponent = ({ name }: { name: string }) => {
  return `import { useViewModel } from "./useViewModel";

type Props = {};

const ${name} = ({}: Props) => {
  const {} = useViewModel();
  return (
    <div>
      <div></div>
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
