{%- set _mod_docs_content_type = "PROCEDURE" %}
# Increasing Compliance Operator resource limits {id="compliance-increasing-operator-limits_{{ context }}"}

In some cases, the Compliance Operator might require more memory than the default limits allow. You can mitigate this issue by setting custom resource limits. {._abstract}

To increase the default memory and CPU limits of scanner pods, see _`ScanSetting` Custom resource_.

**Procedure**

1.  To increase the Operator memory limits to 500 Mi, create the following patch file named `co-memlimit-patch.yaml`:
    ```yaml
    spec:
      config:
        resources:
          limits:
            memory: 500Mi
    ```
1.  Apply the patch file:
    ```terminal
    $ oc patch sub compliance-operator -nopenshift-compliance --patch-file co-memlimit-patch.yaml --type=merge
    ```