{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring update status {id="virt-monitoring-upgrade-status_{{ context }}"}

To monitor the status of a {{ CNVOperatorDisplayName }} update, watch the cluster service version (CSV) `PHASE`. You can also monitor the CSV conditions in the web console or by using the CLI. {._abstract}


:::note

The `PHASE` and conditions values are approximations that are based on available information.

:::


**Prerequisites**

*   You have logged in to the {{ product_title }} cluster as a cluster administrator.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Run the following command:
    ```terminal {minja}
    $ oc get csv -n {{ CNVNamespace }}
    ```
1.  Review the output, checking the `PHASE` field. For example:
    ```terminal
    VERSION  REPLACES                                        PHASE
    4.9.0    kubevirt-hyperconverged-operator.v4.8.2         Installing
    4.9.0    kubevirt-hyperconverged-operator.v4.9.0         Replacing
    ```
1.  Optional: Monitor the aggregated status of all {{ VirtProductName }} component
conditions by running the following command:
    ```terminal {minja}
    $ oc get {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} \
      -o=jsonpath='{range .status.conditions[*]}{.type}{"\t"}{.status}{"\t"}{.message}{"\n"}{{ end }}'
    ```

    A successful upgrade results in the following output:
    ```terminal
    ReconcileComplete  True  Reconcile completed successfully
    Available          True  Reconcile completed successfully
    Progressing        False Reconcile completed successfully
    Degraded           False Reconcile completed successfully
    Upgradeable        True  Reconcile completed successfully
    ```