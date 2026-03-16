---
sidebar_position: 3
title: Defining Events
---

# Defining Events

Events complement commands and requests. While requests flow from the client to the server, **events** are pushed from the server to one or more clients.

They are primarily used to notify clients about state changes or newly available data in real time.

## 1. The `Event` Attribute

Each event must be decorated with the `[Event]` attribute. This allows the generator to create the required serialization and distribution infrastructure.

```csharp title="MessageReceivedEvent.cs"
using ApiGeneratR.Attributes;

namespace Api.Definitions.Events.Message;

[Event("message-received")]
public record MessageReceivedEvent(
    Guid Id,
    string ConversationId,
    Guid OriginUserId,
    string Text,
    DateTime TimeStamp);
```

### Parameters

- **Identifier**: The string parameter (for example, `"message-received"`) is used for internal serialization and event dispatching.
- **Encapsulation**: Because these details are handled by generated code, you are free to choose any identifier format that fits your project.
- **Uniqueness**: The identifier must be unique across the entire solution to avoid routing or dispatch conflicts.

## 2. Real-Time Communication

Unlike regular request/response interactions, events are typically delivered through a persistent connection such as WebSockets or SignalR.

ApiGeneratR handles the infrastructure required to distribute these events to connected clients.

:::info Recommendation
Use `record` types for events whenever possible. They are concise, immutable by default, and well suited for DTO-style payloads.
:::

## 3. Implementation Notes

Use events whenever the server needs to notify one or more clients about changes that happen outside of a direct request/response flow.

Typical examples include:

- newly created or updated entities
- background processing results
- chat or notification messages
- synchronization updates for connected clients
```
