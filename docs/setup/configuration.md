---
sidebar_position: 1
title: Global Files
---

# Add Global Files

Before configuring your individual projects, create the global files required by the solution.

## 1. Central Package Management

In the root of your solution, create a file named `Directory.Packages.props`.

This file enables **Central Package Management (CPM)**, providing consistent package versions across projects and reducing version conflicts. While optional, CPM is strongly recommended in modularized solutions.

### Configuration

Add the following content to `Directory.Packages.props`. These versions are used across the solution and may be updated as needed, but be aware that breaking changes could affect application functionality.

```xml
<Project>
    <PropertyGroup>
        <ManagePackageVersionsCentrally>true</ManagePackageVersionsCentrally>
    </PropertyGroup>

    <ItemGroup>
        <!-- Dependency injection and core libraries -->
        <PackageVersion Include="Microsoft.Extensions.DependencyInjection" Version="10.0.1"/>
        <PackageVersion Include="Microsoft.CodeAnalysis.CSharp" Version="4.11.0"/>
        <PackageVersion Include="Microsoft.CodeAnalysis.Analyzers" Version="3.11.0"/>
        
        <!-- Identity and authentication -->
        <PackageVersion Include="Microsoft.AspNetCore.Identity" Version="2.3.1"/>
        <PackageVersion Include="Microsoft.Extensions.Identity.Stores" Version="10.0.1"/>
        <PackageVersion Include="Microsoft.AspNetCore.Authentication.JwtBearer" Version="10.0.1"/>
        <PackageVersion Include="Microsoft.AspNetCore.Identity.EntityFrameworkCore" Version="10.0.1"/>
        <PackageVersion Include="System.IdentityModel.Tokens.Jwt" Version="8.15.0"/>
        
        <!-- Utilities -->
        <PackageVersion Include="PolySharp" Version="1.15.0"/>
    </ItemGroup>
</Project>
```

## 2. Global Generator Configuration

ApiGeneratR uses `.globalconfig` to link projects and control generator behavior.
Create a file named `.globalconfig` in the root of your solution and add the following settings:

### Configuration

```ini
is_global = true

# Comma-separated list of client projects (e.g., Presentation.Web,Presentation.Desktop)
apigeneratr_project_clients = Presentation.Web,Presentation.Desktop
apigeneratr_project_definitions = Api.Definitions
apigeneratr_project_handler = Core.Application

# Comma-separated list of profiles (e.g., Admin,User)
apigeneratr_auth_profiles = Public,Admin

# Comma-separated list of channels (e.g., Admin,User)
apigeneratr_com_channels = PublicChannel:Public,AdminChannel:Admin

# Logs incoming commands and queries
apigeneratr_log_mediator = true
# Logs outgoing events
apigeneratr_log_websocket = true
# Logs clientside outgoing requests and incoming events
apigeneratr_log_clientapi = true
```

:::warning Important
Ensure the configured project names exactly match the names used in your solution. If project names or profiles are incorrect, source generation may fail or produce incomplete or incorrect output.
:::