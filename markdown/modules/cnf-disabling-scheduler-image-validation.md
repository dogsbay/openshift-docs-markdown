{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling scheduler image validation {id="cnf-disabling-scheduler-image-validation_{{ context }}"}

You can disable scheduler image validation by setting the `SCHEDULER_IMAGE_VALIDATION` environment variable to `false`. {._abstract}


:::warning

Disabling scheduler image validation creates a significant privilege escalation risk.
A malicious scheduler image can:

*   Access and manipulate all pods and nodes in the cluster
*   Bind workloads to nodes in ways that compromise security or stability
*   Observe sensitive cluster resource topology information
*   Run arbitrary code with scheduler service account permissions

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
      -p '{"spec":{"config":{"env":[{"name":"SCHEDULER_IMAGE_VALIDATION","value":"false"}]}}}'
    ```
1.  Run the following command with the `-w` option to watch the NUMA Resources Operator pod restart with the new configuration:
    ```terminal
    $ oc get pods -n openshift-numaresources -w
    ```

**Verification**

1.  Verify that validation is disabled by running the following command:
    ```terminal
    $ oc exec -n openshift-numaresources deploy/numaresources-controller-manager -- \
      printenv SCHEDULER_IMAGE_VALIDATION
    ```
    ```terminal title="Example output"
    false
    ```