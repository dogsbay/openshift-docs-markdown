{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding registries that allow image short names {id="images-configuration-shortname_{{ context }}"}

You can add registries to search for an image short name by editing the `image.config.openshift.io/cluster` custom resource (CR). {{ product_title }} applies the changes to this CR to all nodes in the cluster. {._abstract}

{% leveloffset +1 %}{% include "./snippets/allowed-registries-warning.md" %}{% endleveloffset %}

**Procedure**

*   Edit the `image.config.openshift.io/cluster` custom resource:
    ```terminal
    $ oc edit image.config.openshift.io/cluster
    ```

    The following is an example `image.config.openshift.io/cluster` CR:
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
      allowedRegistriesForImport:
        - domainName: quay.io
          insecure: false
      additionalTrustedCA:
        name: myconfigmap
      registrySources:
        containerRuntimeSearchRegistries:
        - reg1.io
        - reg2.io
        - reg3.io
        allowedRegistries:
        - example.com
        - quay.io
        - registry.redhat.io
        - reg1.io
        - reg2.io
        - reg3.io
        - image-registry.openshift-image-registry.svc:5000
    ...
    status:
      internalRegistryHostname: image-registry.openshift-image-registry.svc:5000
    ```

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
    1.  When prompted, enter `chroot /host` into the terminal:
        ```terminal
        sh-4.4# chroot /host
        ```

**Verification**

1.  Verify that registries are added to the policy file by running the following command:
    ```terminal
    sh-5.1# cat /etc/containers/registries.conf.d/01-image-searchRegistries.conf
    ```
    ```text title="Example output"
    unqualified-search-registries = ['reg1.io', 'reg2.io', 'reg3.io']
    ```
{% endif %}