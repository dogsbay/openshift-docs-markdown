---
title: Network considerations
---

# Network considerations {#planning-considerations-3-4}

Review the strategies for redirecting your application network traffic after migration.

## DNS considerations {#dns-considerations_planning-considerations-3-4}

The DNS domain of the target cluster is different from the domain of the source cluster. By default, applications get FQDNs of the target cluster after migration.

To preserve the source DNS domain of migrated applications, select one of the two options described below.

**Additional resources**

- See [Replacing the default ingress certificate](/openshift-docs-markdown/security/certificates/replacing-default-ingress-certificate#replacing-default-ingress) for more information.
