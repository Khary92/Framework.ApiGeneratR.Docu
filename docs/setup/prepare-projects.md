---
sidebar_position: 2
title: Projects
---

# Project Setup

To use **ApiGeneratR**, structure your solution into three main projects and configure the generator through `.globalconfig`.

## 1. Project Structure

Create the following projects in your solution:


| Project         | Description                                                                    |
|:----------------|:-------------------------------------------------------------------------------|
| **Definitions** | Contains the shared API contracts, models, requests, and events.               |
| **Client**      | The consuming application, such as a web, desktop, or mobile frontend.         |
| **Server**      | Contains the application logic, request handlers, and server-side integration. |

---

## 2. Configure Project Files

Add the following entries to your `.csproj` files.

### 2.1 Definitions Project

```xml
<ItemGroup>
    <ProjectReference Include="..\ApiGeneratR\ApiGeneratR.csproj" OutputItemType="Analyzer" ReferenceOutputAssembly="false" />
    <PackageReference Include="Microsoft.AspNetCore.Identity.EntityFrameworkCore" />
    <PackageReference Include="System.IdentityModel.Tokens.Jwt" />
</ItemGroup>
```

### 2.2 Server Project

```xml
<ItemGroup>
    <PackageReference Include="Microsoft.Extensions.DependencyInjection" />
    <ProjectReference Include="..\ApiGeneratR\ApiGeneratR.csproj" OutputItemType="Analyzer" ReferenceOutputAssembly="false" />
</ItemGroup>
```

### 2.3 Client Project

```xml
<ItemGroup>
    <ProjectReference Include="..\ApiGeneratR\ApiGeneratR.csproj" OutputItemType="Analyzer" ReferenceOutputAssembly="false" />
</ItemGroup>
```

## 3. Add the ApiGeneratR Project

Copy the ApiGeneratR project from the example repository into your solution.

A NuGet package would also be possible, but including the project directly gives you full control over the generator source code and behavior.

:::warning Important
Make sure the project names are configured correctly in `.globalconfig`.
This is required for correct source generation.
:::
