{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuration parameters for MustGather custom resource {id="support-log-gather-config-params_{{ context }}"}

You can manage your `MustGather` custom resource (CR) by creating a YAML file that specifies the parameters for data collection and the upload process.
The following table provides an overview of the parameters that you can configure in the `MustGather` CR. {._abstract}

<table>
<thead>
<tr>
  <th>Parameter name</th>
  <th>Description</th>
  <th>Type</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>spec.gatherSpec.args</code></td>
  <td>Optional: Specifies a list of command-line arguments. The Operator passes this value to the <code>args</code> field of the container. If you do not specify <code>spec.gatherSpec.command</code>, the specified arguments are appended to the default command of the Operator.</td>
  <td>List of strings</td>
</tr>
<tr>
  <td><code>spec.gatherSpec.audit</code></td>
  <td>Optional: Specifies whether to collect audit logs. The valid values are <code>true</code> and <code>false</code>. You must not set this field if you are using a custom image, or   <code>spec.gatherSpec.command</code> with the default image.</td>
  <td><code>boolean</code></td>
</tr>
<tr>
  <td><code>spec.gatherSpec.command</code></td>
  <td>Optional: Overrides the default command of the container. The Operator passes this value to the <code>command</code> field of the container.</td>
  <td>List of strings</td>
</tr>
<tr>
  <td><code>spec.gatherSpec.since</code></td>
  <td>Optional: Specifies a time duration to restrict log collection to entries newer than the specified duration. By default, the controller collects all available logs. You can specify either <code>spec.gatherSpec.since</code> or <code>spec.gatherSpec.sinceTime</code>, but not both.</td>
  <td>The value must be a number with a time unit. The valid units are <code>s</code> (seconds), <code>m</code> (minutes), or <code>h</code> (hours).</td>
</tr>
<tr>
  <td><code>spec.gatherSpec.sinceTime</code></td>
  <td>Optional: Specifies a timestamp to restrict log collection to entries newer than the specified timestamp. By default, the controller collects all available logs. You can specify either <code>spec.gatherSpec.since</code> or <code>spec.gatherSpec.sinceTime</code>, but not both.</td>
  <td>The value must be in <a href="https://www.rfc-editor.org/rfc/rfc3339">RFC3339</a> format.</td>
</tr>
<tr>
  <td><code>spec.imageStreamRef</code></td>
  <td>Optional: Overrides the default image by defining a specific custom image.<br><br><dl><dt>Note</dt><dd>Each <code>MustGather</code> CR supports only one custom image. To use multiple custom images, you must create a separate <code>MustGather</code> CR for each image.</dd></dl></td>
  <td><code>object</code></td>
</tr>
<tr>
  <td><code>spec.imageStreamRef.name</code></td>
  <td>Specifies the name of the <code>ImageStream</code> resource in the Operator namespace.</td>
  <td><code>string</code></td>
</tr>
<tr>
  <td><code>spec.imageStreamRef.tag</code></td>
  <td>Specifies the name of the tag within the <code>ImageStream</code> resource.</td>
  <td><code>string</code></td>
</tr>
<tr>
  <td><code>spec.mustGatherTimeout</code></td>
  <td>Optional: Specifies the time limit for the <code>must-gather</code> command to complete.</td>
  <td>The value must be a number with a time unit. The valid units are <code>s</code> (seconds), <code>m</code> (minutes), or <code>h</code> (hours). By default, no time limit is set.</td>
</tr>
<tr>
  <td><code>spec.retainResourcesOnCompletion</code></td>
  <td>Optional: Specifies whether to retain the <code>must-gather</code> job and its related resources after the completion of data collection. The valid values are <code>true</code> and <code>false</code>. The default value is <code>false</code>.</td>
  <td><code>boolean</code></td>
</tr>
<tr>
  <td><code>spec.serviceAccountName</code></td>
  <td>Optional: Specifies the name of the service account. The default value is <code>default</code>.<br><br><dl><dt>Note</dt><dd>Because the <code>default</code> service account has minimal permissions, you can specify the service account that you created.</dd></dl></td>
  <td><code>string</code></td>
</tr>
<tr>
  <td><code>spec.storage</code></td>
  <td>Optional: Defines the storage configuration for the <code>must-gather</code> bundle.</td>
  <td><code>Object</code></td>
</tr>
<tr>
  <td><code>spec.storage.persistentVolume</code></td>
  <td>Defines the details of the persistent volume.</td>
  <td><code>Object</code></td>
</tr>
<tr>
  <td><code>spec.storage.persistentVolume.claim</code></td>
  <td>Defines the details of the persistent volume claim (PVC).</td>
  <td><code>Object</code></td>
</tr>
<tr>
  <td><code>spec.storage.persistentVolume.claim.name</code></td>
  <td>Specifies the name of the PVC to be used for storage.</td>
  <td><code>string</code></td>
</tr>
<tr>
  <td><code>spec.storage.persistentVolume.subPath</code></td>
  <td>Optional: Specifies the path within the PVC to store the bundle.</td>
  <td><code>string</code></td>
</tr>
<tr>
  <td><code>spec.storage.type</code></td>
  <td>Defines the type of storage. The only supported value is <code>PersistentVolume</code>.</td>
  <td><code>string</code></td>
</tr>
<tr>
  <td><code>spec.uploadTarget</code></td>
  <td>Optional: Defines the upload location for the <code>must-gather</code> bundle.</td>
  <td><code>Object</code></td>
</tr>
<tr>
  <td><code>spec.uploadTarget.sftp.caseID</code></td>
  <td>Specifies the Red&#160;Hat Support case ID for which the diagnostic data is collected.</td>
  <td><code>string</code></td>
</tr>
<tr>
  <td><code>spec.uploadTarget.sftp.caseManagementAccountSecretRef</code></td>
  <td>Defines the credentials required for authenticating and uploading the files to the Red&#160;Hat Customer Portal support case. The value must contain a <code>username</code> and <code>password</code> field.</td>
  <td><code>Object</code></td>
</tr>
<tr>
  <td><code>spec.uploadTarget.sftp.caseManagementAccountSecretRef.name</code></td>
  <td>Specifies the name of the Kubernetes secret that contains the credentials.</td>
  <td><code>string</code></td>
</tr>
<tr>
  <td><code>spec.uploadTarget.sftp.host</code></td>
  <td>Optional: Specifies the destination server for the bundle upload. By default, the bundle is uploaded to <code>sftp.access.redhat.com</code>.</td>
  <td></td>
</tr>
<tr>
  <td><code>spec.uploadTarget.sftp.internalUser</code></td>
  <td>Optional: Specifies whether the user provided in the <code>caseManagementAccountSecretRef</code> is a Red&#160;Hat internal user. The valid values are <code>true</code> and <code>false</code>. The default value is <code>false</code>.</td>
  <td><code>boolean</code></td>
</tr>
<tr>
  <td><code>spec.uploadTarget.type</code></td>
  <td>Specifies the type of upload location for the <code>must-gather</code> bundle. The only supported value is <code>SFTP</code>.</td>
  <td><code>string</code></td>
</tr>
</tbody>
</table>


:::note

If you do not specify `spec.uploadTarget` or `spec.storage`, the pod saves the data to an ephemeral volume and the data is permanently deleted when the pod terminates.

:::