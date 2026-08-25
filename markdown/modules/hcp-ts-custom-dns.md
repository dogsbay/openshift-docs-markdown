{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting accessing a hosted cluster by using a custom DNS {id="hcp-ts-custom-dns_{{ context }}"}

If you encounter an issue when you access a hosted cluster by using a custom DNS, you can determine the root cause so that you can resolve the issue. {._abstract}

**Procedure**

1.  Verify that the DNS record is properly configured and resolved.
1.  Check that the TLS certificates for the custom domain are valid, verifying that the SAN is correct for your domain, by entering the following command:
    ```terminal
    $ oc get secret \
      -n clusters <serving_certificate_name> \
      -o jsonpath='{.data.tls\.crt}' | base64 \
      -d |openssl x509 -text -noout -
    ```
1.  Ensure that network connectivity to the custom domain is working.
1.  In the `HostedCluster` resource, verify that the status shows the correct custom `kubeconfig` information, as shown in the following example:
    ```yaml title="Example HostedCluster status"
    status:
      customKubeconfig:
        name: sample-hosted-custom-admin-kubeconfig
    ```
1.  Check the `kube-apiserver` logs in the `HostedControlPlane` namespace by entering the following command:
    ```terminal
    $ oc logs -n <hosted_control_plane_namespace> \
      -l app=kube-apiserver -f -c kube-apiserver
    ```