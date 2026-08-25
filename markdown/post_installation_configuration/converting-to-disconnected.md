---
title: Converting a connected cluster to a disconnected cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Converting a connected cluster to a disconnected cluster {id="converting-to-disconnected"}
{%- set context = "converting-to-disconnected" %}

You can convert a connected {{ product_title }} cluster to a disconnected cluster by mirroring required registry content and installation media for use without internet access. {._abstract}

There might be some scenarios where you need to convert your {{ product_title }} cluster from a connected cluster to a disconnected cluster.

A disconnected cluster, also known as a restricted cluster, does not have an active connection to the internet. As such, you must mirror the contents of your registries and installation media. You can create this mirror registry on a host that can access both the internet and your closed network, or copy images to a device that you can move across network boundaries.

For information on how to convert your cluster, see the "Converting a connected cluster to a disconnected cluster" procedure in the Disconnected environments section.

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Converting a connected cluster to a disconnected cluster](/disconnected/connected-to-disconnected#converting-to-disconnected)