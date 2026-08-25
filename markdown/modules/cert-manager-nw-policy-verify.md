{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying the network policy creation {id="verifying-network-policy-creation_{{ context }}"}

You can verify that the default and custom `NetworkPolicy` resources are created. {._abstract}

**Prerequisites**

*   You have enabled network policy for {{ cert_manager_operator }} in the `CertManager` custom resource.

**Procedure**

*   Verify the list of `NetworkPolicy` resources in the `cert-manager` namespace by running the following command:
    ```terminal
    $ oc get networkpolicy -n cert-manager
    ```
    ```terminal title="Example output"
    NAME                                             POD-SELECTOR                              AGE
    cert-manager-allow-egress-to-api-server          app.kubernetes.io/instance=cert-manager   7s
    cert-manager-allow-egress-to-dns                 app=cert-manager                          6s
    cert-manager-allow-ingress-to-metrics            app.kubernetes.io/instance=cert-manager   7s
    cert-manager-allow-ingress-to-webhook            app=webhook                               6s
    cert-manager-deny-all                            app.kubernetes.io/instance=cert-manager   8s
    cert-manager-user-allow-egress-to-acme-server    app=cert-manager                          8s
    cert-manager-user-allow-egress-to-dns-service    app=cert-manager                          7s
    ```

    The output lists the default policies and any custom policies that you created.