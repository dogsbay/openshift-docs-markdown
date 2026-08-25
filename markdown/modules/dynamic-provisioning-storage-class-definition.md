{%- set _mod_docs_content_type = "REFERENCE" %}
# Basic StorageClass object definition {id="basic-storage-class-definition_{{ context }}"}

A `StorageClass` object defines the metadata, provisioner type, and plugin-specific parameters that determine how persistent volumes (PVs) are dynamically created in your cluster. Each storage provisioner type requires different parameters, and annotations control cluster-wide defaults, making this structure the foundation for all dynamic storage provisioning. {._abstract}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
```yaml title="Example StorageClass definition"
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: <storage-class-name>
  annotations:
    storageclass.kubernetes.io/is-default-class: 'true'
    ...
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp3
...
```
*   `kind`: API object type.
*   `apiversion`: The current apiVersion.
*   `metadata.name`: The name of the storage class.
*   Optional: `metadata.annotations`: Annotations for the storage class.
*   `provisioner`: The type of provisioner associated with this storage class.
*   Optional: `parameters`: The parameters required for the specific provisioner. This is different for each plugin.
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}
```yaml title="Example StorageClass definition"
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: <storage-class-name>
  annotations:
    storageclass.kubernetes.io/is-default-class: 'true'
    ...
provisioner: ebs.csi.aws.com
parameters:
  type: gp3-csi
...
```
*   `kind`: API object type.
*   `apiversion`: The current apiVersion.
*   `metadata.name`: The name of the storage class.
*   Optional: `metadata.annotations`: Annotations for the storage class.
*   `provisioner`: The type of provisioner associated with this storage class.
*   Optional: `parameters`: The parameters required for the specific provisioner. This is different for each plugin.
{% endif %}