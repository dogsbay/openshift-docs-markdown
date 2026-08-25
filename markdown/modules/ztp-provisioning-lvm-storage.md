{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring {{ lvms }} using {{ policy_gen_cr }} CRs {id="ztp-provisioning-lvm-storage_{{ context }}"}

You can configure {{ lvms_first }} for managed clusters that you deploy with {{ ztp_first }}. {._abstract}


:::note

You use {{ lvms }} to persist event subscriptions when you use PTP events or bare-metal hardware events with HTTP transport.

Use the Local Storage Operator for persistent storage that uses local volumes in distributed units.

:::


**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.
*   Create a Git repository where you manage your custom site configuration data.

**Procedure**

1.  To configure {{ lvms }} for new managed clusters, add the following YAML to `{{ rangen_yaml_path }}`{minja} in the `{{ policy_prefix }}common-ranGen.yaml`{minja} file:
{% if policy-gen-cr == "PolicyGenTemplate" %}
    {% include "./snippets/pgt-ztp-provisioning-lvm-storage.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
    {% include "./snippets/pg-ztp-provisioning-lvm-storage.md" %}
{% endif %}

    :::note

    The Storage LVMO subscription is deprecated. In future releases of {{ product_title }}, the storage LVMO subscription will not be available. Instead, you must use the Storage LVMS subscription.

    In {{ product_title }} {{ product_version }}, you can use the Storage LVMS subscription instead of the LVMO subscription. The LVMS subscription does not require manual overrides in the `{{ policy_prefix }}common-ranGen.yaml`{minja} file. Add the following YAML to `{{ rangen_yaml_path }}`{minja} in the `{{ policy_prefix }}common-ranGen.yaml`{minja} file to use the Storage LVMS subscription:

    ```yaml {minja}
    {% if policy-gen-cr == "PolicyGenTemplate" %}
    {% include "./snippets/pgt-ztp-provisioning-lvm-storage-sub.yaml" %}
    {% endif %}
    {% if policy-gen-cr == "PolicyGenerator" %}
    {% include "./snippets/pg-ztp-provisioning-lvm-storage-sub.yaml" %}
    {% endif %}
    ```
    
    :::

1.  Add the `LVMCluster` CR to `{{ rangen_yaml_path }}`{minja} in your specific group or individual site configuration file. For example, in the `{{ policy_prefix }}group-du-sno-ranGen.yaml`{minja} file, add the following:
{% if policy-gen-cr == "PolicyGenTemplate" %}
    {% include "./snippets/pgt-ztp-provisioning-lvm-storage-cluster.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
    {% include "./snippets/pg-ztp-provisioning-lvm-storage-cluster.md" %}
{% endif %}

    This example configuration creates a volume group (`vg1`) with all the available devices, except the disk where {{ product_title }} is installed.
    A thin-pool logical volume is also created.
1.  Merge any other required changes and files with your custom site repository.
1.  Commit the `{{ policy_gen_cr }}`{minja} changes in Git, and then push the changes to your site configuration repository to deploy {{ lvms }} to new sites using {{ ztp }}.