{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling RTE image validation {id="cnf-disabling-rte-image-validation_{{ context }}"}

You can disable RTE image validation by setting the `EXPORTER_IMAGE_RESTRICTION` environment variable to `false`. {._abstract}


:::warning

Disabling RTE image validation creates a security risk.
A malicious RTE image can:

*   Access sensitive hardware topology information about worker nodes
*   Observe node resource allocation and NUMA zone configurations
*   Read detailed system information that could facilitate other attacks
*   Run code with the RTE daemon set service account permissions

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in as a user with `cluster-admin` privileges.
*   You have installed the NUMA Resources Operator.

**Procedure**

1.  Disable validation by running the following command:
    ```terminal
    $ oc patch subscription numaresources-operator \
      -n openshift-numaresources \
      --type=merge \
      -p '{"spec":{"config":{"env":[{"name":"EXPORTER_IMAGE_RESTRICTION","value":"false"}]}}}'
    ```
1.  Run the following command with the `-w` option to watch the NUMA Resources Operator pod restart with the new configuration:
    ```terminal
    $ oc get pods -n openshift-numaresources -w
    ```

**Verification**

1.  Verify that validation is disabled by running the following command:
    ```terminal
    $ oc exec -n openshift-numaresources deploy/numaresources-controller-manager -- \
      printenv EXPORTER_IMAGE_RESTRICTION
    ```
    ```terminal title="Example output"
    false
    ```
1.  Verify that the NUMA Resources Operator is not degraded by running the following command:
    ```terminal
    $ oc get numaresourcesoperator numaresourcesoperator \
      -o jsonpath='{range .status.conditions[?(@.type=="Degraded")]}{.status}{" - "}{.reason}{": "}{.message}{"\n"}{end}'
    ```
    ```terminal title="Example output"
    False - Degraded:
    ```

    A status of `False` means that the Operator is not degraded.