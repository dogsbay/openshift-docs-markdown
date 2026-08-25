{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generating a latency test failure report {id="cnf-performing-end-to-end-tests-test-failure-report_{{ context }}"}

To analyze test failures and troubleshoot performance issues, generate a JUnit latency test output and test failure report. Reviewing this diagnostic data helps you pinpoint exactly where your system is experiencing delays. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in as a user with `cluster-admin` privileges.

**Procedure**

*   Create a test failure report with information about the cluster state and resources for troubleshooting by passing the `--report` parameter with the path to where the report is dumped:
    ```terminal
    $ podman run -v $(pwd)/:/kubeconfig:Z -v $(pwd)/reportdest:<report_folder_path> \
    -e KUBECONFIG=/kubeconfig/kubeconfig registry.redhat.io/openshift4/cnf-tests-rhel9:v{{ product_version }} \
    /usr/bin/test-run.sh --report <report_folder_path> --ginkgo.v
    ```
    *   `<report_folder_path>`: Specifies the path to the folder where the report is generated.