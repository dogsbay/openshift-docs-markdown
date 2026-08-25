{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing deprecated or unused resources {id="virt-deprecated-tasks.web_{{ context }}"}

You can clean up deprecated or unused resources associated with the {{ pipelines_title }} Operator. {._abstract}

**Procedure**

*   Remove any remaining {{ pipelines_shortname }} resources from the cluster by running the following command:
    ```terminal
    $ oc delete clusterroles,rolebindings,serviceaccounts,configmaps,pipelines,tasks \
      --selector 'app.kubernetes.io/managed-by=ssp-operator' \
      --selector 'app.kubernetes.io/component in (tektonPipelines,tektonTasks)' \
      --selector 'app.kubernetes.io/name in (tekton-pipelines,tekton-tasks)' \
      --ignore-not-found \
      --all-namespaces
    ```

    If the {{ pipelines_title }} Operator custom resource definitions (CRDs) have already been removed, the command may return an error. You can safely ignore this, as all other matching resources will still be deleted.