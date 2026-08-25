---
title: Using container registries securely
---

# Using container registries securely {#security-registries}

You can use container registries to store container images, making the images accessible to others either publicly or privately.

By using a registry, you can include multiple versions of an image, optionally limit access to images based on different authentication methods, or make them publicly available.

There are public container registries, such as Quay.io and Docker Hub where many people and organizations share their images. The Red Hat Registry offers supported Red Hat and partner images, while the Red Hat Ecosystem Catalog offers detailed descriptions and health checks for those images. To manage your own registry, you could purchase a container registry such as {{ quay }}.

From a security standpoint, some registries provide special features to check and improve the health of your containers. For example, {{ quay }} offers container vulnerability scanning with Clair security scanner, build triggers to automatically rebuild images when source code changes in GitHub and other locations, and the ability to use role-based access control (RBAC) to secure access to images.

**Additional resources**

- [Red Hat Product Security Center](https://access.redhat.com/security/)
- [Red Hat Security Advisories](https://access.redhat.com/security/security-updates/#/security-advisories)

**Additional resources**

- [Integrated {{ product_registry }}](/openshift-docs-markdown/registry/index#registry-overview)
