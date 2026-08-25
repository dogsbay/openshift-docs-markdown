---
title: Catalog content resolution
---

# Catalog content resolution {#catalog-content-resolution}

When you specify the cluster extension you want to install in a custom resource (CR), {{ olmv1_first }} uses catalog selection to resolve what content is installed.

You can perform the following actions to control the selection of catalog content:

- Specify labels to select the catalog.
- Use match expressions to perform complex filtering across catalogs.
- Set catalog priority.

If you do not specify any catalog selection criteria, {{ olmv1_first }} selects an extension from any available catalog on the cluster that provides the requested package.

During resolution, bundles that are not deprecated are preferred over deprecated bundles by default.
