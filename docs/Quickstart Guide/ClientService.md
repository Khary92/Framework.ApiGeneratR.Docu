---
sidebar_position: 4
title: Injecting Client Services
---

# Injecting Client Services

You can access the generated client API through dependency injection by using `IApiContainer`.

If you want a more convenient integration, you can decorate a service with the `[ApiConsumer]` attribute. This allows the generator to create a partial class that maps commonly used API interfaces to fields and automatically handles event subscription and unsubscription.

This reduces boilerplate and helps avoid issues such as forgotten event deregistration.

## 1. The `ApiConsumer` Attribute

You can decorate a client service with the `[ApiConsumer]` attribute.

When you do this, the generator creates a partial class for that service, injects the required API interfaces into fields, and wires up event handlers for the event types defined in the attribute.

```csharp title="UserService.cs"
using Api.Definitions.Events.User;
using ApiGeneratR.Attributes;

namespace Presentation.Web.State.User;

[ApiConsumer(typeof(UserCreatedEvent), typeof(UserDeletedEvent), typeof(UserUpdatedEvent))]
public partial class UserService
{
    private async Task HandleUserCreatedEventAsync(UserCreatedEvent @event)
    {
        // Handle UserCreatedEvent
    }

    private async Task HandleUserDeletedEventAsync(UserDeletedEvent @event)
    {
        // Handle UserDeletedEvent
    }

    private async Task HandleUserUpdatedEventAsync(UserUpdatedEvent @event)
    {
        // Handle UserUpdatedEvent
    }
}
```

The event types passed to the attribute tell the generated partial class which events to subscribe to and which handler methods to call.

Each declared event type must have a matching handler method in the service. If a required handler is missing, the project will fail to compile. This ensures that every configured event is handled explicitly.

## 2. Mapped Interfaces

The generated partial class can provide access to the following interfaces:

| Interface | Description |
| :--- | :--- |
| `IApiContainer` | A facade that provides access to all interfaces required for server communication. It also exposes a `SetToken(string token)` method for assigning JWT tokens. For convenience, the generated partial class also provides a delegated `SetToken(string token)` method. |
| `IWebSocketService` | Provides the event channel for receiving data from the server. After setting a token for authentication, this interface can be used to establish or close a WebSocket connection. |
| `ICommandSender` | Provides asynchronous `SendAsync(...)` overloads for sending commands with strongly typed payloads defined in the shared API project. |
| `IQuerySender` | Provides asynchronous `SendAsync(...)` overloads for sending queries with strongly typed payloads defined in the shared API project. |
| `IEventPublisher` | Provides a `PublishAsync(...)` method for client-side event distribution to subscribed receivers. |
| `IEventSubscriber` | Provides `Subscribe<TEvent>(...)` and `Unsubscribe<TEvent>(...)` methods for client-side event registration and deregistration. |

## 3. When to Use It

You do not need to use `[ApiConsumer]` if you prefer to work with `IApiContainer` directly.

The attribute is mainly useful when you want:

- less repetitive injection code
- automatic event subscription management
- a cleaner service implementation
- reduced risk of missing unsubscription logic

:::info Note
You can always inject and use `IApiContainer` directly if you do not want to rely on the generated partial class.

The event publisher, event subscriber, and the `[ApiConsumer]` attribute can also be used for local event distribution.
:::
```