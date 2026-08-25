{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the Kubernetes API server for a hosted cluster {id="hcp-kube-api-server-cert_{{ context }}"}

You can customize the Kubernetes API server for your hosted cluster. {._abstract}

**Prerequisites**

*   You have a running hosted cluster.
*   You have access to modify the `HostedCluster` resource.
*   You have a custom DNS domain to use for the Kubernetes API server.
    *   The custom DNS domain must be properly configured and resolvable.
    *   The DNS domain must have valid TLS certificates configured.
    *   Network access to the domain must be properly configured in your environment.
    *   The custom DNS domain must be unique across your hosted clusters.
*   You have a configured custom certificate. For more information, see "Configuring a custom API server certificate in a hosted cluster".

**Procedure**

1.  In your provider platform, configure the DNS record so that the `kubeAPIServerDNSName` URL points to the IP address that the Kubernetes API server is being exposed to. The DNS record must be properly configured and resolvable from your cluster.
    ```terminal title="Example command to configure the DNS record"
    $ dig + short kubeAPIServerDNSName
    ```
1.  In your `HostedCluster` specification, modify the `kubeAPIServerDNSName` field, as shown in the following example:
    ```yaml
    apiVersion: hypershift.openshift.io/v1beta1
    kind: HostedCluster
    metadata:
      name: <hosted_cluster_name>
      namespace: <hosted_cluster_namespace>
    spec:
      configuration:
        apiServer:
          servingCerts:
            namedCertificates:
            - names:
              - api-custom-cert-sample-hosted.sample-hosted.example.com
              servingCertificate:
                name: sample-hosted-kas-custom-cert
      kubeAPIServerDNSName: api-custom-cert-sample-hosted.sample-hosted.example.com
    # ...
    ```
    *   `spec.configuration.apiServer.servingCerts.namedCertificates.names` specifies the list of DNS names that the certificate is valid for. The names listed in this field cannot be the same as the names specified in the `spec.servicePublishingStrategy.*hostname` field.
    *   `spec.configuration.apiServer.servingCerts.namedCertificates.servingCertificate` specifies the name of the secret that contains the custom certificate.
    *   `spec.kubeAPIServerDNSName` accepts a URI that will be used as the API server endpoint.
1.  Apply the configuration by entering the following command:
    ```terminal
    $ oc -f <hosted_cluster_spec>.yaml
    ```

    After the configuration is applied, the HyperShift Operator generates a new `kubeconfig` secret that points to your custom DNS domain.
1.  Retrieve the `kubeconfig` secret by using the CLI or the console.
    1.  To retrieve the secret by using the CLI, enter the following command:
        ```terminal
        $ kubectl get secret <hosted_cluster_name>-custom-admin-kubeconfig \
          -n <cluster_namespace> \
          -o jsonpath='{.data.kubeconfig}' | base64 -d
        ```

    1.  To retrieve the secret by using the console, go to your hosted cluster and click ***Download Kubeconfig***.

        :::note

        You cannot consume the new `kubeconfig` secret by using the ***show login command*** option in the console.
        
        :::