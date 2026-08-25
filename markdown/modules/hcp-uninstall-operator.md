{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the HyperShift Operator {id="hcp-uninstall-operator_{{ context }}"}

Before you can disable the {{ hcp }} feature, you need to uninstall the HyperShift Operator and disable the `hypershift-addon` from the `local-cluster`. {._abstract}

**Procedure**

1.  Run the following command to ensure that there is no hosted cluster running:
    ```terminal
    $ oc get hostedcluster -A
    ```

    :::important

    If a hosted cluster is running, the HyperShift Operator does not uninstall, even if the `hypershift-addon` is disabled.
    
    :::

1.  Disable the `hypershift-addon` by running the following command:
    ```terminal
    $ oc patch mce multiclusterengine --type=merge -p \
      '{"spec":{"overrides":{"components":[{"name":"hypershift-local-hosting","enabled": false}]}}}'
    ```

    The default `MultiClusterEngine` resource instance name is `multiclusterengine`, but you can get the `MultiClusterEngine` name from your cluster by running the following command: `$ oc get mce`.

    :::note

    You can also disable the `hypershift-addon` for the `local-cluster` from the {{ mce_short }} console after disabling the `hypershift-addon`.
    
    :::