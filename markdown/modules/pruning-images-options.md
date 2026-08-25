{%- set _mod_docs_content_type = "REFERENCE" %}
# Image pruning CLI options {id="pruning-images-options_{{ context }}"}

Review the CLI options for the `oc adm prune images` command to configure flags for age thresholds, tag references, and registry endpoints. {._abstract}

The following table describes the options you can use with the `oc adm prune images <image_prune_option>` command.

**Manual image pruning command options**

<table>
<thead>
<tr>
  <th>Option</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>--all</code></td>
  <td>Include images that were not pushed to the registry, but have been mirrored by pullthrough. This is on by default. To limit the pruning to images that were pushed to the integrated registry, pass <code>--all=false</code>.</td>
</tr>
<tr>
  <td><code>--certificate-authority</code></td>
  <td>The path to a certificate authority file to use when communicating with the {{ product_title }}-managed registries. Defaults to the certificate authority data from the current user's configuration file. If provided, a secure connection is initiated.</td>
</tr>
<tr>
  <td><code>--confirm</code></td>
  <td>Indicate that pruning should occur, instead of performing a test-run. This requires a valid route to the integrated container image registry. If this command is run outside of the cluster network, the route must be provided using <code>--registry-url</code>.</td>
</tr>
<tr>
  <td><code>--force-insecure</code></td>
  <td>Use caution with this option. Allow an insecure connection to the container registry that is hosted via HTTP or has an invalid HTTPS certificate.</td>
</tr>
<tr>
  <td><code>--keep-tag-revisions=&lt;N&gt;</code></td>
  <td>For each imagestream, keep up to at most <code>N</code> image revisions per tag (default <code>3</code>).</td>
</tr>
<tr>
  <td><code>--keep-younger-than=&lt;duration&gt;</code></td>
  <td>Do not prune any image that is younger than <code>&lt;duration&gt;</code> relative to the current time. Alternately, do not prune any image that is referenced by any other object that is younger than <code>&lt;duration&gt;</code> relative to the current time (default <code>60m</code>).</td>
</tr>
<tr>
  <td><code>--prune-over-size-limit</code></td>
  <td>Prune each image that exceeds the smallest limit defined in the same project. This flag cannot be combined with <code>--keep-tag-revisions</code> nor <code>--keep-younger-than</code>.</td>
</tr>
<tr>
  <td><code>--registry-url</code></td>
  <td>The address to use when contacting the registry. The command attempts to use a cluster-internal URL determined from managed images and image streams. In case it fails (the registry cannot be resolved or reached), an alternative route that works needs to be provided using this flag. The registry hostname can be prefixed by <code>https://</code> or <code>http://</code>, which enforces particular connection protocol.</td>
</tr>
<tr>
  <td><code>--prune-registry</code></td>
  <td>In conjunction with the conditions stipulated by the other options, this option controls whether the data in the registry corresponding to the {{ product_title }} image API object is pruned. By default, image pruning processes both the image API objects and corresponding data in the registry.<br><br>This option is useful when you are only concerned with removing etcd content, to reduce the number of image objects but are not concerned with cleaning up registry storage, or if you intend to do that separately by hard pruning the registry during an appropriate maintenance window for the registry.</td>
</tr>
</tbody>
</table>


Additional information about the `--prune-registry` flag

:   You can separate the removal of {{ product_title }} image API objects from the removal of image data in the registry by passing in the `--prune-registry=false` flag. For example, the following command prunes only the API objects, leaving the registry storage untouched:
    ```terminal
    $ oc adm prune images --keep-tag-revisions=3 --keep-younger-than=60m --confirm --prune-registry=false
    ```

    Then, you can perform a hard prune of the registry to remove the associated image data. This approach can narrow the timing window for race conditions compared to pruning both in a single command.

    However, timing windows are not completely eliminated. For example, a pod might still be created that references an image while that image is being identified for pruning. You should track any API objects created during pruning to ensure that they do not reference deleted content.

    Re-running the pruning without the `--prune-registry` option, or with `--prune-registry=true`, does not remove the associated registry storage for images previously pruned with `--prune-registry=false`. Those images can only be removed from registry storage by performing a hard prune of the registry. For more information, see "Hard pruning the registry".