{%- set _mod_docs_content_type = "PROCEDURE" %}
# Expose a default registry manually {id="registry-exposing-default-registry-manually_{{ context }}"}

You can gain external access to the default {{ product_registry }} by exposing it with a route. External access lets you log in from outside the cluster and tag and push images to an existing project by using the route host. {._abstract}

**Prerequisites**

*   The following prerequisites are automatically performed:
    *   Deploy the Registry Operator.
    *   Deploy the Ingress Operator.
*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  To expose the registry by using the `defaultRoute` parameter that exists in the `configs.imageregistry.operator.openshift.io` resource, set `defaultRoute` to `true` by running the following command:
    ```terminal
    $ oc patch configs.imageregistry.operator.openshift.io/cluster --patch '{"spec":{"defaultRoute":true}}' --type=merge
    ```
1.  Get the default registry route by running the following command:
    ```terminal
    $ HOST=$(oc get route default-route -n openshift-image-registry --template='{{ .spec.host }}')
    ```
1.  Get the certificate of the Ingress Operator by running the following command:
    ```terminal
    $ oc extract secret/$(oc get ingresscontroller -n openshift-ingress-operator default -o json | jq '.spec.defaultCertificate.name // "router-certs-default"' -r) -n openshift-ingress --confirm
    ```
1.  Move the extracted certificate to the trusted CA directory of the system by running the following command:
    ```terminal
    $ sudo mv tls.crt /etc/pki/ca-trust/source/anchors/
    ```
1.  Enable the default certificate of the cluster to trust the route by running the following command:
    ```terminal
    $ sudo update-ca-trust enable
    ```
1.  Log in with podman with the default route by running the following command:
    ```terminal
    $ sudo podman login -u kubeadmin -p $(oc whoami -t) $HOST
    ```