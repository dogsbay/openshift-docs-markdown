# Configuring persistent storage for Elasticsearch {id="cluster-logging-elasticsearch-persistent-storage-about_{{ context }}"}

By default, the `openshift_logging` creates an ephemeral
deployment in which all of a pod’s data is lost upon restart.

For production environments, each Elasticsearch DeploymentConfig requires a persistent storage volume. You can specify an existing persistent
volume claim or allow {{ product_title }} to create one.

*   **Use existing PVCs.** If you create your own PVCs for the deployment, {{ product_title }} uses those PVCs.

    Name the PVCs to match the `openshift_logging_es_pvc_prefix` setting, which defaults to
    `elasticsearch`. Assign each PVC a name with a sequence number added to it: `elasticsearch-0`,
    `elasticsearch-1`, `elasticsearch-2`, and so on.
*   **Allow {{ product_title }} to create a PVC.** If a PVC for Elsaticsearch does not exist, {{ product_title }} creates the PVC based on parameters
in the CRD.
<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>openshift_logging_es_pvc_size</code></td>
  <td>Specify the size of the PVC request.</td>
</tr>
<tr>
  <td><code>openshift_logging_elasticsearch_storage_type</code></td>
  <td>Specify the storage type as <code>pvc</code>.<dl><dt>Note</dt><dd>This is an optional parameter. Setting the <code>openshift_logging_es_pvc_size</code> parameter to a value greater than 0 automatically sets this parameter to <code>pvc</code> by default.</dd></dl></td>
</tr>
<tr>
  <td><code>openshift_logging_es_pvc_prefix</code></td>
  <td>Optionally, specify a custom prefix for the PVC.</td>
</tr>
</tbody>
</table>


    For example:
    ```
    openshift_logging_elasticsearch_storage_type=pvc
    openshift_logging_es_pvc_size=104802308Ki
    openshift_logging_es_pvc_prefix=es-logging
    ```

If you use dynamically provisioned PVs, the {{ product_title }} logging installer creates PVCs
that use the default storage class or the PVC specified with the `openshift_logging_elasticsearch_pvc_storage_class_name` parameter.


:::warning

Using NFS storage as a volume or a persistent volume (or via NAS such as
Gluster) is not supported for Elasticsearch storage, as Lucene relies on file
system behavior that NFS does not supply. Data corruption and other problems can
occur.

:::