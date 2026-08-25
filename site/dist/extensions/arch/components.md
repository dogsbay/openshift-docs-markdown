---
title: "{{ olmv1 }} components overview"
---

# {{ olmv1 }} components overview {#olm-components}

{{ olmv1_first }} uses two key microservice components, Operator Controller and Catalogd, to unpack content and manage extensions on your cluster.

Operator Controller
:   Extends Kubernetes with an API to install and manage Operators and extensions using metadata from Catalogd.

Catalogd
:   Unpacks file-based catalog (FBC) content and hosts metadata so users can discover installable extensions.

## Additional resources {#additional-resources_olm-components}

- [Operator Controller](/extensions/arch/operator-controller#operator-controller)
- [Catalogd](/extensions/arch/catalogd#catalogd)
