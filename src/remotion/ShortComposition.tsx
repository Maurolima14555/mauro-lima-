import React from 'react';
import { AbsoluteFill, Audio, Img, interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';

export const ShortComposition = ({ title, scenes, voiceUrl }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, fps * 0.5, fps * 2, fps * 2.5], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  let cf = fps * 2;
  return (
    <AbsoluteFill style={{ background: 'linear-gradient(180deg, #0f0c29, #302b63, #24243e)' }}>
      <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity }}>
        <h1 style={{ color: '#fff', fontSize: 52, textAlign: 'center' }}>{title}</h1>
      </AbsoluteFill>
      {scenes.map((scene, i) => {
        const sf = cf;
        const df = fps * scene.duration;
        cf += df;
        return (
          <Sequence key={i} from={sf} durationInFrames={df}>
            <AbsoluteFill>
              <p style={{ color: '#fff', fontSize: 38, textAlign: 'center', fontWeight: 700 }}>{scene.text}</p>
              {scene.audioUrl && <Audio src={scene.audioUrl} />}
            </AbsoluteFill>
          </Sequence>
        );
      })}
      {voiceUrl && <Audio src={voiceUrl} />}
    </AbsoluteFill>
  );
};
