{%- set _mod_docs_content_type = "CONCEPT" %}
# Using custom certificate authorities for the {{ microshift_short }} API server {id="microshift-custom-cas_{{ context }}"}

To enable external clients to verify the {{ microshift_short }} API server and maintain encrypted connections, you can replace the default internal certificate with a custom server certificate issued by a trusted certificate authority (CA). {._abstract}

By default, clients outside of the node cannot verify the {{ microshift_short }}-issued API server certificate. You must update the configuration file with the certificate location and relevant domain names to ensure secure access across your network.

The following steps illustrate the workflow for customizing the API server certificate configuration in {{ microshift_short }}:

1.  Copy the certificates and keys to the preferred directory in the host operating system. Ensure that the files are accessible only with root access.
1.  Update the {{ microshift_short }} configuration for each custom CA by specifying the certificate names and new fully qualified domain name (FQDN) in the {{ microshift_short }} `/etc/microshift/config.yaml` configuration file.

    Each certificate configuration can contain the following values:
    *   The certificate file location is a required value.
    *   A single common name containing the API server DNS and IP address or IP address range.

        :::tip

        In most cases, {{ microshift_short }} generates a new `kubeconfig` file for your custom CA that includes the IP address or range that you specify. The exception is when you specify wildcards for the IP address. In this case, {{ microshift_short }} generates a `kubeconfig` file with the public IP address of the server. To use wildcards, you must update the `kubeconfig` file with your specific details.
        
        :::

    *   Multiple Subject Alternative Names (SANs) containing the API server DNS and IP addresses or a wildcard certificate.
    *   You can list additional DNS names for each certificate.
1.  After the {{ microshift_short }} service restarts, you must copy the generated `kubeconfig` files to the client.
1.  Configure additional CAs on the client system. For example, you can update CA bundles in the {{ op_system_base_full }} truststore.

    :::important

    Custom server certificates must be validated against CA data configured in the trust root of the host operating system. For more information, read the following documentation:

    *   [The system-wide truststore](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/securing_networks/using-shared-system-certificates_securing-networks#the-system-wide-trust-store_using-shared-system-certificates)
    
    :::

1.  The certificates and keys are read from the specified file location on the host. You can test and validate configuration from the client.
    *   If any validation fails, {{ microshift_short }} skips the custom configuration and uses the default certificate to start. The priority is to continue the service uninterrupted. {{ microshift_short }} logs errors when the service starts. Common errors include expired certificates, missing files, or wrong IP addresses.
1.  External server certificates are not automatically renewed. You must manually rotate your external certificates.