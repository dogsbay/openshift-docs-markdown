---
title: Managing catalogs
---

# Managing catalogs {#managing-catalogs}

Cluster administrators can add *catalogs*, or curated collections of Operators and Kubernetes extensions, to their clusters. Operator authors publish their products to these catalogs.

When you add a catalog to your cluster, you have access to the versions, patches, and over-the-air updates of the Operators and extensions that are published to the catalog.

You can manage catalogs and extensions declaratively from the CLI by using custom resources (CRs).

*File-based catalogs* are the latest iteration of the catalog format in Operator Lifecycle Manager (OLM). It is a plain text-based (JSON or YAML) and declarative config evolution of the earlier SQLite database format, and it is fully compatible with earlier versions.

> [!IMPORTANT]
> Kubernetes periodically deprecates certain APIs that are removed in subsequent releases. As a result, Operators are unable to use removed APIs starting with the version of OpenShift Container Platform that uses the Kubernetes version that removed the API.

**Additional resources**

- [File-based catalogs](/openshift-docs-markdown/extensions/catalogs/fbc#fbc)
