{%- set _mod_docs_content_type = "REFERENCE" %}
# PersistentVolumeClaim limits {id="persistent-volume-claim-limits_{{ context }}"}

After you create the `LimitRange` object, you can specify the exact amount of resources that a `PersistentVolumeClaim` resource can consume. {._abstract}

A `PersistentVolumeClaim` resource can consume storage resources.

The following table shows the supported constraints for a persistent volume claim. If specified, the constraints must hold true for each persistent volume claim.

**`PersistentVolumeClaim` resource limits**

<table>
<thead>
<tr>
  <th>Constraint</th>
  <th>Enforced behavior</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Min</code></td>
  <td>Min[<resource>] +<=+ claim.spec.resources.requests[<resource>] (required)</td>
</tr>
<tr>
  <td><code>Max</code></td>
  <td>claim.spec.resources.requests[<resource>] (required) +<=+ Max[<resource>]</td>
</tr>
</tbody>
</table>

```json title="Limit range object definition example"
{
  "apiVersion": "v1",
  "kind": "LimitRange",
  "metadata": {
    "name": "pvcs"
  },
  "spec": {
    "limits": [{
        "type": "PersistentVolumeClaim",
        "min": {
          "storage": "2Gi"
        },
        "max": {
          "storage": "50Gi"
        }
      }
    ]
  }
}
```

where:


`metadata.name`
:   Specifies the name of the limit range object.


`limits.min.storage`
:   Specifies the minimum amount of storage that can be requested in a persistent volume claim.


`limits.max.storage`
:   Specifies the maximum amount of storage that can be requested in a persistent volume claim.