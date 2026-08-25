{%- set _mod_docs_content_type = "PROCEDURE" %}
# OpenShift CLI (`oc`) {id="mos-checklist-oc-cli_{{ context }}"}

The OpenShift CLI (`oc`) is not required to deploy a {{ product_title }} cluster, but is a useful tool for interacting with your cluster after it is deployed. {._abstract}

**Procedure**

1.  Download and install `oc` from the {{ cluster_manager }} [Command-line interface (CLI) tools](https://console.redhat.com/openshift/downloads#tool-oc) page, or follow the instructions in the _Additional resources_.
1.  Verify that the OpenShift CLI has been installed correctly by running the following command:
    ```terminal
    $ rosa verify openshift-client
    ```