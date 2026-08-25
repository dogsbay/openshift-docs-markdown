{%- set _mod_docs_content_type = "PROCEDURE" %}
# Blocking specific registries {id="images-configuration-blocked_{{ context }}"}

You can block any registry, or an individual repository, within a registry by editing the `image.config.openshift.io/cluster` custom resource (CR). {._abstract}

{{ product_title }} applies the changes to this CR to all nodes in the cluster.

When pulling or pushing images, the container runtime searches the registries listed under the `registrySources` parameter in the `image.config.openshift.io/cluster` CR. If you created a list of registries under the `blockedRegistries` parameter, the container runtime does not search those registries. All other registries are allowed.


:::warning

To prevent pod failure, do not add the `registry.redhat.io` and `quay.io` registries to the `blockedRegistries` list. Payload images within your environment require access to these registries.

:::


**Procedure**

*   Edit the `image.config.openshift.io/cluster` custom resource by running the following command:
    ```terminal
    $ oc edit image.config.openshift.io/cluster
    ```

    The following is an example `image.config.openshift.io/cluster` CR with a blocked list:
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
        blockedRegistries:
        - untrusted.com
        - reg1.io/myrepo/myapp:latest
    status:
      internalRegistryHostname: image-registry.openshift-image-registry.svc:5000
    ```

    You cannot set both the `blockedRegistries` and `allowedRegistries` parameters. You must select one or the other.

{% if not (openshift_rosa or openshift_dedicated) %}
    1.  Get a list of your nodes by running the following command:
        ```terminal
        $ oc get nodes
        ```

        Example output
        ```terminal
        NAME                STATUS   ROLES                  AGE   VERSION
        <node_name>         Ready    control-plane,master   37m   v1.27.8+4fab27b
        ```
    1.  Run the following command to enter debug mode on the node:
        ```terminal
        $ oc debug node/<node_name>
        ```

        Replace &lt;node_name> with the name of the node you want details about.
    1.  When prompted, enter `chroot /host` into the terminal:
        ```terminal
        sh-4.4# chroot /host
        ```

**Verification**

1.  Verify that the registries are in the policy file by running the following command:
    ```terminal
    sh-5.1# cat etc/containers/registries.conf
    ```

    The following example indicates that images from the `untrusted.com` registry are blocked for image pulls and pushes:
    ```text title="Example output"
    unqualified-search-registries = ["registry.access.redhat.com", "docker.io"]

    [[registry]]
      prefix = ""
      location = "untrusted.com"
      blocked = true
    ```
{% endif %}