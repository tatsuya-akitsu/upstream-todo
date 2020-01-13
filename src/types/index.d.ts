declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module '*.svg' {
  const content: any
  export default content
}
declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}
declare module '*.sass' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module 'react-vis'
