{%- set _mod_docs_content_type = "REFERENCE" %}
# Image stream limits {id="image-stream-limits_{{ context }}"}

After you create the `LimitRange` object, you can specify the exact amount of resources that an image stream can consume. {._abstract}

An image stream can consume the following resources:

*   `openshift.io/image-tags`
*   `openshift.io/images`
*   `openshift.io/ImageStream`

The `openshift.io/image-tags` limit bounds unique references derived from tag definitions in the `imagestream.spec.tags` resource. A reference can be an `ImageStreamTag`, an `ImageStreamImage`, or a `DockerImage`. You can use the `oc tag` and `oc import-image` commands to create tags. Internal and external references are not distinguished, and each unique reference in the spec is counted once. Updates that would exceed the limit are rejected, including updates from pushes to the internal registry that add or change tag definitions.

The `openshift.io/images` limit bounds unique image identities recorded in `imagestream.status.tags`. The name is equivalent to the digest for the image. It limits how many distinct images the stream can reference in status, including from registry pushes. Internal and external references are not distinguished.


:::important

Do not read `openshift.io/image-tags` and `openshift.io/images` as "tag names versus images per tag." The first limit is computed from the `ImageStream` `spec.tags` resource. The second is computed from the `imagestream.status.tags` resource. Both limits can cause image stream updates to fail when a push or other operation would exceed them.

:::


The following table shows the supported constraints for an image stream. If specified, the constraints must hold true for each image stream.

<table>
<thead>
<tr>
  <th>Constraint</th>
  <th>Behavior</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Max[openshift.io/image-tags]</code></td>
  <td><code>length( uniqueimagetags( imagestream.spec.tags ) )</code> less than or equal to <code>Max[openshift.io/image-tags]</code><br><br><code>uniqueimagetags</code> returns unique references to images of given spec tags.</td>
</tr>
<tr>
  <td><code>Max[openshift.io/images]</code></td>
  <td><code>length( uniqueimages( imagestream.status.tags ) )</code> less than or equal to <code>Max[openshift.io/images]</code><br><br><code>uniqueimages</code> returns unique image names found in status tags. The name is equal to the digest for the image.</td>
</tr>
</tbody>
</table>