import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to NEXA API - Next + Intelligence + Action';
  }

  getHealth() {
    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '0.1.0',
      ecosystem: {
        tools: 'active',
        agents: 'active',
        mcp: 'active',
        skills: 'active',
        vm: 'active',
      },
    };
  }
}
