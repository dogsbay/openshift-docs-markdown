---
title: Configuring a GitHub or GitHub Enterprise identity provider
---

# Configuring a GitHub or GitHub Enterprise identity provider {#configuring-github-identity-provider}

Configure the `github` identity provider so users can log in to OpenShift Container Platform with GitHub or GitHub Enterprise accounts through OAuth. Use this integration when you want cluster users to authenticate with existing GitHub credentials instead of managing separate cluster passwords.

You can use the GitHub integration to connect to either GitHub or GitHub Enterprise. For GitHub Enterprise integrations, you must provide the `hostname` of your instance and can optionally provide a `ca` certificate bundle to use in requests to the server.

> [!NOTE]
> The following steps apply to both GitHub and GitHub Enterprise unless noted.

**Additional resources**

- [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider)

**Additional resources**

- [GitHub authentication (GitHub documentation)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)
