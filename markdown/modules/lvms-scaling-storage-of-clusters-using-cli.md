{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling up the storage of clusters by using the CLI {id="lvms-scaling-storage-of-clusters-using-cli_{{ context }}"}

Scale up worker node storage capacity when running out of space, adding new applications, or expanding cluster capacity by using the OpenShift CLI (`oc`) to add new devices or worker nodes. {._abstract}

**Prerequisites**

*   You have additional unused devices on each cluster to be used by {{ lvms_first }}.
*   You have installed the OpenShift CLI (`oc`).
*   You have created an `LVMCluster` custom resource (CR).

**Procedure**

1.  Edit the `LVMCluster` CR by running the following command:
    ```terminal
    $ oc edit <lvmcluster_file_name> -n <namespace>
    ```
1.  Add the path to the new device in the `deviceSelector` field.
    {% include "./snippets/lvms-scaling-up-storage-lvmcluster-cr-snippet.md" %}
1.  Save the `LVMCluster` CR.