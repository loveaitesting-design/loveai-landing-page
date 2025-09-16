// types/css.d.ts
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'slick-carousel/slick/slick.css';
declare module 'slick-carousel/slick/slick-theme.css';