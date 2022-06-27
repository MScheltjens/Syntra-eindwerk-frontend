import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";

const CloudinaryVid = () => {
  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "ddl69s3ju",
      apiKey: "523689474555957",
      apiSecret: "1IuyAhpqYnAzplr1dpsC0IbC4T4",
    },
  });

  // Use the video with public ID, 'docs/walking_talking'.
  //   const myVideo = cld.video(publicId);

  //   // Apply the transformation.
  //   myVideo
  //     .resize(
  //       fill()
  //         .width(150)
  //         .height(150)
  //         .gravity(
  //           Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))
  //         )
  //     ) // Crop the video, focusing on the faces.
  //     .roundCorners(byRadius(20)); // Round the corners.

  const myVideo = cld.video(publicId);

  // Render the transformed video in a React component.
  return (
    <div>
      <AspectRatio maxW="560px" ratio={1}>
        <iframe title={myVideo} src={myVideo} allowFullScreen />
      </AspectRatio>
      {/* <AdvancedVideo cldVid={myVideo} controls /> */}
    </div>
  );
};

export default CloudinaryVid;
