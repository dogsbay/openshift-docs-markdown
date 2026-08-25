{%- set _mod_docs_content_type = "PROCEDURE" %}
# Exposing a secure registry manually {id="registry-exposing-secure-registry-manually_{{ context }}"}

Instead of logging in to the {{ product_registry }} from within the cluster, you can gain external access to the {{ product_registry }} by exposing the registry with a route. With this external access, you can log in to the registry from outside the cluster by using the route address. You can then tag and push images to an existing project by using the route host. {._abstract}

You can expose the route by using `DefaultRoute` parameter in the `configs.imageregistry.operator.openshift.io` resource or by using custom routes.

**Prerequisites**

*   The following prerequisites are automatically performed:
    *   Deploy the Registry Operator.
    *   Deploy the Ingress Operator.
*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  To expose the registry using `DefaultRoute` parameter, set `DefaultRoute` to `True`:
    ```terminal
    $ oc patch configs.imageregistry.operator.openshift.io/cluster --patch '{"spec":{"defaultRoute":true}}' --type=merge
    ```
1.  Log in with `podman` by entering the following command:
    ```terminal
    $ HOST=$(oc get route default-route -n openshift-image-registry --template='{{ .spec.host }}')
    ```
    ```terminal
    $ podman login -u kubeadmin -p $(oc whoami -t) --tls-verify=false $HOST
    ```
    *   `--tls-verify=false`: Set this parameter to `false` if the default certificate of the cluster for routes is untrusted. You can set a custom, trusted certificate as the default certificate with the Ingress Operator.
1.  To expose the registry using custom routes, create a secret with your route’s TLS keys. This step is optional. If you do not create a secret, the route uses the default TLS configuration from the Ingress Operator.
    ```terminal
    $ oc create secret tls public-route-tls \
        -n openshift-image-registry \
        --cert=</path/to/tls.crt> \
        --key=</path/to/tls.key>
    ```
1.  On the Registry Operator, enter the following command:
    ```terminal
    $ oc edit configs.imageregistry.operator.openshift.io/cluster
    ```
    ```yaml
    spec:
      routes:
        - name: public-routes
          hostname: myregistry.mycorp.organization
          secretName: public-route-tls
    ...
    ```

    :::note

    Only set `secretName` if you are providing a custom TLS configuration for the route of the registry.
    
    :::


**Troubleshooting**

*   [Error creating TLS secret](https://access.redhat.com/solutions/5419501)