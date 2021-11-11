declare module '*.svg' {
  export type SVGComponent = React.VFC<
    React.SVGAttributes<SVGElement>
  >;

  export const ReactComponent: React.VFC<React.SVGAttributes<
    SVGElement
  >>;

  const url: string;
  export default url;
}