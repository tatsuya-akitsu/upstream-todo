const toUnderCamel = (str: string) => {
  return str.replace(/_(\w)/g, (_match, capture) => {
    return capture.toUpperCase();
  });
};

const toHyphenCamel = (str: string) => {
  return str.replace(/-(\w)/g, (_match, capture) => {
    return capture.toUpperCase();
  });
};

const classList = (file: any) => {
  interface ClassNames {
    [key: string]: any;
  }
  const classNames: ClassNames = {};
  for (const [key, value] of Object.entries(file)) {
    let _key = toUnderCamel(key);
    const str: string = toHyphenCamel(_key).replace(/-/g, '');
    classNames[str] = value;
  }

  return classNames;
};

export default classList;
