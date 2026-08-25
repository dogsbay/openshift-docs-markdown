{%- set _mod_docs_content_type = "SNIPPET" %}


Creating a default toleration in a namespace
:   When a node or machine set has a taint, only workloads that tolerate that taint can be scheduled. You can annotate a namespace so all of the workloads get the same default toleration by running the following command:
    ```terminal title="Example default toleration set on a namespace"
    $ oc annotate namespace my-namespace \
      'scheduler.alpha.kubernetes.io/defaultTolerations'='[{"operator": "Exists", "effect": "NoSchedule", "key": "multiarch.openshift.io/arch"}]'
    ```