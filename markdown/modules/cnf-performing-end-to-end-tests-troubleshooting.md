{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting errors with the cnf-tests container {id="cnf-performing-end-to-end-tests-troubleshooting_{{ context }}"}

To troubleshoot errors when running latency tests, verify that your cluster is accessible from within the `cnf-tests` container. Ensuring this connectivity resolves common test execution failures. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in as a user with `cluster-admin` privileges.

**Procedure**

*   Verify that the cluster is accessible from inside the `cnf-tests` container by running the following command:
    ```terminal {minja}
    $ podman run -v $(pwd)/:/kubeconfig:Z -e KUBECONFIG=/kubeconfig/kubeconfig \
    registry.redhat.io/openshift4/cnf-tests-rhel9:v{{ product_version }} \
    oc get nodes
    ```

    If this command does not work, an error related to spanning across DNS, MTU size, or firewall access might be occurring.
*   If the latency test pod is terminated with an `OOMKilled` status when you use a high `LATENCY_TEST_CPUS` value, set the `LATENCY_TEST_MEMORY` environment variable to a larger memory quantity, for example `2Gi`, and run the test again.