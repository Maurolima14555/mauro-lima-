import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from 'remotion';

interface Scene {
  imageUrl: string;
  text: string;
  duration: number;
}

interface VideoCompositionProps {
  scenes: Scene[];
  audioUrl?: string;
  title: string;
  backgroundColor?: string;
}

const SceneComponent: React.FC<{ scene: Scene; index: number }> = ({
  scene,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, fps * 0.5], [0, 1], {
    easing: Easing.ease,
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(frame, [0, fps * 10], [1, 1.05], {
    extrapolateRight: 'clamp',
  });

  const textOpacity = interpolate(
    frame,
    [fps * 0.3, fps * 0.8],
    [0, 1],
    { easing: Easing.ease, extrapolateRight: 'clamp' }
  );

  const textY = interpolate(frame, [fps * 0.3, fps * 0.8], [20, 0], {
    easing: Easing.ease,
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity }}>
      <AbsoluteFill>
        <Img
          src={scene.imageUrl}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${scale})`,
          }}
        />
        <AbsoluteFill
          style={{
            background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%)',
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: '60px',
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            borderRadius: 12,
            padding: '20px 30px',
            maxWidth: '80%',
          }}
        >
          <p
            style={{
              color: 'white',
              fontSize: 36,
              fontFamily: 'sans-serif',
              fontWeight: 600,
              textAlign: 'center',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {scene.text}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const VideoComposition: React.FC<VideoCompositionProps> = ({
  scenes,
  audioUrl,
  backgroundColor = '#000000',
}) => {
  const { fps } = useVideoConfig();
  let currentFrame = 0;

  return (
    <AbsoluteFill style={{ backgroundColor }}>
      {scenes.map((scene, index) => {
        const startFrame = currentFrame;
        const durationInFrames = scene.duration * fps;
        currentFrame += durationInFrames;
        return (
          <Sequence key={index} from={startFrame} durationInFrames={durationInFrames}>
            <SceneComponent scene={scene} index={index} />
          </Sequence>
        );
      })}
      {audioUrl && <Audio src={audioUrl} />}
    </AbsoluteFill>
  );
};

export default VideoComposition;
