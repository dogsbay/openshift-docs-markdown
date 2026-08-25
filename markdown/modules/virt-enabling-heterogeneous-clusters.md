{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling heterogeneous cluster support {id="virt-enabling-heterogeneous-clusters_{{ context }}"}

You can enable boot source image support for heterogeneous clusters by setting the `enableMultiArchBootImageImport` feature gate to `true` in the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.

**Procedure**

*   Enable the `enableMultiArchBootImageImport` feature gate by running the following command:
    ```terminal
    $ oc patch {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} \
      --type json -p '[{"op":"replace","path":"/spec/featureGates/enableMultiArchBootImageImport", "value": true}]'
    ```

**Verification**

*   Verify that the feature gate is enabled by running the following command:
    ```terminal
    $ oc get {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} \
      -o jsonpath='{.spec.featureGates[*].name}'
    ```

    The output must include `enableMultiArchBootImageImport`.