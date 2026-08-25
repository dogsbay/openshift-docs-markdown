{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running latency tests on a {{ sno }} cluster {id="cnf-performing-end-to-end-tests-running-in-single-node-cluster_{{ context }}"}

To validate node tuning and identify performance delays, run latency tests on your {{ sno }} clusters. Evaluating these metrics ensures your environment is optimized for high-performance workloads. {._abstract}


:::note

When executing `podman` commands as a non-root or non-privileged user, mounting paths can fail with `permission denied` errors. To make the `podman` command work, append `:Z` to the volumes creation; for example, `-v $(pwd)/:/kubeconfig:Z`. This allows `podman` to do the proper SELinux relabeling.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in as a user with `cluster-admin` privileges.
*   You have applied a cluster performance profile by using the Node Tuning Operator.

**Procedure**

*   To run the latency tests on a {{ sno }} cluster, run the following command:
    ```terminal {minja}
    $ podman run -v $(pwd)/:/kubeconfig:Z -e KUBECONFIG=/kubeconfig/kubeconfig \
    -e LATENCY_TEST_RUNTIME=<time_in_seconds> registry.redhat.io/openshift4/cnf-tests-rhel9:v{{ product_version }} \
    /usr/bin/test-run.sh --ginkgo.v --ginkgo.timeout="24h"
    ```

    :::note

    The default runtime for each test is 300 seconds. For valid latency test results, run the tests for at least 12 hours by updating the `LATENCY_TEST_RUNTIME` variable.

    To run the buckets latency validation step, you must specify a maximum latency. For details on maximum latency variables, see the table in the "Measuring latency" section.
    
    :::


    After running the test suite, all the dangling resources are cleaned up.