{%- set _mod_docs_content_type = "CONCEPT" %}
# Static and dynamic device discovery in {{ lvms }} {id="static-and-dynamic-device-discovery-in-lvms_{{ context }}"}

You can use static or dynamic discovery policies to manage how block devices join your volume groups. Selecting the appropriate policy helps you automate storage expansion safely or preserve a locked, predictable storage footprint over time. {._abstract}


Static
:   The Operator creates the volume group by using devices it finds at installation time. The Operator ignores devices discovered after the volume group exists. 

    Static discovery is the default policy for new volume groups. It eliminates operational risk by locking the device set after the Operator creates the volume group.

    Combined with explicit device paths, it provides a fully deterministic storage configuration.

    Without explicit paths, the Operator discovers devices only at creation time and then stops the set.
     

Dynamic
:   The Operator continuously discovers and adds devices to the volume group on each reconciliation cycle.

    Dynamic discovery remains the default for existing volume groups where the policy field is nil to maintain backward compatibility.

    However, this policy can lead to unexpected behavior in production environments. Devices that appear after the initial setup because of hardware changes, driver reloads, or kernel device renaming are automatically added to the volume group.

    This creates operational risk because the volume group composition becomes non-deterministic and depends on the runtime state of the node rather than explicit administrator intent.


:::note

The Operator adds the `DeviceDiscoveryPolicy` field to the `DeviceClass` specification. If you explicitly set device paths in `deviceSelector.paths` or `deviceSelector.optionalPaths`, the cluster always uses those exact paths, and ignores your discovery policy setting.

:::


The cluster status reports the effective policy by using `DeviceDiscoveryPolicyStatus`, which distinguishes three runtime states:

**Effective policy status values**

| Status value | Description |
| --- | --- |
| `Preconfigured` | Explicit device paths configuration by using `deviceSelector`. Discovery policy is not applicable. |
| `RuntimeDynamic` | No explicit paths. Discovery policy is Dynamic. The Operator continuously discovers devices. |
| `RuntimeStatic` | No explicit paths. Discovery policy is Static. The Operator discovers devices once at creation time. |

The following table shows the behavior matrix:

**Device discovery behavior by configuration**

| Explicit paths | Discovery policy | Effective behavior |
| --- | --- | --- |
| Yes | Any / nil | `Preconfigured`: The Operator honors the specified paths and ignores the discovery policy. |
| No | `Static` | `RuntimeStatic`: The Operator locks the device set immediately after creating the volume group |
| No | `Dynamic` | `RuntimeDynamic`: continuous discovery every 30 seconds |
| No | nil (new volume group) | `RuntimeStatic`: defaults to Static |
| No | nil (existing volume group) | `RuntimeDynamic`: defaults to Dynamic for backward compatibility |