{%- set _mod_docs_content_type = "PROCEDURE" %}
# Gathering data about your cluster for Red Hat Support {id="support_gathering_data_{{ context }}"}

You can gather debugging information about your cluster by using the `oc adm must-gather` CLI command. {._abstract}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
If you are gathering information to debug a self-managed hosted cluster, see "Gathering information to troubleshoot {{ hcp }}".
{% endif %}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
{% if openshift_dedicated %}

    :::note

    In {{ product_title }} deployments, customers who are not using the Customer Cloud Subscription (CCS) model cannot use the `oc adm must-gather` command as it requires `cluster-admin` privileges.
    
    :::

{% endif %}
{% if not (openshift_rosa or openshift_dedicated) %}
*   The {{ product_title }} CLI (`oc`) is installed.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   The OpenShift CLI (`oc`) is installed.
{% endif %}

**Procedure**

1.  Navigate to the directory where you want to store the `must-gather` data.

{% if not (openshift_rosa or openshift_dedicated) %}

    :::note

    If your cluster is in a disconnected environment, you must take additional steps. If your mirror registry has a trusted CA, you must first add the trusted CA to the cluster. For all clusters in disconnected environments, you must import the default `must-gather` image as an image stream.

    ```terminal
    $ oc import-image is/must-gather -n openshift
    ```
    
    :::

{% endif %}
1.  Run the `oc adm must-gather` command:

    ```terminal
    $ oc adm must-gather
    ```
{% if not (openshift_rosa or openshift_dedicated) %}

    :::important

    If you are in a disconnected environment, use the `--image` flag as part of must-gather and point to the payload image.
    
    :::

{% endif %}

    :::note

    Because this command picks a random control plane node by default, the pod might be scheduled to a control plane node that is in the `NotReady` and `SchedulingDisabled` state.
    
    :::

    1.  If this command fails, for example, if you cannot schedule a pod on your cluster, then use the `oc adm inspect` command to gather information for particular resources.

        :::note

        Contact Red Hat Support for the recommended resources to gather.
        
        :::

1.  Create a compressed file from the `must-gather` directory that was just created in your working directory. Make sure you provide the date and cluster ID for the unique must-gather data. For more information about how to find the cluster ID, see [How to find the cluster-id or name on OpenShift cluster](https://access.redhat.com/solutions/5280291). For example, on a computer that uses a Linux operating system, run the following command:
    ```terminal
    $ tar cvaf must-gather-`date +"%m-%d-%Y-%H-%M-%S"`-<cluster_id>.tar.gz <must_gather_local_dir>
    ```

    where:

    `<must_gather_local_dir>`
    :   Replace with the actual directory name.

{% if not openshift_origin %}
1.  Attach the compressed file to your support case on the [the **Customer Support** page](https://access.redhat.com/support/cases/#/case/list) of the Red Hat Customer Portal.
{% endif %}

{% if openshift_origin %}
1.  Attach the compressed file to the bugreport
{% endif %}