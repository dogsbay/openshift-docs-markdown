{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing applicable cluster resource quotas {id="quotas-viewing-clusterresourcequotas_{{ context }}"}

View the multi-project quota documents applied to your project by using the `AppliedClusterResourceQuota` resource. Although, as an administrator, you cannot create or modify multi-project quotas, you can monitor your project’s resource limits. {._abstract}

**Procedure**

*   To view quotas applied to a project, run:
    ```terminal
    $ oc describe AppliedClusterResourceQuota
    ```
    ```terminal title="Example output"
    Name:   for-user
    Namespace:  <none>
    Created:  19 hours ago
    Labels:   <none>
    Annotations:  <none>
    Label Selector: <null>
    AnnotationSelector: map[openshift.io/requester:<user-name>]
    Resource  Used  Hard
    --------  ----  ----
    pods        1     10
    secrets     9     20
    ```