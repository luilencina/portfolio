export const getAssetPath = (asset: string) =>
  import.meta.env.PROD ? `/portfolio${asset}` : asset;
