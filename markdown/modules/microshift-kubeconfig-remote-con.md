{%- set _mod_docs_content_type = "CONCEPT" %}
# Remote access kubeconfig files {id="remote-access-con_{{ context }}"}

{{ microshift_short }} generates a default `kubeconfig` file that enables external clients to connect securely to the API server. The configuration uses the node hostname and certificate validation based on Subject Alternative Name (SAN) entries. {._abstract}

When a {{ microshift_short }} node connects to the API server from an external source, a certificate with all alternative names listed in the SAN field is used for validation. {{ microshift_short }} generates a default `kubeconfig` for external access by using the hostname value. The defaults are set in the `<node.hostnameOverride>`, `<node.nodeIP>`, and `api.<dns.baseDomain>` parameter values of the default `kubeconfig` file.

The `/var/lib/microshift/resources/kubeadmin/<hostname>/kubeconfig` file uses the hostname of the machine, or `node.hostnameOverride` if that option is set, to reach the API server. The CA in the `kubeconfig` file can validate certificates when the API server is accessed externally.

```yaml title="Example contents of a default kubeconfig file for remote access"
clusters:
- cluster:
    certificate-authority-data: <base64 CA>
    server: https://microshift-rhel9:6443
```

## Remote access customization {id="remote-access-customization_{{ context }}"}

Multiple remote access `kubeconfig` file values can be generated for accessing the node with different IP addresses or host names. An additional `kubeconfig` file generates for each entry in the `apiServer.subjectAltNames` parameter. You can copy remote access `kubeconfig` files from the host during times of IP connectivity and then use them to access the API server from other workstations.