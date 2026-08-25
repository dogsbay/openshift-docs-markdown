# Enabling dynamically-provisioned storage {id="enabling-dynamically-provisioned-storage_{{ context }}"}

Instead of statically-provisioned storage, you can use dynamically-provisioned storage.

**Procedure**

1.  To enable dynamic storage for Prometheus and Alertmanager, set the following parameters to `true` in the Ansible inventory file:
    *   `openshift_cluster_monitoring_operator_prometheus_storage_enabled`   (Default: false)
    *   `openshift_cluster_monitoring_operator_alertmanager_storage_enabled` (Default: false)
1.  Optional: After you enable dynamic storage, you can also set the `storageclass` for the persistent volume claim for each component in the following parameters in the Ansible inventory file:
    *   `openshift_cluster_monitoring_operator_prometheus_storage_class_name`   (default: "")
    *   `openshift_cluster_monitoring_operator_alertmanager_storage_class_name` (default: "")

        Each of these variables applies only if its corresponding `storage_enabled` variable is set to `true`.

**Additional resources**
{._additional-resources}

*   See [Dynamic Volume Provisioning](https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/) for details.