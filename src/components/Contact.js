// Contact.js
import React from "react";
import "../components/contact.css"

const Contact = () => {
  return (
    <div id="contact1">

      <div class="tooltip-container-linkdine">
        <div class="tooltip-linkdine">
          <div class="profile-linkdine">
            <div class="user-linkdine">
              <div class="img-linkdine">Ui</div>
              <div class="details-linkdine">
                <div class="name-linkdine">User</div>
                <div class="username-linkdine">@username</div>
              </div>
            </div>
            <div class="about-linkdine">500+ Connections</div>
          </div>
        </div>
        <div class="text-linkdine">
          <a class="icon-linkdine" href="https://www.linkedin.com/in/me/" target="_blank">
            <div class="layer-linkdine">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span class="fab fa-linkedin">
                <svg viewBox="0 0 448 512" height="1em">
                  <path
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="text-linkdine">LinkedIn</div>
          </a>
        </div>
      </div>



      <div class="tooltip-container-insta ">
        <div class="tooltip-insta">
          <div class="profile-insta">
            <div class="user-insta">
              <div class="img-insta">Ui</div>
              <div class="details-insta">
                <div class="name-insta">User</div>
                <div class="username-insta">@username</div>
              </div>
            </div>
            <div class="about-insta">800+ Followers</div>
          </div>
        </div>
        <div class="text-insta">
          <a class="icon-insta" href="https://www.instagram.com/tanay_n_7/?igsh=MTNpbDRmZXFmeHNqZg%3D%3D" target="_blank">
            <div class="layer-insta">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span class="instagramSVG">
                <svg
                  fill="white"
                  class="svgIcon"
                  viewBox="0 0 448 512"
                  height="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="text-insta">Instagram</div>
          </a>
        </div>
      </div>

      <div class="tooltip-container-git">
        <div class="tooltip-git">
          <div class="profile-git">
            <div class="user-git">
              <div class="img-git">Ui</div>
              <div class="details-git">
                <div class="name-git">User</div>
                <div class="username-git">@username</div>
              </div>
            </div>
            <div class="about-git">800+ Followers</div>
          </div>
        </div>
        <div class="text-git">
          <a class="icon-git" href="https://github.com/Tanaynaik07" target="_blank">
            <div class="layer-git">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span class="GitSVG">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </span>
            </div>
            <div class="text-git">Git</div>
          </a>
        </div>
      </div>


    </div>
  );
};

export default Contact;
