---
title: Securing the container platform
---

# Securing the container platform {#security-platform}

To make your OpenShift Container Platform cluster more secure, you should understand the security enhancements you can make to APIs used by OpenShift Container Platform. OpenShift Container Platform and Kubernetes APIs are key to automating container management at scale. APIs are used to:

- Validate and configure the data for pods, services, and replication controllers.
- Perform project validation on incoming requests and start triggers on other major system components.

Security-related features in OpenShift Container Platform that are based on Kubernetes include:

- Multitenancy, which combines Role-Based Access Controls and network policies to isolate containers at multiple levels.
- Admission plugins, which form boundaries between an API and those making requests to the API.

OpenShift Container Platform uses Operators to automate and simplify the management of Kubernetes-level security features.

**Additional resources**

- [Introduction to OpenShift Container Platform](/architecture/architecture#architecture-platform-introduction_architecture)
- [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac)
- [About admission plugins](/architecture/admission-plug-ins#admission-plug-ins)
- [Managing security context constraints](/authentication/managing-security-context-constraints#managing-pod-security-policies)
- [SCC reference commands](/authentication/managing-security-context-constraints#security-context-constraints-command-reference_configuring-internal-oauth)
- [Examples of granting roles to service accounts](/authentication/understanding-and-creating-service-accounts#service-accounts-granting-roles_understanding-service-accounts)
- [Configuring the internal OAuth server](/authentication/configuring-internal-oauth#configuring-internal-oauth)
- [Understanding identity provider configuration](/authentication/understanding-identity-provider#understanding-identity-provider)
- [Certificate types and descriptions](/security/certificate_types_descriptions/user-provided-certificates-for-api-server#cert-types-user-provided-certificates-for-the-api-server)
- [Proxy certificates](/security/certificate_types_descriptions/proxy-certificates#proxy-certificates)
- [Running APIcast on Red Hat OpenShift](https://access.redhat.com/documentation/en-us/red_hat_3scale_api_management/2.0/html/deployment_options/apicast-openshift)
