{%- set _mod_docs_content_type = "PROCEDURE" %}
# Providing diagnostic data to Red Hat Support {id="support-providing-diagnostic-data-to-red-hat_{{ context }}"}

When investigating {{ product_title }} issues, Red Hat Support might ask you to upload diagnostic data to a support case. Files can be uploaded to a support case through the Red Hat Customer Portal. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
{% if openshift_dedicated %}

    :::note

    In {{ product_title }} deployments, customers who are not using the Customer Cloud Subscription (CCS) model cannot use the `oc debug` command as it requires `cluster-admin` privileges.
    
    :::

{% endif %}
*   You have installed the OpenShift CLI (`oc`).
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have SSH access to your hosts.
*   You have a Red Hat standard or premium Subscription.
*   You have a Red Hat Customer Portal account.
{%- endif %}
*   You have an existing Red Hat Support case ID.

**Procedure**

*   Upload diagnostic data to an existing Red Hat support case through the Red Hat Customer Portal.
    1.  Concatenate a diagnostic file contained on an {{ product_title }} node by using the `oc debug node/<node_name>` command and redirect the output to a file. The following example copies `/host/var/tmp/my-diagnostic-data.tar.gz` from a debug container to `/var/tmp/my-diagnostic-data.tar.gz`:
        ```terminal
        $ oc debug node/my-cluster-node -- bash -c 'cat /host/var/tmp/my-diagnostic-data.tar.gz' > /var/tmp/my-diagnostic-data.tar.gz
        ```

        where:

        `/host/var/tmp/my-diagnostic-data.tar.gz`
        :   The debug container mounts the host’s root directory at `/host`. Reference the absolute path from the debug container’s root directory, including `/host`, when specifying target files for concatenation.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

        :::note

        {{ product_title }} {{ product_version }} cluster nodes running {{ op_system_first }} are immutable and rely on Operators to apply cluster changes. Transferring files from a cluster node by using `scp` is not recommended. However, if the {{ product_title }} API is not available, or the kubelet is not properly functioning on the target node, `oc` operations will be impacted. In such situations, it is possible to copy diagnostic files from a node by running `scp core@<node>.<cluster_name>.<base_domain>:<file_path> <local_path>`.
        
        :::

{%- endif %}

    1.  Navigate to an existing support case within [the **Customer Support** page](https://access.redhat.com/support/cases/#/case/list) of the Red Hat Customer Portal.
    1.  Select **Attach files** and follow the prompts to upload the file.