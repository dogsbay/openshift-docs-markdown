{%- set _mod_docs_content_type = "CONCEPT" %}
# Using signature transports {id="security-deploy-signature_{{ context }}"}

You can use a signature transport as a way to store and retrieve the binary signature blob.
 
Signature transports can be either of the following types: {._abstract}

*   `atomic`: Managed by the {{ product_title }} API.
*   `docker`: Served as a local file or by a web server.

The {{ product_title }} API manages signatures that use the `atomic` transport type. You must store the images that use this signature type in your OpenShift Container Registry. Because the docker or distribution `extensions` API auto-discovers the image signature endpoint, no additional configuration is required.

Signatures that use the `docker` transport type are served by local file or web server. These signatures are more flexible; you can serve images from any container image registry and use an independent server to deliver binary signatures.

However, the `docker` transport type requires additional configuration. You must configure the nodes with the Uniform Resource Identifier (URI) of the signature server by placing arbitrarily-named YAML files into a directory on the host system, `/etc/containers/registries.d` by default. The YAML configuration files contain a registry URI and a signature server URI, or _sigstore_:

```yaml title="Example registries.d file"
docker:
    access.redhat.com:
        sigstore: https://access.redhat.com/webassets/docker/content/sigstore
```

In this example, the Red Hat Registry, `access.redhat.com`, is the signature server that provides signatures for the `docker` transport type. Its URI is defined in the `sigstore` parameter. You might name this file `/etc/containers/registries.d/redhat.com.yaml` and use the Machine Config Operator to automatically place the file on each node in your cluster. No service restart is required since policy and `registries.d` files are dynamically loaded by the container runtime.