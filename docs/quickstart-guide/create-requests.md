---
sidebar_position: 2
title: Defining Requests
---

# Defining API Requests

Requests are the payloads sent from the client to the server. Because they define the shared contract, they provide the generator with the metadata required to create the supporting infrastructure.

:::warning Compilation Required
At least one request implementation must exist for generation and compilation to succeed. An entirely empty setup can result in missing generated types or compiler errors.
:::

## 1. The `Request` Attribute

Every API request must be decorated with the `[Request]` attribute. This attribute defines routing, authorization, and the logical role of the request within your API.

### Parameters

| Parameter     | Description                                                                                                                                                                               |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Route`       | Defines the internal route identifier. It must be unique. Even though routing is encapsulated by the generated code, descriptive names are still recommended for diagnostics and logging. |
| `AuthPolicy`  | Links the request to an authorization policy such as `"AllowAnonymous"` or `"User"`. These policies are configured through your `.globalconfig`.                                          |
| `RequestType` | Defines whether the request is a `Command` (write operation) or a `Query` (read operation).                                                                                               |

## 2. Defining a Query

To define a query, create a `record` and decorate it with `[Request(...)]`. A `record` is recommended because requests are usually immutable contract types.

```csharp title="LoginQuery.cs"
[Request("login", "AllowAnonymous", RequestType.Query)]
public record LoginQuery(string Email, string Password) : RequestResponseTag<string>
{
    // Custom ToString for secure logging
    public override string ToString() => $"LoginQuery (Email: {Email}, Password: [redacted])";
}
```

## 3. Defining a Command

To define a command, create a command contract type and decorate it with `[Request(...)]`. In this example, the command is also implemented as a `record`, which is a good default for immutable request models.

```csharp title="ChangePasswordCommand.cs"
[Request("change-password", "User", RequestType.Command)]
public record ChangePasswordCommand(string OldPassword, string NewPassword, Guid IdentityId = default) : RequestResponseTag<bool>
{
    public override string ToString() => $"ChangePasswordCommand (OldPassword: [redacted], NewPassword: [redacted], IdentityId: [redacted])";
}
```

## 4. Key Components

- **`[Request]` attribute**: Defines routing, authorization, and request semantics.
- **Contract type**: Contains the data required for server-side processing.
- **`RequestResponseTag<T>`**: A required generic marker that defines the expected response type for the request.

## 5. Implementation Notes

For a more complete reference with additional request patterns, see the request definitions in the example project or repository structure used by ApiGeneratR.

:::tip Security Best Practice
If a request contains sensitive information such as passwords, tokens, or internal identifiers, override `ToString()` and redact those values before they can appear in logs.
:::