{%- set _mod_docs_content_type = "PROCEDURE" %}
# Allowing insecure registries {id="images-configuration-insecure_{{ context }}"}

You can add insecure registries, or an individual repository, within a registry by editing the `image.config.openshift.io/cluster` custom resource (CR). {._abstract}

{{ product_title }} applies the changes to this CR to all nodes in the cluster. Registries that do not use valid SSL certificates or do not require HTTPS connections are considered insecure.


:::important

Avoid insecure external registries to reduce possible security risks.

:::


{% leveloffset +1 %}{% include "./snippets/allowed-registries-warning.md" %}{% endleveloffset %}

**Procedure**

*   Edit the `image.config.openshift.io/cluster` custom resource (CR) by running the following command:
    ```terminal
    $ oc edit image.config.openshift.io/cluster
    ```

    The following is an example `image.config.openshift.io/cluster` CR with an insecure registries list:
    ```yaml
    apiVersion: config.openshift.io/v1
    kind: Image
    metadata:
      annotations:
        release.openshift.io/create-only: "true"
      creationTimestamp: "2019-05-17T13:44:26Z"
      generation: 1
      name: cluster
      resourceVersion: "8302"
      selfLink: /apis/config.openshift.io/v1/images/cluster
      uid: e34555da-78a9-11e9-b92b-06d6c7da38dc
    spec:
      registrySources:
        insecureRegistries:
        - insecure.com
        - reg4.io/myrepo/myapp:latest
        allowedRegistries:
        - example.com
        - quay.io
        - registry.redhat.io
        - insecure.com
        - reg4.io/myrepo/myapp:latest
        - image-registry.openshift-image-registry.svc:5000
    status:
      internalRegistryHostname: image-registry.openshift-image-registry.svc:5000
    ```

{% if not (openshift_rosa or openshift_dedicated) %}

**Verification**

*   Check that the registries are added to the policy file by running the following command on a node:
    ```terminal
    $ cat /etc/containers/registries.conf
    ```

    The following example indicates that images from the `insecure.com` registry is insecure and are allowed for image pulls and pushes.
    ```terminal title="Example output"
    unqualified-search-registries = ["registry.access.redhat.com", "docker.io"]

    [[registry]]
      prefix = ""
      location = "insecure.com"
      insecure = true
    ```
{% endif %}