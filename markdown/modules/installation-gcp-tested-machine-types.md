{%- set _mod_docs_content_type = "REFERENCE" %}
# Tested instance types for {{ gcp_short }} {id="installation-gcp-tested-machine-types_{{ context }}"}

The following {{ gcp_full }} instance types have been tested with {{ product_title }}.


:::note

Not all instance types are available in all regions and zones. For a detailed breakdown of which instance types are available in which zones, see [regions and zones](https://cloud.google.com/compute/docs/regions-zones#available) (Google documentation).

Some instance types require the use of Hyperdisk storage. If you use an instance type that requires Hyperdisk storage, all of the nodes in your cluster must support Hyperdisk storage, and you must change the default storage class to use Hyperdisk storage. For more information, see [machine series support for Hyperdisk](https://cloud.google.com/compute/docs/disks/hyperdisks#machine-type-support) (Google documentation). For instructions on modifying storage classes, see the "GCE PersistentDisk (gcePD) object definition" section in the Dynamic Provisioning page in _Storage_.

:::


<details>
<summary>Machine series</summary>

```
* `A2`
* `A3`
* `C2`
* `C2D`
* `C3`
* `C3D`
* `C4`
* `E2`
* `M1`
* `N1`
* `N2`
* `N2D`
* `N4`
* `Tau T2D`
```
</details>