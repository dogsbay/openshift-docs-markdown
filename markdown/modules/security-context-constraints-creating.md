{%- set _mod_docs_content_type = "PROCEDURE" %}
{%- if not openshift_dedicated %}
# Creating security context constraints {id="security-context-constraints-creating_{{ context }}"}

{% endif %}
{% if openshift_dedicated %}
# Creating security context constraints for Customer Cloud Subscription clusters {id="_creating_security_context_constraints_for_customer_cloud_subscription_clusters"}

{% endif %}

If the default security context constraints (SCCs) do not satisfy your application workload requirements, you can create a custom SCC by using the OpenShift CLI (`oc`). {._abstract}


:::important

Creating and modifying your own SCCs are advanced operations that might cause instability to your cluster. If you have questions about using your own SCCs, contact Red&#160;Hat Support. For information about contacting Red&#160;Hat support, see _Getting support_.

:::



:::warning

Setting an SCC priority greater than 0 for the default {{ product_title }} SCCs can cause critical cluster instability.

:::


{% if openshift_dedicated %}

:::note

In {{ product_title }} deployments, you can create your own SCCs only for clusters that use the Customer Cloud Subscription (CCS) model. You cannot create SCCs for {{ product_title }} clusters that use a Red&#160;Hat cloud account, because SCC resource creation requires `cluster-admin` privileges.

:::

{% endif %}

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Log in to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Define the SCC in a YAML file named `scc-admin.yaml`:
    ```yaml
    kind: SecurityContextConstraints
    apiVersion: security.openshift.io/v1
    metadata:
      name: scc-admin
    allowPrivilegedContainer: true
    runAsUser:
      type: RunAsAny
    seLinuxContext:
      type: RunAsAny
    fsGroup:
      type: RunAsAny
    supplementalGroups:
      type: RunAsAny
    users:
    - my-admin-user
    groups:
    - my-admin-group
    ```

    Optionally, you can drop specific capabilities for an SCC by setting the `requiredDropCapabilities` field with the desired values. Any specified capabilities are dropped from the container. To drop all capabilities, specify `ALL`. For example, to create an SCC that drops the `KILL`, `MKNOD`, and `SYS_CHROOT` capabilities, add the following to the SCC object:
    ```yaml
    requiredDropCapabilities:
    - KILL
    - MKNOD
    - SYS_CHROOT
    ```

    :::note

    +
    
    :::


    You cannot list a capability in both `allowedCapabilities` and `requiredDropCapabilities`.

CRI-O supports the same list of capability values that are found in the [Docker documentation](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities).

1.  Create the SCC by passing in the file:
    ```terminal
    $ oc create -f scc-admin.yaml
    ```
    ```terminal title="Example output"
    securitycontextconstraints "scc-admin" created
    ```

**Verification**

*   Verify that the SCC was created:
    ```terminal
    $ oc get scc scc-admin
    ```
    ```terminal title="Example output"
    NAME        PRIV      CAPS      SELINUX    RUNASUSER   FSGROUP    SUPGROUP   PRIORITY   READONLYROOTFS   VOLUMES
    scc-admin   true      []        RunAsAny   RunAsAny    RunAsAny   RunAsAny   <none>     false            [awsElasticBlockStore azureDisk azureFile cephFS cinder configMap downwardAPI emptyDir fc flexVolume flocker gcePersistentDisk gitRepo glusterfs iscsi nfs persistentVolumeClaim photonPersistentDisk quobyte rbd secret vsphere]
    ```