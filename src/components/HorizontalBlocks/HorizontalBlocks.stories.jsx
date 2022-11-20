import { HorizontalBlocks } from './HorizontalBlocks';

export default {
  title: 'Block/HorizontalBlocks',
  component: HorizontalBlocks,
}

export const Default = {
  args: {
    blocks:
      Array(8).fill({
        headline: 'Dono alto',
        description: <>Vestibulum <span className="highlight">tempus</span> purus nec lacinia consectetur. Mauris congue nec <span className="highlight">felix</span> nec facilisis. Nullam quam neque, malesuada <span className="highlight">sagittis</span> nunc sed, tempus vulputate <span className="highlight">ligula</span>. Proin dictum mauris ut   <span className="highlight">suscipit</span> ullamcorper.</>
      }),
  }
}
