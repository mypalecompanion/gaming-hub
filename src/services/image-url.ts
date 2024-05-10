const MEDIA_PATH = "media/";

export const getCroppedImage = (url: string) => {
  const index = url.indexOf(MEDIA_PATH) + MEDIA_PATH.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
