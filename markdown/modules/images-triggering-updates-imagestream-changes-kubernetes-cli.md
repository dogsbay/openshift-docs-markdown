{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting the image trigger on Kubernetes resources {id="images-triggering-updates-imagestream-changes-kubernetes-cli_{{ context }}"}

To enable automatic updates for your deployed applications managed by Kubernetes, use the command-line interface (CLI) to set an image stream change trigger on Kubernetes resources. This ensures that resources, like `Deployments` and `StatefulSets`, are automatically invoked when a new version of an upstream image is available. {._abstract}

When adding an image trigger to deployments, you can use the `oc set triggers` command. For example, the sample command in this procedure adds an image change trigger to the deployment named `example` so that when the `example:latest` image stream tag is updated, the `web` container inside the deployment updates with the new image value. This command sets the correct `image.openshift.io/triggers` annotation on the deployment resource.

**Procedure**

*   Trigger Kubernetes resources by entering the `oc set triggers` command:
    ```terminal
    $ oc set triggers deploy/example --from-image=example:latest -c web
    ```
    ```yaml title="Example deployment with trigger annotation"
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      annotations:
        image.openshift.io/triggers: '[{"from":{"kind":"ImageStreamTag","name":"example:latest"},"fieldPath":"spec.template.spec.containers[?(@.name==\"container\")].image"}]'
    # ...
    ```

    Unless the deployment is paused, this pod template update automatically causes a deployment to occur with the new image value.