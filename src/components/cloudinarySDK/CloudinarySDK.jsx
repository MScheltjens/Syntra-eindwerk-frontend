import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Transformation } from "@cloudinary/url-gen";
// Import required actions.
import { thumbnail, scale } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const CloudinaryImg = ({ publicId, width, height }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD,
      apiKey: import.meta.env.VITE_CLOUDINARY_KEY,
      apiSecret: import.meta.env.VITE_CLOUDINARY_KEY,
    },
  });

  // Use the image with public ID, 'front_face'.
  const myImage = cld
    .image(publicId)
    .resize(
      thumbnail().width(width).height(height).gravity(focusOn(FocusOn.face()))
    );

  // Render the transformed image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};

export default CloudinaryImg;
