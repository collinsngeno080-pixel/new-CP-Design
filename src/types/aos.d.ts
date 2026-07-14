declare module "aos" {
  const AOS: {
    init: (opts?: any) => void;
    refresh?: () => void;
    refreshHard?: () => void;
  };
  export default AOS;
}
