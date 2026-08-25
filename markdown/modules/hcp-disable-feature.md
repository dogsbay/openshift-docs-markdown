{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling the {{ hcp }} feature {id="hcp-disable-feature_{{ context }}"}

If you no longer use the {{ hcp }} feature, you can disable it. {._abstract}

**Prerequisites**

*   You uninstalled the HyperShift Operator. For more information, see "Uninstalling the HyperShift Operator".

**Procedure**

1.  Run the following command to disable the {{ hcp }} feature:
    ```terminal
    $ oc patch mce multiclusterengine --type=merge -p \
      '{"spec":{"overrides":{"components":[{"name":"hypershift","enabled": false}]}}}'
    ```

    The default `MultiClusterEngine` resource instance name is `multiclusterengine`, but you can get the `MultiClusterEngine` name from your cluster by running the following command: `$ oc get mce`.
1.  You can verify that the `hypershift` and `hypershift-local-hosting` features are disabled in the `MultiClusterEngine` custom resource by running the following command:
    ```terminal
    $ oc get mce multiclusterengine -o yaml
    ```

    The default `MultiClusterEngine` resource instance name is `multiclusterengine`, but you can get the `MultiClusterEngine` name from your cluster by running the following command: `$ oc get mce`.

    See the following example where `hypershift` and `hypershift-local-hosting` have their `enabled:` flags set to `false`:
    ```yaml
    apiVersion: multicluster.openshift.io/v1
    kind: MultiClusterEngine
    metadata:
      name: multiclusterengine
    spec:
      overrides:
        components:
        - name: hypershift
          enabled: false
        - name: hypershift-local-hosting
          enabled: false
    ```