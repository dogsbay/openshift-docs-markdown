{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually enabling the {{ hcp }} feature {id="hcp-enable-manual_{{ context }}"}

If the {{ hcp }} feature is disabled, you can manually enable it. {._abstract}

**Procedure**

1.  Run the following command to enable the feature:
    ```terminal
    $ oc patch mce multiclusterengine --type=merge -p \
      '{"spec":{"overrides":{"components":[{"name":"hypershift","enabled": true}]}}}'
    ```

    The default `MultiClusterEngine` resource instance name is `multiclusterengine`, but you can get the `MultiClusterEngine` name from your cluster by running the following command: `$ oc get mce`.
1.  Run the following command to verify that the `hypershift` and `hypershift-local-hosting` features are enabled in the `MultiClusterEngine` custom resource:
    ```terminal
    $ oc get mce multiclusterengine -o yaml
    ```

    The default `MultiClusterEngine` resource instance name is `multiclusterengine`, but you can get the `MultiClusterEngine` name from your cluster by running the following command: `$ oc get mce`.
    ```yaml title="Example output"
    apiVersion: multicluster.openshift.io/v1
    kind: MultiClusterEngine
    metadata:
      name: multiclusterengine
    spec:
      overrides:
        components:
        - name: hypershift
          enabled: true
        - name: hypershift-local-hosting
          enabled: true
    ```