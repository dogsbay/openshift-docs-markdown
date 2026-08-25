{%- set _mod_docs_content_type = "CONCEPT" %}
# Extended Tuned profile {id="ztp-sno-du-tuning-the-performance-patch_{{ context }}"}

{{ sno_caps }} clusters that run DU workloads require additional performance tuning configurations necessary for high-performance workloads. The following example `Tuned` CR extends the `Tuned` profile: {._abstract}

```yaml title="Recommended extended Tuned profile configuration (TunedPerformancePatch.yaml)"
{% include "./snippets/ztp_TunedPerformancePatch.yaml" %}
```

***`Tuned` CR options for {{ sno }} clusters***

<table>
<thead>
<tr>
  <th>Tuned CR field</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>spec.profile.data</code></td>
  <td><ul><li>The <code>include</code> line that you set in <code>spec.profile.data</code> must match the associated <code>PerformanceProfile</code> CR name.</li></ul>For example, <code>include=openshift-node-performance-${PerformanceProfile.metadata.name}</code>.</td>
</tr>
</tbody>
</table>