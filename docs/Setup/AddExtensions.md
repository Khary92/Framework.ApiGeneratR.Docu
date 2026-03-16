---
sidebar_position: 4
title: Dependency Injection
---

# Setup DI services

:::important Important
The following extension methods are not available until all the aspects of the generator was generated.
This means the definition project does need at least one command, one query, one event and one handler.
:::

## 1. Add Client Extensions
```C#
// Extension for IServiceCollection
// BaseUrl is a string, for example "http://core-server:8080/"
services.AddHttpClient<IApiClient, ApiHttpClient>(client => { client.BaseAddress = new Uri(BaseUrl); });
services.AddGeneratedClientApiServices();            
```
## 2. Add Server Extensions

```C#
// Extension for IServiceCollection
builder.Services.AddGeneratedHandlerServices();
builder.Services.AddGeneratedSocketConnectionService();

// Extension for WebApplication
app.MapGeneratedApiEndpoints();
app.MapGeneratedWebSocketEndpoint();
```

TODO: Add reference to the architecture diagram and customization options here.