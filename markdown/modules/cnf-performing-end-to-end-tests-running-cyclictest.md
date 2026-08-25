{%- set _mod_docs_content_type = "PROCEDURE" %}
# Running cyclictest {id="cnf-performing-end-to-end-tests-running-cyclictest_{{ context }}"}

To measure real-time kernel scheduler latency on specified CPUs, run the `cyclictest` tool. Evaluating these metrics helps you identify execution delays and optimize your system for high-performance operations. {._abstract}


:::note

When executing `podman` commands as a non-root or non-privileged user, mounting paths can fail with `permission denied` errors. Depending on your local operating system and SELinux configuration, you might also experience issues running these commands from your home directory. To make the `podman` commands work, run the commands from a folder that is not your home/&lt;username> directory, and append `:Z` to the volumes creation. For example, `-v $(pwd)/:/kubeconfig:Z`. This allows `podman` to do the proper SELinux relabeling.

:::


**Prerequisites**

*   You have reviewed the prerequisites for running latency tests.

**Procedure**

*   To perform the `cyclictest`, run the following command, substituting variable values as appropriate:
    ```terminal {minja}
    $ podman run -v $(pwd)/:/kubeconfig:Z -e KUBECONFIG=/kubeconfig/kubeconfig \
    -e LATENCY_TEST_CPUS=10 -e LATENCY_TEST_RUNTIME=600 -e MAXIMUM_LATENCY=20 \
    registry.redhat.io/openshift4/cnf-tests-rhel9:v{{ product_version }} \
    /usr/bin/test-run.sh --ginkgo.focus="cyclictest" --ginkgo.v --ginkgo.timeout="24h"
    ```

    The command runs the `cyclictest` tool for 10 minutes (600 seconds). The test runs successfully when the maximum observed latency is lower than `MAXIMUM_LATENCY` (in this example, 20 μs). Latency spikes of 20 μs and above are generally not acceptable for telco RAN workloads.

    If you do not set `LATENCY_TEST_MEMORY`, the test allocates 32Mi of memory per `LATENCY_TEST_CPUS`, with a minimum of `1Gi`. To override that value, set `LATENCY_TEST_MEMORY` to a valid Kubernetes quantity, for example `2Gi`.

    If the results exceed the latency threshold, the test fails.

    :::important

    During testing shorter time periods, as shown, can be used to run the tests. However, for final verification and valid results, the test should run for at least 12 hours (43200 seconds).
    
    :::

    ```terminal title="Example failure output"
    running /usr/bin/cnftests -ginkgo.v -ginkgo.focus=cyclictest
    I0908 13:01:59.193776      27 request.go:601] Waited for 1.046228824s due to client-side throttling, not priority and fairness, request: GET:https://api.compute-1.example.com:6443/apis/packages.operators.coreos.com/v1?timeout=32s
    Running Suite: CNF Features e2e integration tests
    =================================================
    Random Seed: 1662642118
    Will run 1 of 3 specs

    [...]

    Summarizing 1 Failure:

    [Fail] [performance] Latency Test with the cyclictest image [It] should succeed
    /remote-source/app/vendor/github.com/openshift/cluster-node-tuning-operator/test/e2e/performanceprofile/functests/4_latency/latency.go:220

    Ran 1 of 194 Specs in 161.151 seconds
    FAIL! -- 0 Passed | 1 Failed | 0 Pending | 2 Skipped
    --- FAIL: TestTest (161.48s)
    FAIL
    ```