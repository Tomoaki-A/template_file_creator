export const getPathName = ({ path }: { path: string }) => {
  if (path.includes("src")) {
    return excludeFilePath(path);
  }
  return excludeFilePath(`src/${path}`);
};

const excludeFilePath = (path: string) => {
  const splitPath = path.split("/");
  const newPath = splitPath.flatMap((path) => (path.includes(".") ? [] : path));
  return newPath.join("/");
};
