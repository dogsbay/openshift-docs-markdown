{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the {{ product_title }} manifests {id="creating-the-openshift-manifests_{{ context }}"}

Create manifest files to begin customizing your cluster installation. {._abstract}

**Procedure**

*   Create the {{ product_title }} manifests by running the following command:
    ```terminal
    $ ./openshift-baremetal-install --dir ~/clusterconfigs create manifests
    ```
    ```terminal title="Example output"
    INFO Consuming Install Config from target directory
    WARNING Making control-plane schedulable by setting MastersSchedulable to true for Scheduler cluster settings
    WARNING Discarding the OpenShift Manifest that was provided in the target directory because its dependencies are dirty and it needs to be regenerated
    ```