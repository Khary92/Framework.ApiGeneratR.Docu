---
sidebar_position: 6
title: Event Channels
---

# Connecting to Event Channels

ApiGeneratR can distribute events through different channels so that clients only receive the events they are interested in.

Before connecting, define one or more channels in your global configuration. Each channel can represent a role, feature area, or client group.

## 1. Define Channels

Use comma-separated entries to register multiple channels.

```csharp title="Global Config"
// Use comma-separated entries to define multiple channels.
// The auth profile is provided after the colon.
// Example: AllChannel:AllowAnonymous
apigeneratr_com_channels = UserChannel:User,AdminChannel:Admin
```

Each configured channel generates its own WebSocket endpoint.

## 2. Connect to a Channel

Use the generated `IEventReceiver` API to connect to the channel endpoint.

```csharp title="Connect to Channel"
// IEventReceiver is part of the generated API
await EventReceiver.ConnectAsync(
    "ws://core-server:8080/ws/events/userchannel",
    CancellationToken.None);
```

## 3. Endpoint Naming

Channel names are appended to the WebSocket URL in lowercase.

For example:

- `UserChannel` → `/ws/events/userchannel`
- `AdminChannel` → `/ws/events/adminchannel`

Make sure the token required for authentication is set before connecting.

## 4. Why Use Channels?

Channels are useful when different clients should receive different event streams.

Typical examples include:

- user-specific events
- admin-only notifications
- feature-specific updates
- role-based real-time communication

## 5. Notes

- Channel names should be unique within your solution.
- The channel identifier is case-insensitive in configuration, but the generated endpoint uses lowercase.
- Authentication must be configured before the connection is established.
