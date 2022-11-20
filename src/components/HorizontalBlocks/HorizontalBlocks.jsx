import React from 'react';
import './HorizontalBlocks.css';

export const HorizontalBlocks = ({ blocks }) => (
  <div className="design-horizontal-blocks-wrapper">
    <div className="design-horizontal-blocks-container">
      {
        blocks.map(({headline, description}, key) =>
          <div key={key} className="design-horizontal-block-container">
            <h2 className="design-horizontal-block-headline">
              {headline}
            </h2>
            <p className="design-horizontal-block-description">
              {description}
            </p>
          </div>
        )
      }
    </div>
  </div>
)
