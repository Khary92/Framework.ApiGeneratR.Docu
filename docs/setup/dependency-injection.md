---
sidebar_position: 4
title: Dependency Injection
---

# Dependency Injection Setup

:::important
These extension methods are only available **after the generator has processed at least one command, query, event, and
handler** in your definition project. Make sure your generator is properly configured before calling them.
:::

:::info
The generator automatically generates extension methods for service dependency injection.
The `BaseUrl` is not a constant, as this address might change depending on proxies or deployment methods. After
building the project with the generator, you can inspect the generated files. Using **interface-based programming**
makes it easy to replace the implementation with a mock or a custom implementation.
:::

## 1. Register Client Services

Add the generated API client services to your `IServiceCollection`:

```csharp
// Configure HttpClient with a base URL
services.AddHttpClient<IApiClient, ApiHttpClient>(client =>
{
    client.BaseAddress = new Uri(BaseUrl); // Example: "http://core-server:8080/"
});

// Register generated client API services
services.AddGeneratedClientApiServices();
```

## 2. Register Server Services

Add the generated server-side services and endpoints:

```csharp
// Register handler services and WebSocket connection service
builder.Services.AddGeneratedHandlerServices();
builder.Services.AddGeneratedSocketConnectionService();

// Map API and WebSocket endpoints on WebApplication
app.MapGeneratedApiEndpoints();
app.MapGeneratedWebSocketEndpoint();
```