---
title: Managing security context constraints
---

# Managing security context constraints {#managing-pod-security-policies}

In OpenShift Container Platform, you can use security context constraints (SCCs) to control permissions for the pods in your cluster.

Default SCCs are created during installation and when you install some Operators or other components. As a cluster administrator, you can also create your own SCCs by using the OpenShift CLI (`oc`).

> [!IMPORTANT]
> Do not modify the default SCCs. Customizing the default SCCs can lead to issues when some of the platform pods deploy or OpenShift Container Platform
>
> is upgraded. Additionally, the default SCC values are reset to the defaults during some cluster upgrades, which discards all customizations to those SCCs.
>
> Instead of modifying the default SCCs, create and modify your own SCCs as needed. For detailed steps, see [Creating security context constraints](/authentication/managing-security-context-constraints#security-context-constraints-creating_configuring-internal-oauth).

## Additional resources {#additional-resources_configuring-internal-oauth}

- [Getting support](/support/getting-support#getting-support)
