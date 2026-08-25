{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generating a JUnit latency test report {id="cnf-performing-end-to-end-tests-junit-test-output_{{ context }}"}

To analyze system performance and track execution delays, generate a JUnit latency test report. Reviewing this diagnostic output helps you identify configuration issues and performance bottlenecks within your cluster. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in as a user with `cluster-admin` privileges.

**Procedure**

*   Create a JUnit-compliant XML report by passing the `--junit` parameter together with the path to where the report is dumped:

    :::note

    You must create the `junit` folder before running this command.
    
    :::

    ```terminal
    $ podman run -v $(pwd)/:/kubeconfig:Z -v $(pwd)/junit:/junit \
    -e KUBECONFIG=/kubeconfig/kubeconfig registry.redhat.io/openshift4/cnf-tests-rhel9:v{{ product_version }} \
    /usr/bin/test-run.sh --ginkgo.junit-report junit/<file_name>.xml --ginkgo.v
    ```

    where:

    `file_name` 
    :   The name of the XML report file.