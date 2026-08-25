{%- set _mod_docs_content_type = "PROCEDURE" %}
# Tearing down the {{ ztp }} pipeline {id="ztp-tearing-down-the-pipeline_{{ context }}"}

You can remove the ArgoCD pipeline and all generated {{ ztp_first }} artifacts. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.

**Procedure**

1.  Detach all clusters from {{ rh_rhacm_first }} on the hub cluster.
1.  Delete the `kustomization.yaml` file in the `deployment` directory using the following command:
    ```terminal
    $ oc delete -k out/argocd/deployment
    ```
1.  Commit and push your changes to the site repository.