// vite-env.d.ts
/// <reference types="@modyfi/vite-plugin-yaml/modules" />

declare module "*.mdx" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let MDXComponent: (props: any) => JSX.Element;

  export default MDXComponent;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const metadata: any;
}
