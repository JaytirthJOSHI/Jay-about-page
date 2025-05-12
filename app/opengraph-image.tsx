import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const dynamic = 'force-static'; // Required for static export

export const alt = 'Jaytirth Joshi - CEO & Founder of HealthSathi';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(to right, #d32f2f, #f44336)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            marginBottom: 20,
          }}
        >
          Jaytirth Joshi
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 'normal',
            marginBottom: 40,
          }}
        >
          CEO & Founder of HealthSathi
        </div>
        <div
          style={{
            fontSize: 28,
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          Medical AI Innovator passionate about bridging healthcare & technology
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 