---
sidebar_position: 3
title: Dependencies
---

# Setup Project Dependencies

After creating your projects and configuring `.globalconfig`, you need to link the projects together. This ensures that both the Client and the Server can access the shared API definitions.

## 1. Link Project References

To allow **ApiGeneratR** to generate the required code, the Client and Server projects must reference the shared Definitions project.

### Client -> Definitions

The Client project needs a reference to the Definitions project so it can use the shared contracts, request types, events, and models.

```xml
<!-- In your Client.csproj -->
<ItemGroup>
  <ProjectReference Include="..\Api.Definitions\Api.Definitions.csproj" />
</ItemGroup>
```

### Server -> Definitionsmei

The Server project also needs a reference to the Definitions project so it can use the same shared API contract.

```xml
<!-- In your Server.csproj -->
<ItemGroup>
  <ProjectReference Include="..\Api.Definitions\Api.Definitions.csproj" />
</ItemGroup>
```

:::info Dependency Flow
The Definitions project is the **Single Source of Truth**. Both Client and Server depend on it, but they do not need to reference each other directly.
:::

## 2. Build the Solution

After setting up your project references, build the solution:

```bash
dotnet build
```

The build should complete without errors.

If you encounter issues, review the previous setup steps and verify that:

- the project references are correct
- `.globalconfig` contains the correct project names
- the required packages and analyzer references are configured

:::success Next Step
Your base infrastructure is now in place. You can start defining your first requests and events.
:::
