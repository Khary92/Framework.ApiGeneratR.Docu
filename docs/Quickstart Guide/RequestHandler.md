---
sidebar_position: 5
title: Implementing Request Handlers
---

# Implementing Request Handlers

Once a request has been defined, it must be handled on the server.

Request handlers contain the application logic for processing commands and queries. They connect the generated API contract to your application code.

## 1. The `RequestHandler` Attribute

Each handler must be decorated with the `[RequestHandler]` attribute.

This attribute links the handler to the request type it is responsible for. Based on this information, ApiGeneratR can generate the required request pipeline and integration code.

```csharp title="CreateUserCommandHandler.cs"
using Api.Definitions.Dto;
using Api.Definitions.Generated;
using Api.Definitions.Requests.Commands;
using ApiGeneratR.Attributes;

namespace Core.Application.Handlers;

[RequestHandler(typeof(CreateUserCommand))]
public class CreateUserCommandHandler(IEventSender eventSender) : ICreateUserCommandHandler
{
    public async Task<CommandResponse> HandleAsync(CreateUserCommand command, CancellationToken ct = default)
    {
        try
        {
            var user = new User(params); // pseudo code

            // IEventSender is part of the generated API
            await eventSender.SendAsync(new UserCreatedEvent(user));

            return new CommandResponse(true);
        }
        catch (Exception ex)
        {
            return new CommandResponse(false, ex.Message);
        }
    }
}
```

## 2. Handler Responsibilities

A request handler is responsible for exactly one request type.

Typical responsibilities include:

- validating input
- calling domain or infrastructure services
- persisting changes
- publishing events
- returning the expected response type

A handler should focus on orchestrating a single use case.

## 3. Dependency Injection

Handlers can use constructor injection to access application services, repositories, or generated API infrastructure.

In the example above, `IEventSender` is injected and used to publish an event after the command has been processed successfully.

## 4. Generated Integration

Once a handler is annotated with `[RequestHandler]`, ApiGeneratR can include it in the generated request pipeline.

This typically includes:

- generating request-to-handler bindings
- routing requests to the correct handler
- wiring the handler into the generated infrastructure

## 5. Design Guidance

Keep handlers focused and predictable.

A good handler usually:

- handles one request type
- coordinates one use case
- delegates complex domain logic to dedicated services
- returns the contractually expected response type

:::tip Tip
Think of a request handler as the server-side entry point for a single use case.
:::
```
