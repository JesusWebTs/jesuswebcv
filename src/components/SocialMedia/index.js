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
        <SocialMediaIcon color="twitter" href="https://twitter.com/Richard18362733" target="_blank">
          <TwitterIcon />
        </SocialMediaIcon>
        <SocialMediaIcon color="github" href="https://github.com/xzotacx" target="_blank">
          <GitHubIcon />
        </SocialMediaIcon>
        <SocialMediaIcon color="linkedin" href="https://www.linkedin.com/in/jesusweb/" target="_blank">
          <LinkedinIcon />
        </SocialMediaIcon>
      </SocialMediaContainer>
    </div>
  );
}

export default SocialMedia;
