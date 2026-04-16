import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Miami redirects
      { source: '/:path*', destination: 'https://agentsetupexperts.com/miami-openclaw-setup', permanent: true, has: [{ type: 'host', value: 'miamiopenclawsetup.com' }] },
      { source: '/:path*', destination: 'https://agentsetupexperts.com/miami-openclaw-setup', permanent: true, has: [{ type: 'host', value: 'www.miamiopenclawsetup.com' }] },
      { source: '/:path*', destination: 'https://agentsetupexperts.com/miami-openclaw-setup', permanent: true, has: [{ type: 'host', value: 'miamiopenclaw.com' }] },
      { source: '/:path*', destination: 'https://agentsetupexperts.com/miami-openclaw-setup', permanent: true, has: [{ type: 'host', value: 'www.miamiopenclaw.com' }] },
      { source: '/:path*', destination: 'https://agentsetupexperts.com/miami-openclaw-setup', permanent: true, has: [{ type: 'host', value: 'miamiaisetup.com' }] },
      { source: '/:path*', destination: 'https://agentsetupexperts.com/miami-openclaw-setup', permanent: true, has: [{ type: 'host', value: 'www.miamiaisetup.com' }] },
      // Florida redirects
      { source: '/:path*', destination: 'https://agentsetupexperts.com/florida-ai-setup', permanent: true, has: [{ type: 'host', value: 'floridaopenclawsetup.com' }] },
      { source: '/:path*', destination: 'https://agentsetupexperts.com/florida-ai-setup', permanent: true, has: [{ type: 'host', value: 'www.floridaopenclawsetup.com' }] },
      { source: '/:path*', destination: 'https://agentsetupexperts.com/florida-ai-setup', permanent: true, has: [{ type: 'host', value: 'floridaopenclaw.com' }] },
      { source: '/:path*', destination: 'https://agentsetupexperts.com/florida-ai-setup', permanent: true, has: [{ type: 'host', value: 'www.floridaopenclaw.com' }] },
      { source: '/:path*', destination: 'https://agentsetupexperts.com/florida-ai-setup', permanent: true, has: [{ type: 'host', value: 'floridaaisetup.com' }] },
      { source: '/:path*', destination: 'https://agentsetupexperts.com/florida-ai-setup', permanent: true, has: [{ type: 'host', value: 'www.floridaaisetup.com' }] },
      // Business OpenClaw redirect
      { source: '/:path*', destination: 'https://agentsetupexperts.com/openclaw-setup', permanent: true, has: [{ type: 'host', value: 'businessopenclaw.com' }] },
      { source: '/:path*', destination: 'https://agentsetupexperts.com/openclaw-setup', permanent: true, has: [{ type: 'host', value: 'www.businessopenclaw.com' }] },
    ]
  },
};

export default nextConfig;
