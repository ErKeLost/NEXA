# API Documentation

## Overview

The NEXA API provides RESTful endpoints for interacting with the platform's ecosystem.

**Base URL**: `http://localhost:3001`  
**Documentation**: `http://localhost:3001/api/docs` (Swagger)

## Authentication

All authenticated endpoints require a Bearer token:

```
Authorization: Bearer <your-token>
```

## Endpoints

### Health Check

#### GET /
Get API status

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "version": "0.1.0",
  "ecosystem": {
    "tools": "active",
    "agents": "active",
    "mcp": "active",
    "skills": "active",
    "vm": "active"
  }
}
```

### Authentication

#### POST /api/auth/login
Login user

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "jwt-token",
    "user": {
      "id": "user-id",
      "email": "user@example.com",
      "name": "User Name"
    }
  }
}
```

#### POST /api/auth/register
Register new user

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password",
  "name": "User Name"
}
```

### Tools

#### GET /api/tools
List all tools

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "tool-1",
      "name": "Code Formatter",
      "description": "Format code according to style guides",
      "version": "1.0.0",
      "enabled": true
    }
  ]
}
```

#### POST /api/tools/:id/run
Run a specific tool

**Request:**
```json
{
  "params": {
    "code": "const x=1;",
    "language": "javascript"
  }
}
```

### Agents

#### GET /api/agents
List all agents

#### POST /api/agents/:id/execute
Execute agent task

**Request:**
```json
{
  "task": {
    "type": "code-generation",
    "input": {
      "prompt": "Create a React component"
    }
  }
}
```

### MCP

#### GET /api/mcp
List MCP integrations

#### POST /api/mcp/:id/send
Send message via MCP

### Skills

#### GET /api/skills
List all skills

#### POST /api/skills/:id/execute
Execute a skill

### VM

#### POST /api/vm/create
Create a new VM instance

**Request:**
```json
{
  "config": {
    "id": "vm-1",
    "name": "dev-environment",
    "image": "ubuntu:22.04",
    "cpu": 2,
    "memory": "4GB",
    "storage": "20GB"
  }
}
```

#### POST /api/vm/:id/execute
Execute command in VM

**Request:**
```json
{
  "command": "npm install"
}
```

## Error Responses

All endpoints may return error responses:

```json
{
  "success": false,
  "error": "Error message",
  "message": "Detailed error description"
}
```

### HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Rate Limiting

API requests are limited to 100 requests per minute per IP address.

## WebSocket

Real-time updates available at `ws://localhost:3001/ws`

### Events

- `agent.started` - Agent execution started
- `agent.progress` - Agent progress update
- `agent.completed` - Agent execution completed
- `agent.error` - Agent execution error

## SDK

TypeScript SDK coming soon!
