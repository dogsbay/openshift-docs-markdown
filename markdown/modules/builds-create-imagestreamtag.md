{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an image stream tag for the Red Hat Universal Base Image {id="builds-create-imagestreamtag_{{ context }}"}

To install {{ op_system_base_full }} packages within a build, you can create an image stream tag to reference the Red Hat Universal Base Image (UBI).

To make the UBI available **in every project** in the cluster, add the image stream tag to the `openshift` namespace. Otherwise, to make it available **in a specific project**, add the image stream tag to that project.

Image stream tags grant access to the UBI by using the `registry.redhat.io` credentials that are present in the install pull secret, without exposing the pull secret to other users. This method is more convenient than requiring each developer to install pull secrets with `registry.redhat.io` credentials in each project.

**Procedure**

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   To create an `ImageStreamTag` resource in the `openshift` namespace, so it is available to developers in all projects, enter the following command:
    ```terminal
    $ oc tag --source=docker registry.redhat.io/ubi9/ubi:latest ubi9:latest -n openshift
    ```

    :::tip

    You can alternatively apply the following YAML to create an `ImageStreamTag` resource in the `openshift` namespace:
    ```yaml
    apiVersion: image.openshift.io/v1
    kind: ImageStream
    metadata:
      name: ubi9
      namespace: openshift
    spec:
      tags:
      - from:
          kind: DockerImage
          name: registry.redhat.io/ubi9/ubi:latest
        name: latest
        referencePolicy:
          type: Source
    ```
    
    :::

{% endif %}
*   To create an `ImageStreamTag` resource in a single project, enter the following command:
    ```terminal
    $ oc tag --source=docker registry.redhat.io/ubi9/ubi:latest ubi:latest
    ```

    :::tip

    You can alternatively apply the following YAML to create an `ImageStreamTag` resource in a single project:
    ```yaml
    apiVersion: image.openshift.io/v1
    kind: ImageStream
    metadata:
      name: ubi9
    spec:
      tags:
      - from:
          kind: DockerImage
          name: registry.redhat.io/ubi9/ubi:latest
        name: latest
        referencePolicy:
          type: Source
    ```
    
    :::