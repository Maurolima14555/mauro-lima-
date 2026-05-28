import { Composition } from 'remotion';
import { VideoComposition } from './VideoComposition';
import { ShortComposition } from './ShortComposition';

export const RemotionRoot: React.FC = () => {
    return (
          <>
            <Composition
              id="FacelessVideo"
              component={VideoComposition}
              durationInFrames={1800}
              fps={30}
              width={1920}
              height={1080}
              defaultProps={{
                          title: 'Sample Video',
                          scenes: [],
                          voiceUrl: '',
                        }}
            />
            <Composition
              id="FacelessShort"
              component={ShortComposition}
              durationInFrames={1800}
              fps={30}
              width={1080}
              height={1920}
              defaultProps={{
                          title: 'Sample Short',
                          scenes: [],
                          voiceUrl: '',
                        }}
            />
          </>
        );
  };
