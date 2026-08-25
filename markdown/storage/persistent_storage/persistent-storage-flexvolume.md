---
title: Persistent storage using FlexVolume
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Persistent storage using FlexVolume {id="persistent-storage-using-flexvolume"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-flexvolume" %}

To use storage from a back-end that does not have a built-in plugin, you can extend {{ product_title }} through FlexVolume drivers and provide persistent storage to applications.

FlexVolume is an out-of-tree plugin that uses an executable model to interface with drivers.


:::important

FlexVolume is a deprecated feature. Deprecated functionality is still included in {{ product_title }} and continues to be supported; however, it will be removed in a future release of this product and is not recommended for new deployments.

Out-of-tree Container Storage Interface (CSI) driver is the recommended way to write volume drivers in {{ product_title }}. Maintainers of FlexVolume drivers should implement a CSI driver and move users of FlexVolume to CSI. Users of FlexVolume should move their workloads to CSI driver.

For the most recent list of major functionality that has been deprecated or removed within {{ product_title }}, refer to the _Deprecated and removed features_ section of the {{ product_title }} release notes.

:::


Pods interact with FlexVolume drivers through the `flexvolume` in-tree plugin.

**Additional resources**

*   [Expanding persistent volumes](/storage/expanding-persistent-volumes#expanding-persistent-volumes)

{% leveloffset +1 %}{% include "./modules/persistent-storage-flexvolume-drivers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-flexvolume-driver-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-flexvolume-installing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-flexvolume-consuming.md" %}{% endleveloffset %}