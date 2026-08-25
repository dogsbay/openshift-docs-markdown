{%- set _mod_docs_content_type = "REFERENCE" %}
# Image Registry Operator configuration parameters for AWS S3 {id="registry-operator-configuration-resource-overview-aws-s3_{{ context }}"}

The following configuration parameters are available for AWS S3 registry storage. {._abstract}

The image registry `spec.storage.s3` configuration parameter holds the information to configure the registry to use the AWS S3 service for back-end storage. See the [S3 storage driver documentation](https://docs.docker.com/registry/storage-drivers/s3/) for more information.

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
  <td>Bucket is the bucket name in which you want to store the registry's data. It is optional and is generated if not provided.</td>
</tr>
<tr>
  <td><code>chunkSizeMiB</code></td>
  <td>ChunkSizeMiB is the size of the multipart upload chunks of the S3 API. The default is <code>10</code> MiB with a minimum of <code>5</code> MiB.</td>
</tr>
<tr>
  <td><code>region</code></td>
  <td>Region is the AWS region in which your bucket exists. It is optional and is set based on the installed AWS Region.</td>
</tr>
<tr>
  <td><code>regionEndpoint</code></td>
  <td>RegionEndpoint is the endpoint for S3 compatible storage services. It is optional and defaults based on the Region that is provided.</td>
</tr>
<tr>
  <td><code>virtualHostedStyle</code></td>
  <td>VirtualHostedStyle enables using S3 virtual hosted style bucket paths with a custom RegionEndpoint. It is optional and defaults to false.<br><br>Set this parameter to deploy {{ product_title }} to hidden regions.</td>
</tr>
<tr>
  <td><code>encrypt</code></td>
  <td>Encrypt specifies whether or not the registry stores the image in encrypted format. It is optional and defaults to false.</td>
</tr>
<tr>
  <td><code>keyID</code></td>
  <td>KeyID is the KMS key ID to use for encryption. It is optional. Encrypt must be true, or this parameter is ignored.</td>
</tr>
<tr>
  <td><code>cloudFront</code></td>
  <td>CloudFront configures Amazon Cloudfront as the storage middleware in a registry. It is optional.</td>
</tr>
<tr>
  <td><code>trustedCA</code></td>
  <td>The namespace for the config map referenced by <code>trustedCA</code> is <code>openshift-config</code>. The key for the bundle in the config map is <code>ca-bundle.crt</code>. It is optional.</td>
</tr>
</tbody>
</table>


:::note

When the value of the `regionEndpoint` parameter is configured to a URL of a Rados Gateway, an explicit port must not be specified. For example:
```yaml
regionEndpoint: http://rook-ceph-rgw-ocs-storagecluster-cephobjectstore.openshift-storage.svc.cluster.local
```

:::