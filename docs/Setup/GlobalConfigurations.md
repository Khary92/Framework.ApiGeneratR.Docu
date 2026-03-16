---
sidebar_position: 1
title: Global Files
---

# Add Global Files

Before configuring your individual projects, create the global files required by the solution.

## 1. Central Package Management

In the root of your solution, create a file named `Directory.Packages.props`.

This file enables **Central Package Management (CPM)** and defines the package versions used across the solution.

### Configuration

Add the following content to `Directory.Packages.props`:

```xml
<Project>
    <PropertyGroup>
        <ManagePackageVersionsCentrally>true</ManagePackageVersionsCentrally>
    </PropertyGroup>
    
    <ItemGroup>
        <PackageVersion Include="Microsoft.Extensions.DependencyInjection" Version="10.0.1"/>
        <PackageVersion Include="Microsoft.CodeAnalysis.CSharp" Version="4.11.0" />
        <PackageVersion Include="Microsoft.CodeAnalysis.Analyzers" Version="3.11.0" />
        <PackageVersion Include="Microsoft.AspNetCore.Identity" Version="2.3.1"/>
        <PackageVersion Include="Microsoft.Extensions.Identity.Stores" Version="10.0.1"/>
        <PackageVersion Include="Microsoft.AspNetCore.Authentication.JwtBearer" Version="10.0.1"/>
        <PackageVersion Include="PolySharp" Version="1.15.0"/>
        <PackageVersion Include="Microsoft.AspNetCore.Identity.EntityFrameworkCore" Version="10.0.1"/>
        <PackageVersion Include="System.IdentityModel.Tokens.Jwt" Version="8.15.0"/>
    </ItemGroup>
</Project>
```

## 2. Global Generator Configuration

ApiGeneratR uses `.globalconfig` to link projects and control generator behavior.

Create a file named `.globalconfig` in the root of your solution and add the following settings:

### Configuration

```ini
is_global = true

# Use comma-separated values for multiple client projects (for example: Presentation.Web, Presentation.Mobile)
apigeneratr_project_clients = [client project name(s)]
apigeneratr_project_definitions = [definitions project name]
apigeneratr_project_handlers = [handler project name]

# Use comma-separated values for multiple profiles (for example: Admin, User)
apigeneratr_auth_profiles = [profile names]

# Logging and debugging
apigeneratr_log_mediator = true
apigeneratr_log_websocket = true
```

## 3. Notes

Make sure the configured project names exactly match the names used in your solution.

If the project names or profiles are incorrect, source generation may fail or produce incomplete output.