import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

// Styles
import { SocialMediaIcon, SocialMediaContainer } from "./styles";

function SocialMedia() {
  return (
    <div>
      <SocialMediaContainer>
        <SocialMediaIcon color="twitter">
          <TwitterIcon />
        </SocialMediaIcon>
        <SocialMediaIcon color="github">
          <GitHubIcon />
        </SocialMediaIcon>
        <SocialMediaIcon color="linkedin">
          <LinkedinIcon />
        </SocialMediaIcon>
      </SocialMediaContainer>
    </div>
  );
}

export default SocialMedia;
