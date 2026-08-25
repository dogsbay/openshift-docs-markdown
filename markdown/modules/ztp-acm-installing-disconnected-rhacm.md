{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ ztp }} in a disconnected environment {id="installing-disconnected-rhacm_{{ context }}"}

Use {{ rh_rhacm_first }}, {{ gitops_title }}, and {{ cgu_operator_first }} on the hub cluster in the disconnected environment to manage the deployment of multiple managed clusters. {._abstract}

**Prerequisites**

*   You have installed the {{ product_title }} CLI (`oc`).
*   You have logged in as a user with `cluster-admin` privileges.
*   You have configured a disconnected mirror registry for use in the cluster.

    :::note

    The disconnected mirror registry that you create must contain a version of {{ cgu_operator }} backup and pre-cache images that matches the version of {{ cgu_operator }} running in the hub cluster. The spoke cluster must be able to resolve these images in the disconnected mirror registry.
    
    :::


**Procedure**

*   Install {{ rh_rhacm }} in the hub cluster. See [Installing {{ rh_rhacm }} in a disconnected environment](https://access.redhat.com/documentation/en-us/red_hat_advanced_cluster_management_for_kubernetes/{{ rh_rhacm_version }}/html/install/installing#install-on-disconnected-networks).
*   Install {{ gitops_shortname }} and {{ cgu_operator }} in the hub cluster.