---
sidebar_position: 1
title: Architecture Overview
---

# Architecture Overview

This page explains how **ApiGeneratR** connects Client and Server through a shared definition layer and generated
infrastructure.

## Generated Dependencies

The following diagram shows the high-level architecture and communication flow of an ApiGeneratR-based solution.

![Generated API Architecture](/img/All-API.svg)

:::info Implementation Details
This diagram focuses on structural dependencies and communication paths. It does not describe the internal
implementation details of generated controllers, handlers, or transport layers.
:::

## Core Components

The architecture is built around three core parts that keep responsibilities clearly separated.

### 1. Definitions Project

The **Definitions** project is the **Single Source of Truth** for the API contract. It contains the shared request,
event, and model definitions used by both Client and Server.

### 2. Client Projects

Client projects such as web or mobile applications use the generated infrastructure to send commands and queries to the
server. They can also subscribe to events in order to react to server-side changes in real time.

### 3. Server Project

The **Server** project contains the application logic and request handlers. It processes incoming requests and publishes
events to connected clients when relevant state changes occur.

## Communication Flow

ApiGeneratR follows the **CQRS (Command Query Responsibility Segregation)** pattern:

- **Requests and responses**: Clients send requests defined in the shared definitions project and receive strongly typed
  responses.
- **Event distribution**: The server processes requests and pushes resulting state changes to interested clients through
  events.

## Why This Structure Matters

This separation provides several benefits:

- a single shared contract between Client and Server
- reduced manual wiring
- consistent type-safe communication
- a clear distinction between request handling and event distribution

:::tip Next Steps
To set up your solution structure and generator configuration, continue with the documents in the **Setup** section.
:::
