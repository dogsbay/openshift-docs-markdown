{%- set _mod_docs_content_type = "PROCEDURE" %}
# Renewing node certificates {id="renewing-node-certificates_{{ context }}"}

Although the kubelet CA certificate automatically renews at 292 days, you can manually trigger renewal earlier by annotating the `kube-apiserver-to-kubelet-signer` secret. {._abstract}

The old CA certificate is removed after 365 days. Nodes are not rebooted when a kubelet CA certificate is renewed or removed.

**Procedure**

*   Annotate the secret to trigger manual renewal by running the following command:
    ```terminal
    $ oc annotate -n openshift-kube-apiserver-operator secret kube-apiserver-to-kubelet-signer auth.openshift.io/certificate-not-after-
    ```