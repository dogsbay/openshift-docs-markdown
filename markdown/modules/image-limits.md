{%- set _mod_docs_content_type = "REFERENCE" %}
# Image limits {id="image-limits_{{ context }}"}

After you create the `LimitRange` object, you can specify the exact amount of resources that an image can consume. {._abstract}

An image can consume the following resources:

*   Storage
*   `openshift.io/Image`

The following table shows the supported constraints for an image. If specified, the constraints must hold true for each image.

***Image limits***

<table>
<thead>
<tr>
  <th>Constraint</th>
  <th>Behavior</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Max</code></td>
  <td><code>image.dockerimagemetadata.size</code> less than or equal to <code>Max[<resource>]</code></td>
</tr>
</tbody>
</table>


:::note

To prevent blobs that exceed the limit from being uploaded to the registry, you must configure the registry to enforce quota. The `REGISTRY_MIDDLEWARE_REPOSITORY_OPENSHIFT_ENFORCEQUOTA` environment variable must be set to `true`. By default, the environment variable is set to `true` for new deployments.

:::