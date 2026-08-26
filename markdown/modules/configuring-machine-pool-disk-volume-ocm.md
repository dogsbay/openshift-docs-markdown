{%- set _mod_docs_content_type = "PROCEDURE" -%}
{% if openshift_rosa %}
# Configuring machine pool disk volume using {{ cluster_manager }} {id="configuring-machine-pool-disk-volume-ocm_{{ context }}"}

{% endif %}

Configure the disk volume size for machine pools during cluster creation or when adding new machine pools by using {{ cluster_manager_first }}. {._abstract}

**Prerequisites**

*   You have access to {{ cluster_manager_url }}.

**Procedure**

*   To configure disk volume during cluster creation:
    1.  From the {{ product_title }} cluster wizard, navigate to **Cluster settings**.
    1.  Navigate to **Machine pool** step.
    1.  Select the desired **Root disk size**.
    1.  Select **Next** to continue creating your cluster.
*   To configure disk volume for a new machine pool after cluster installation:
    1.  Navigate to {{ cluster_manager_url }} and select your cluster.
    1.  Navigate to **Machine pool tab**.
    1.  Click **Add machine pool**.
    1.  Select the desired **Root disk size**.
    1.  Select **Add machine pool** to create the machine pool.