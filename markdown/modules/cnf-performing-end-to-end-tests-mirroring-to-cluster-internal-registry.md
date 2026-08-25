{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mirroring images to the cluster {{ product_registry }} {id="cnf-performing-end-to-end-tests-mirroring-to-cluster-internal-registry_{{ context }}"}

To make container images locally available for your deployment, mirror them to the built-in {{ product_registry }}. This integrated component runs as a standard workload on your {{ product_title }} cluster to ensure continuous access to required files. {._abstract}

**Procedure**

1.  Gain external access to the registry by exposing the registry with a route. You can do this task by running a command similar to the following example:
    ```terminal
    $ oc patch configs.imageregistry.operator.openshift.io/cluster --patch '{"spec":{"defaultRoute":true}}' --type=merge
    ```
1.  Fetch the registry endpoint by running a command similar to the following example:
    ```terminal
    $ REGISTRY=$(oc get route default-route -n openshift-image-registry --template='{{ .spec.host }}')
    ```
1.  Create a namespace for exposing the images by running a command similar to the following example:
    ```terminal
    $ oc create ns cnftests
    ```
1.  Make the image stream available to all the namespaces used for tests. This is required to allow the tests namespaces to fetch the images from the `cnf-tests` image stream. Run commands similar to the following examples:
    ```terminal
    $ oc policy add-role-to-user system:image-puller system:serviceaccount:cnf-features-testing:default --namespace=cnftests
    ```
    ```terminal
    $ oc policy add-role-to-user system:image-puller system:serviceaccount:performance-addon-operators-testing:default --namespace=cnftests
    ```
1.  Retrieve the docker secret name by running a command similar to the following example:
    ```terminal
    $ SECRET=$(oc -n cnftests get secret | grep builder-docker | awk {'print $1'}
    ```
1.  Retrieve the docker auth token by running a command similar to the following example:
    ```terminal
    $ TOKEN=$(oc -n cnftests get secret $SECRET -o jsonpath="{.data['\.dockercfg']}" | base64 --decode | jq '.["image-registry.openshift-image-registry.svc:5000"].auth')
    ```
1.  Create a `dockerauth.json` file, for example:
    ```bash
    $ echo "{\"auths\": { \"$REGISTRY\": { \"auth\": $TOKEN } }}" > dockerauth.json
    ```
1.  Mirror the image by running a command similar to the following example:
    ```terminal {minja}
    $ podman run -v $(pwd)/:/kubeconfig:Z -e KUBECONFIG=/kubeconfig/kubeconfig \
    registry.redhat.io/openshift4/cnf-tests-rhel9:v{{ product_version }} \
    /usr/bin/mirror -registry $REGISTRY/cnftests |  oc image mirror --insecure=true \
    -a=$(pwd)/dockerauth.json -f -
    ```
1.  Run the tests by running a command similar to the following example:
    ```terminal
    $ podman run -v $(pwd)/:/kubeconfig:Z -e KUBECONFIG=/kubeconfig/kubeconfig \
    -e LATENCY_TEST_RUNTIME=<time_in_seconds> \
    -e IMAGE_REGISTRY=image-registry.openshift-image-registry.svc:5000/cnftests cnf-tests-local:latest /usr/bin/test-run.sh --ginkgo.v --ginkgo.timeout="24h"
    ```