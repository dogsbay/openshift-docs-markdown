{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Image Registry Operator redirects {id="registry-configuring-registry-storage-swift-trust_{{ context }}"}

By disabling redirects, you can configure the Image Registry Operator to control whether clients such as {{ product_title }} cluster builds or external systems like developer machines are redirected to pull images directly from {{ rh_openstack_first }} Swift storage. This configuration is optional and depends on whether the clients trust the storage’s SSL/TLS certificates. {._abstract}


:::note

In situations where clients to not trust the storage certificate, setting the `disableRedirect` option can be set to `true` proxies traffic through the image registry. Consequently, however, the image registry might require more resources, especially network bandwidth, to handle the increased load.

Alternatively, if clients trust the storage certificate, the registry can allow redirects. This reduces resource demand on the registry itself.

Some users might prefer to configure their clients to trust their self-signed certificate authorities (CAs) instead of disabling redirects. If you are using a self-signed CA, you must decide between trusting the custom CAs or disabling redirects.

:::


**Procedure**

*   To ensures that the image registry proxies traffic instead of relying on Swift storage, change the value of the `spec.disableRedirect` field in the `config.imageregistry` object to `true` by running the following command:
    ```terminal
    $ oc patch configs.imageregistry.operator.openshift.io cluster --type merge --patch '{"spec":{"disableRedirect":true}}'
    ```