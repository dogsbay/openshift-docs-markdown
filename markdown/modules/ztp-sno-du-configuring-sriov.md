{%- set _mod_docs_content_type = "CONCEPT" %}
# SR-IOV {id="ztp-sno-du-configuring-sriov_{{ context }}"}

Single root I/O virtualization (SR-IOV) is commonly used to enable fronthaul and midhaul networks. The following YAML example configures SR-IOV for a {{ sno }} cluster. {._abstract}


:::note

The configuration of the `SriovNetwork` CR will vary depending on your specific network and infrastructure requirements.

:::


```yaml title="Recommended SriovOperatorConfig CR configuration (SriovOperatorConfig.yaml)"
{% include "./snippets/ztp_SriovOperatorConfig.yaml" %}
```

***`SriovOperatorConfig` CR options for {{ sno }} clusters***

<table>
<thead>
<tr>
  <th>SriovOperatorConfig CR field</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>spec.enableInjector</code></td>
  <td>Disable <code>Injector</code> pods to reduce the number of management pods.Start with the <code>Injector</code> pods enabled, and only disable them after verifying the user manifests.If the injector is disabled, containers that use SR-IOV resources must explicitly assign them in the <code>requests</code> and <code>limits</code> section of the container spec.<br><br>For example:<pre>containers:&#10;- name: my-sriov-workload-container&#10;  resources:&#10;    limits:&#10;      openshift.io/&lt;resource_name&gt;:  "1"&#10;    requests:&#10;      openshift.io/&lt;resource_name&gt;:  "1"</pre></td>
</tr>
<tr>
  <td><code>spec.enableOperatorWebhook</code></td>
  <td>Disable <code>OperatorWebhook</code> pods to reduce the number of management pods. Start with the <code>OperatorWebhook</code> pods enabled, and only disable them after verifying the user manifests.</td>
</tr>
</tbody>
</table>

```yaml title="Recommended SriovNetwork configuration (SriovNetwork.yaml)"
{% include "./snippets/ztp_SriovNetwork.yaml" %}
```

**`SriovNetwork` CR options for {{ sno }} clusters**

| SriovNetwork CR field | Description |
| --- | --- |
| `spec.vlan` | Configure `vlan` with the VLAN for the midhaul network. |

```yaml title="Recommended SriovNetworkNodePolicy CR configuration (SriovNetworkNodePolicy.yaml)"
{% include "./snippets/ztp_SriovNetworkNodePolicy.yaml" %}
```

**`SriovNetworkPolicy` CR options for {{ sno }} clusters**

| SriovNetworkNodePolicy CR field | Description |
| --- | --- |
| `spec.deviceType` | Configure `deviceType` as `vfio-pci` or `netdevice`. For Mellanox NICs, set `deviceType: netdevice`, and `isRdma: true`. For Intel based NICs, set `deviceType: vfio-pci` and `isRdma: false`. |
| `spec.nicSelector.pfNames` | Specifies the interface connected to the fronthaul network. |
| `spec.numVfs` | Specifies the number of VFs for the fronthaul network. |
| `spec.nicSelector.pfNames` | The exact name of physical function must match the hardware. |

```yaml title="Recommended SR-IOV kernel configurations (07-sriov-related-kernel-args-master.yaml)"
{% include "./snippets/ztp_07-sriov-related-kernel-args-master.yaml" %}
```