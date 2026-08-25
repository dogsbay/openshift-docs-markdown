{%- set _mod_docs_content_type = "PROCEDURE" -%}
{% if openshift_rosa %}
# Configuring machine pool disk volume using OpenShift Cluster Manager {id="configuring-machine-pool-disk-volume-ocm_{{ context }}"}

{%- endif %}
**Prerequisite for cluster creation**

*   You have the option to select the node disk sizing for the default machine pool during cluster installation.

**Procedure for cluster creation**

1.  From the {{ product_title }} cluster wizard, navigate to **Cluster settings**.
1.  Navigate to **Machine pool** step.
1.  Select the desired **Root disk size**.
1.  Select **Next** to continue creating your cluster.

**Prerequisite for machine pool creation**

*   You have the option to select the node disk sizing for the new machine pool after the cluster has been installed.

**Procedure for machine pool creation**

1.  Navigate to {{ cluster_manager_url }} and select your cluster.
1.  Navigate to **Machine pool tab**.
1.  Click **Add machine pool**.
1.  Select the desired **Root disk size**.
1.  Select **Add machine pool** to create the machine pool.