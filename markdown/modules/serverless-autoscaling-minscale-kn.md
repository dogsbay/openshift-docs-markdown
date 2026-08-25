{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting the min-scale annotation by using the Knative CLI {id="serverless-autoscaling-minscale-kn_{{ context }}"}

Using the Knative (`kn`) CLI to set the `min-scale` annotation provides a more streamlined and intuitive user interface over modifying YAML files directly. You can use the `kn service` command with the `--scale-min` flag to create or modify the `min-scale` value for a service.

**Prerequisites**

*   Knative Serving is installed on the cluster.
*   You have installed the Knative (`kn`) CLI.

**Procedure**

*   Set the minimum number of replicas for the service by using the `--scale-min` flag:
    ```terminal
    $ kn service create <service_name> --image <image_uri> --scale-min <integer>
    ```
    ```terminal title="Example command"
    $ kn service create example-service --image quay.io/openshift-knative/knative-eventing-sources-event-display:latest --scale-min 2
    ```