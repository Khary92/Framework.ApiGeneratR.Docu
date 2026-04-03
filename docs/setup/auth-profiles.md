---
sidebar_position: 4
title: Auth Profiles
---

# Setting up Auth Profiles

ApiGeneratR supports authorization profiles that can be assigned to requests and mapped to ASP.NET Core authorization policies.

Use this when you want generated requests to resolve to predefined authorization rules such as `Public`, `User`, or `Admin`.

## 1. Define Auth Profiles

Auth profiles are configured in your `.globalconfig` file using a comma-separated list.

```ini title=".globalconfig"
# Use comma separation for multiple profiles, for example: Admin,User
apigeneratr_auth_profiles = Public,Admin
```

Each profile name must match an authorization policy that exists in your application.

## 2. Register the Matching Policies

In your ASP.NET Core startup code, define the policies referenced by the profiles.

```csharp title="Program.cs"
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("Public", policy => policy.RequireRole("user"));
    options.AddPolicy("Admin", policy => policy.RequireRole("admin"));
});
```

The profile name and policy name should be identical.

:::warning
The implementation is currently not checked by an analyzer. The compiler will not warn you if you have a typo or if you forget to register a policy.
:::

## 3. How It Is Used

When a request uses one of the configured auth profiles, ApiGeneratR maps that profile to the corresponding authorization policy during code generation.  
The `RequestAttribute` contains a string reference to the profile name and includes it in the generated API definition.

See the [Request Attribute](../quickstart-guide/create-requests.md) page for more details.