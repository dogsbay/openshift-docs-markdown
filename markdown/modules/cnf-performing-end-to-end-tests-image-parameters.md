{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the tests to consume images from a custom registry {id="cnf-performing-end-to-end-tests-image-parameters_{{ context }}"}

You can run the latency tests by using a custom test image and image registry using `CNF_TESTS_IMAGE` and `IMAGE_REGISTRY` variables. {._abstract}

**Procedure**

*   To configure the latency tests to use a custom test image and image registry, run a command similar to the following example:
    ```terminal {minja}
    $ podman run -v $(pwd)/:/kubeconfig:Z -e KUBECONFIG=/kubeconfig/kubeconfig \
    -e IMAGE_REGISTRY="<custom_image_registry>" \
    -e CNF_TESTS_IMAGE="<custom_cnf-tests_image>" \
    -e LATENCY_TEST_RUNTIME=<time_in_seconds> \
    registry.redhat.io/openshift4/cnf-tests-rhel9:v{{ product_version }} /usr/bin/test-run.sh --ginkgo.v --ginkgo.timeout="24h"
    ```

    where:

    `<custom_image_registry>`
    :   Specifies the custom image registry, for example, `custom.registry:5000/`.


    `<custom_cnf-tests_image>`
    :   Specifies the custom cnf-tests image, for example, `custom-cnf-tests-image:latest`.