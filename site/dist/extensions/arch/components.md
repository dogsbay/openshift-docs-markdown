---
title: OLM v1 components overview
---

# OLM v1 components overview {#olm-components}

Operator Lifecycle Manager (OLM) v1 uses two key microservice components, Operator Controller and Catalogd, to unpack content and manage extensions on your cluster.

Operator Controller
:   Extends Kubernetes with an API to install and manage Operators and extensions using metadata from Catalogd.

Catalogd
:   Unpacks file-based catalog (FBC) content and hosts metadata so users can discover installable extensions.

**Additional resources**
{._additional-resources}

- [Operator Controller](/openshift-docs-markdown/extensions/arch/operator-controller#operator-controller)
- [Catalogd](/openshift-docs-markdown/extensions/arch/catalogd#catalogd)
