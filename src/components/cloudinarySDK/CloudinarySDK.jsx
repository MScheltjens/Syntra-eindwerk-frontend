import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Transformation } from "@cloudinary/url-gen";
// Import required actions.
import { thumbnail, scale } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const CloudinaryImg = ({ publicId }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "ddl69s3ju",
      apiKey: "523689474555957",
      apiSecret: "1IuyAhpqYnAzplr1dpsC0IbC4T4",
    },
  });

  // Use the image with public ID, 'front_face'.
  const myImage = cld
    .image(publicId)
    .resize(
      thumbnail().width(500).height(500).gravity(focusOn(FocusOn.face()))
    );

  // Render the transformed image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};

export default CloudinaryImg;
