{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an OpenShift Update Service application by using the CLI {id="update-service-create-service-cli_{{ context }}"}

You can use the OpenShift CLI (`oc`) to create an OpenShift Update Service application. {._abstract}

**Prerequisites**

*   The OpenShift Update Service Operator has been installed.
*   The OpenShift Update Service graph data container image has been created and pushed to a repository that is accessible to the OpenShift Update Service.
*   The current release and update target releases have been mirrored to a registry in the disconnected environment.

**Procedure**

1.  Configure the OpenShift Update Service target namespace, for example, `openshift-update-service`:
    ```terminal
    $ NAMESPACE=openshift-update-service
    ```

    The namespace must match the `targetNamespaces` value from the operator group.
1.  Configure the name of the OpenShift Update Service application, for example, `service`:
    ```terminal
    $ NAME=service
    ```
1.  Configure the registry and repository for the release images as configured in "Mirroring the {{ product_title }} image repository", for example, `registry.example.com/ocp4/openshift4-release-images`:
    ```terminal
    $ RELEASE_IMAGES=registry.example.com/ocp4/openshift4-release-images
    ```
1.  Set the local pullspec for the graph data image to the graph data container image created in "Creating the OpenShift Update Service graph data container image", for example, `registry.example.com/openshift/graph-data:latest`:
    ```terminal
    $ GRAPH_DATA_IMAGE=registry.example.com/openshift/graph-data:latest
    ```
1.  Create an OpenShift Update Service application object:
    ```terminal
    $ oc -n "${NAMESPACE}" create -f - <<EOF
    apiVersion: updateservice.operator.openshift.io/v1
    kind: UpdateService
    metadata:
      name: ${NAME}
    spec:
      replicas: 2
      releases: ${RELEASE_IMAGES}
      graphDataImage: ${GRAPH_DATA_IMAGE}
    EOF
    ```
1.  Verify the OpenShift Update Service application:
    1.  Use the following command to obtain a policy engine route:
        ```terminal
        $ while sleep 1; do POLICY_ENGINE_GRAPH_URI="$(oc -n "${NAMESPACE}" get -o jsonpath='{.status.policyEngineURI}/api/upgrades_info/v1/graph{"\n"}' updateservice "${NAME}")"; SCHEME="${POLICY_ENGINE_GRAPH_URI%%:*}"; if test "${SCHEME}" = http -o "${SCHEME}" = https; then break; fi; done
        ```

        You might need to poll until the command succeeds.
    1.  Retrieve a graph from the policy engine. Be sure to specify a valid version for `channel`. For example, if running in {{ product_title }} {{ product_version }}, use `stable-{{ product_version }}`{minja}:
        ```terminal
        $ while sleep 10; do HTTP_CODE="$(curl --header Accept:application/json --output /dev/stderr --write-out "%{http_code}" "${POLICY_ENGINE_GRAPH_URI}?channel=stable-4.6")"; if test "${HTTP_CODE}" -eq 200; then break; fi; echo "${HTTP_CODE}"; done
        ```

        This polls until the graph request succeeds; however, the resulting graph might be empty depending on which release images you have mirrored.


        :::note

        The policy engine route name must not be more than 63 characters based on RFC-1123. If you see `ReconcileCompleted` status as `false`  with the reason `CreateRouteFailed` caused by `host must conform to DNS 1123 naming convention
        and must be no more than 63 characters`, try creating the Update Service with a shorter name.
        
        :::