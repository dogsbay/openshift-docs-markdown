{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of CSI inline ephemeral volumes {id="ephemeral-storage-csi-inline-overview_{{ context }}"}

Traditionally, volumes that are backed by Container Storage Interface (CSI) drivers can only be used with a `PersistentVolume` and `PersistentVolumeClaim` object combination. {._abstract}

CSI inline ephemeral volumes allow you to specify CSI volumes directly in the `Pod` specification, rather than in a `PersistentVolume` object. Inline volumes are ephemeral and do not persist across pod restarts.

CSI inline ephemeral volumes are only available with the following supported CSI drivers:

*   Azure File CSI driver
*   {{ secrets_store_driver }}

## Support limitations for CSI inline ephemeral volumes {id="ephemeral-storage-csi-inline-overview-limits_{{ context }}"}


:::important

The Shared Resource CSI Driver feature is now generally available in {{ builds_v2title }} 1.1. This feature is now removed in {{ product_title }} 4.18 and later. To use this feature, ensure that you are using {{ builds_v2title }} 1.1 or later. For information about {{ builds_v2title }} 1.1, see "{{ builds_v2title }} 1.1".

:::


By default, {{ product_title }} supports CSI inline ephemeral volumes with these limitations:

*   Support is only available for CSI drivers. In-tree and FlexVolumes are not supported.
*   Community or storage vendors provide other CSI drivers that support these volumes. Follow the installation instructions provided by the CSI driver provider.

CSI drivers might not have implemented the inline volume functionality, including `Ephemeral` capacity. For details, see the CSI driver documentation.