{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster Samples Operator configuration parameters {id="samples-operator-configuration_{{ context }}"}

The samples resource offers the following configuration fields: {._abstract}

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>managementState</code></td>
  <td><code>Managed</code>: The Cluster Samples Operator updates the samples as the configuration dictates.<br><br><code>Unmanaged</code>: The Cluster Samples Operator ignores updates to its configuration resource object and any image streams or templates in the <code>openshift</code> namespace.<br><br><code>Removed</code>: The Cluster Samples Operator removes the set of <code>Managed</code> image streams and templates in the <code>openshift</code> namespace. It ignores new samples created by the cluster administrator or any samples in the skipped lists. After the removals are complete, the Cluster Samples Operator works like it is in the <code>Unmanaged</code> state and ignores any watch events on the sample resources, image streams, or templates.</td>
</tr>
<tr>
  <td><code>samplesRegistry</code></td>
  <td>Allows you to specify which registry is accessed by image streams for their image content. <code>samplesRegistry</code> defaults to <code>registry.redhat.io</code> for {{ product_title }}.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>Creation or update of RHEL content does not commence if the secret for pull access is not in place when either <code>Samples Registry</code> is not explicitly set, leaving an empty string, or when it is set to registry.redhat.io. In both cases, image imports work off of registry.redhat.io, which requires credentials.<br><br>Creation or update of RHEL content is not gated by the existence of the pull secret if the <code>Samples Registry</code> is overridden to a value other than the empty string or registry.redhat.io.</dd></dl></td>
</tr>
<tr>
  <td><code>architectures</code></td>
  <td>Placeholder to choose an architecture type.</td>
</tr>
<tr>
  <td><code>skippedImagestreams</code></td>
  <td>Image streams that are in the Cluster Samples Operator's inventory but that the cluster administrator wants the Operator to ignore or not manage. You can add a list of image stream names to this parameter. For example, <code>["httpd","perl"]</code>.</td>
</tr>
<tr>
  <td><code>skippedTemplates</code></td>
  <td>Templates that are in the Cluster Samples Operator's inventory, but that the cluster administrator wants the Operator to ignore or not manage.</td>
</tr>
</tbody>
</table>

Secret, image stream, and template watch events can come in before the initial samples resource object is created, the Cluster Samples Operator detects and re-queues the event.

## Configuration restrictions {id="samples-operator-config-restrictions_{{ context }}"}

When the Cluster Samples Operator starts supporting multiple architectures, you cannot change the architecture list while the Operator is in the `Managed` state.

To change the architectures values, a cluster administrator must:

*   Mark the `Management State` as `Removed`, saving the change.
*   In a subsequent change, edit the architecture and change the `Management State` back to `Managed`.

The Cluster Samples Operator still processes secrets while in `Removed` state. You can create the secret before switching to `Removed`, while in `Removed` before switching to `Managed`, or after switching to `Managed` state. There are delays in creating the samples until the secret event is processed if you create the secret after switching to `Managed`. This helps facilitate the changing of the registry, where you choose to remove all the samples before switching to ensure a clean slate. Removing all samples before switching is not required.

## Samples resource conditions {id="samples-operator-conditions_{{ context }}"}

The samples resource maintains the following conditions in its status:

<table>
<thead>
<tr>
  <th>Condition</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>SamplesExists</code></td>
  <td>Indicates the samples are created in the <code>openshift</code> namespace.</td>
</tr>
<tr>
  <td><code>ImageChangesInProgress</code></td>
  <td><code>True</code> when image streams are created or updated, but not all of the tag spec generations and tag status generations match.<br><br><code>False</code> when all of the generations match, or unrecoverable errors occurred during import, the last seen error is in the message field. The list of pending image streams is in the reason field.<br><br>This condition is deprecated in {{ product_title }}.</td>
</tr>
<tr>
  <td><code>ConfigurationValid</code></td>
  <td><code>True</code> or <code>False</code> based on whether any of the restricted changes noted previously are submitted.</td>
</tr>
<tr>
  <td><code>RemovePending</code></td>
  <td>Indicator that there is a <code>Management State: Removed</code> setting pending, but the Cluster Samples Operator is waiting for the deletions to complete.</td>
</tr>
<tr>
  <td><code>ImportImageErrorsExist</code></td>
  <td>Indicator of which image streams had errors during the image import phase for one of their tags.<br><br><code>True</code> when an error has occurred. The list of image streams with an error is in the reason field. The details of each error reported are in the message field.</td>
</tr>
<tr>
  <td><code>MigrationInProgress</code></td>
  <td><code>True</code> when the Cluster Samples Operator detects that the version is different from the Cluster Samples Operator version with which the current samples set are installed.<br><br>This condition is deprecated in {{ product_title }}.</td>
</tr>
</tbody>
</table>