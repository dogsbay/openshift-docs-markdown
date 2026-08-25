{%- set _mod_docs_content_type = "REFERENCE" %}
# Image Registry Operator configuration parameters for {{ gcp_short }} GCS {id="registry-operator-configuration-resource-overview-gcp-gcs_{{ context }}"}

The following parameters configure are available to configure your {{ gcp_short }} GCS registry storage. {._abstract}

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>bucket</code></td>
  <td>Bucket is the bucket name in which you want to store the registry's data.It is optional and is generated if not provided.</td>
</tr>
<tr>
  <td><code>region</code></td>
  <td>Region is the GCS location in which your bucket exists. It is optional and isset based on the installed GCS Region.</td>
</tr>
<tr>
  <td><code>projectID</code></td>
  <td>ProjectID is the Project ID of the {{ gcp_short }} project that this bucket should beassociated with. It is optional.</td>
</tr>
<tr>
  <td><code>keyID</code></td>
  <td>KeyID is the KMS key ID to use for encryption. It is optional becausebuckets are encrypted by default on {{ gcp_short }}. This allows for the use of a customencryption key.</td>
</tr>
</tbody>
</table>