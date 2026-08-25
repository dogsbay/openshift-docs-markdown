{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding specific registries to an allowlist {id="images-configuration-allowed_{{ context }}"}

You can add an allowlist of registries, or an individual repository, within a registry for image pull and push actions by editing the `image.config.openshift.io/cluster` custom resource (CR). {._abstract}

{{ product_title }} applies the changes to this CR to all nodes in the cluster.

When pulling or pushing images, the container runtime searches the registries listed under the `registrySources` parameter in the `image.config.openshift.io/cluster` CR. If you created a list of registries under the `allowedRegistries` parameter, the container runtime searches only those registries. Registries not in your allowlist are blocked.

{% leveloffset +1 %}{% include "./snippets/allowed-registries-warning.md" %}{% endleveloffset %}

**Procedure**

*   Edit the `image.config.openshift.io/cluster` custom resource by running the following command:
    ```terminal
    $ oc edit image.config.openshift.io/cluster
    ```

    The following is an example `image.config.openshift.io/cluster` CR with an allowed list:
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
        allowedRegistries:
        - example.com
        - quay.io
        - registry.redhat.io
        - reg1.io/myrepo/myapp:latest
        - image-registry.openshift-image-registry.svc:5000
    status:
      internalRegistryHostname: image-registry.openshift-image-registry.svc:5000
    ```

{% if not (openshift_rosa or openshift_dedicated) %}
    1.  After you make your configuration updates, list your nodes by running the following command:
        ```terminal
        $ oc get nodes
        ```

        Example output
        ```terminal
        NAME               STATUS   ROLES                  AGE   VERSION
        <node_name>        Ready    control-plane,master   37m   v1.27.8+4fab27b
        ```
    1.  Enter debug mode on the node by running the following command:
        ```terminal
        $ oc debug node/<node_name>
        ```

        Replace &lt;node_name> with the name of your node.
    1.  When prompted, enter `chroot /host` into the terminal:
        ```terminal
        sh-4.4# chroot /host
        ```

**Verification**

1.  Check that the registries are in the policy file by running the following command:
    ```terminal
    sh-5.1# cat /etc/containers/policy.json | jq '.'
    ```

    The following policy indicates that only images from the `example.com`, `quay.io`, and `registry.redhat.io` registries are accessible for image pulls and pushes:
    ```text title="Example image signature policy file"
    {
       "default":[
          {
             "type":"reject"
          }
       ],
       "transports":{
          "atomic":{
             "example.com":[
                {
                   "type":"insecureAcceptAnything"
                }
             ],
             "image-registry.openshift-image-registry.svc:5000":[
                {
                   "type":"insecureAcceptAnything"
                }
             ],
             "insecure.com":[
                {
                   "type":"insecureAcceptAnything"
                }
             ],
             "quay.io":[
                {
                   "type":"insecureAcceptAnything"
                }
             ],
             "reg4.io/myrepo/myapp:latest":[
                {
                   "type":"insecureAcceptAnything"
                }
             ],
             "registry.redhat.io":[
                {
                   "type":"insecureAcceptAnything"
                }
             ]
          },
          "docker":{
             "example.com":[
                {
                   "type":"insecureAcceptAnything"
                }
             ],
             "image-registry.openshift-image-registry.svc:5000":[
                {
                   "type":"insecureAcceptAnything"
                }
             ],
             "insecure.com":[
                {
                   "type":"insecureAcceptAnything"
                }
             ],
             "quay.io":[
                {
                   "type":"insecureAcceptAnything"
                }
             ],
             "reg4.io/myrepo/myapp:latest":[
                {
                   "type":"insecureAcceptAnything"
                }
             ],
             "registry.redhat.io":[
                {
                   "type":"insecureAcceptAnything"
                }
             ]
          },
          "docker-daemon":{
             "":[
                {
                   "type":"insecureAcceptAnything"
                }
             ]
          }
       }
    }
    ```
{%- endif %}

    :::note

    If your cluster uses the `registrySources.insecureRegistries` parameter, ensure that any insecure registries are included in the allowed list.

    For example:

    ```yaml
    spec:
      registrySources:
        insecureRegistries:
        - insecure.com
        allowedRegistries:
        - example.com
        - quay.io
        - registry.redhat.io
        - insecure.com
        - image-registry.openshift-image-registry.svc:5000
    ```
    
    :::