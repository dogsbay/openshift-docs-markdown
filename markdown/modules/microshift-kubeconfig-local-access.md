{%- set _mod_docs_content_type = "CONCEPT" %}
# Local access kubeconfig file {id="microshift-kubeconfig-local-access_{{ context }}"}

The local access `kubeconfig` file in {{ product_title }} is written to `/var/lib/microshift/resources/kubeadmin/kubeconfig`. This `kubeconfig` file provides access to the API server by using `localhost`. Use this file when you connect to the node locally. {._abstract}

```yaml title="Example contents of kubeconfig for local access"
clusters:
- cluster:
    certificate-authority-data: <base64_encoded_CA>
    server: https://localhost:6443
```

The `localhost` `kubeconfig` file can only be used from a client connecting to the API server from the same host. The certificates in the file do not work for remote connections.