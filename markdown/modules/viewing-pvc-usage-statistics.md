{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing PVC usage statistics {id="viewing-pvc-usage-statistics_{{ context }}"}

To monitor storage consumption, view the usage statistics for Persistent Volume Claims (PVCs). By accessing these metrics, you can track resource use and ensure that your workloads have sufficient capacity. {._abstract}

{%- set FeatureName = "PVC usage statistics command" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

**Procedure**

*   To view statistics across a cluster, run the following command:
    ```terminal
    $ oc adm top pvc -A
    ```
    ```terminal title="Example command output"
    NAMESPACE     NAME         USAGE(%)
    namespace-1   data-etcd-1  3.82%
    namespace-1   data-etcd-0  3.81%
    namespace-1   data-etcd-2  3.81%
    namespace-2   mypvc-fs-gp3 0.00%
    default       mypvc-fs     98.36%
    ```
*   To view PVC usage statistics for a specified namespace, run the following command:
    ```terminal
    $ oc adm top pvc -n _<namespace_name>_
    ```
    *   Where `_<namespace_name>_` is the name of the specified namespace.
        ```terminal title="Example command output"
        NAMESPACE     NAME        USAGE(%)
        namespace-1   data-etcd-2 3.81%
        namespace-1   data-etcd-0 3.81%
        namespace-1   data-etcd-1 3.82%
        ```

        In this example, the specified namespace is `namespace-1`.
*   To view usage statistics for a specified PVC and for a specified namespace, run the following command:
    ```terminal
    $ oc adm top pvc _<pvc_name>_ -n _<namespace_name>_
    ```
    *   Where `_<pvc_name>_` is the name of specified PVC.
    *   Where `_<namespace_name>_` is the name of the specified namespace.
        ```terminal title="Example command output"
        NAMESPACE   NAME        USAGE(%)
        namespace-1 data-etcd-0 3.81%
        ```

        In this example, the specified namespace is `namespace-1` and the specified PVC is `data-etcd-0`.