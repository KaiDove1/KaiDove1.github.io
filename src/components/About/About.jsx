import React from 'react';
import './About.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="header">
        <h1>Kai Dove</h1>
        <h2>庄鎧鴻 /zhuāng kǎi hóng/</h2>
      </div>
      <div className="info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        </p>
        <p>
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
        </p>
      </div>
      <div className="images">
        <img src="path_to_image_1" alt="Description 1" />
        <img src="path_to_image_2" alt="Description 2" />
        <img src="path_to_image_3" alt="Description 3" />
        <img src="path_to_image_4" alt="Description 4" />
      </div>
    </div>
  );
};

export default MainContent;
