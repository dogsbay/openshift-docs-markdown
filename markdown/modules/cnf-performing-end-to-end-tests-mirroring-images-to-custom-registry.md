{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mirroring the images to a custom registry accessible from the cluster {id="cnf-performing-end-to-end-tests-mirroring-images-to-custom-registry_{{ context }}"}

To make required images accessible from your cluster, mirror them to a custom registry. Performing this synchronization ensures that your deployment has the necessary container files, which is particularly useful in restricted or disconnected network environments. {._abstract}

A `mirror` executable is shipped in the image to provide the input required by `oc` to mirror the test image to a local registry.

**Procedure**

1.  Run the following command from an intermediate machine that has access to the cluster and registry.redhat.io:
    ```terminal
    $ podman run -v $(pwd)/:/kubeconfig:Z -e KUBECONFIG=/kubeconfig/kubeconfig \
    registry.redhat.io/openshift4/cnf-tests-rhel9:v{{ product_version }} \
    /usr/bin/mirror -registry <disconnected_registry> | oc image mirror -f -
    ```

    where:

    `<disconnected_registry>`
    :   Specifies the disconnected mirror registry you have configured, such as `my.local.registry:5000/`.
1.  When you have mirrored the `cnf-tests` image into the disconnected registry, you must override the original registry used to fetch the images when running the tests by a command similar to the following example:
    ```terminal
    $ podman run -v $(pwd)/:/kubeconfig:Z -e KUBECONFIG=/kubeconfig/kubeconfig \
    -e IMAGE_REGISTRY="<disconnected_registry>" \
    -e CNF_TESTS_IMAGE="cnf-tests-rhel9:v{{ product_version }}" \
    -e LATENCY_TEST_RUNTIME=<time_in_seconds> \
    <disconnected_registry>/cnf-tests-rhel9:v{{ product_version }} /usr/bin/test-run.sh --ginkgo.v --ginkgo.timeout="24h"
    ```