{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding certificate authorities to the cluster {id="configmap-adding-ca_{{ context }}"}

{% if openshift_enterprise or openshift_rosa or openshift_dedicated or openshift_webscale or openshift_origin %}
You can add certificate authorities (CA) to the cluster for use when pushing and pulling images with the following procedure.

**Prerequisites**

{% if openshift_rosa %}
*   You must have cluster administrator privileges.
{% endif %}
{% if openshift_dedicated %}
*   You must have at least dedicated administrator privileges.
{%- endif %}
*   You must have access to the public certificates of the registry, usually a `hostname/ca.crt` file located in the `/etc/docker/certs.d/` directory.

**Procedure**

1.  Create a `ConfigMap` in the `openshift-config` namespace containing the trusted certificates for the registries that use self-signed certificates. For each CA file, ensure the key in the `ConfigMap` is the hostname of the registry in the `hostname[..port]` format:
    ```terminal
    $ oc create configmap registry-cas -n openshift-config \
    --from-file=myregistry.corp.com..5000=/etc/docker/certs.d/myregistry.corp.com:5000/ca.crt \
    --from-file=otherregistry.com=/etc/docker/certs.d/otherregistry.com/ca.crt
    ```
1.  Update the cluster image configuration:
    ```terminal
    $ oc patch image.config.openshift.io/cluster --patch '{"spec":{"additionalTrustedCA":{"name":"registry-cas"}}}' --type=merge
    ```
{% endif %}