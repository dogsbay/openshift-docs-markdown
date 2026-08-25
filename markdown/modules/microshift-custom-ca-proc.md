{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring custom certificate authorities {id="microshift-custom-cas-configuring_{{ context }}"}

To configure externally generated certificates and domain names by using custom certificate authorities (CAs), add them to the {{ microshift_short }} `/etc/microshift/config.yaml` configuration file. You must also configure the host operating system trust root. {._abstract}


:::note

Externally generated `kubeconfig` files are created in the `/var/lib/microshift/resources/kubeadmin/<hostname>/kubeconfig` directory. If you need to use `localhost` in addition to externally generated configurations, retain the original `kubeconfig` file in its default location. The `localhost` `kubeconfig` file uses the self-signed certificate authority.

:::


**Prerequisites**

*   The {{ oc_first }} is installed.
*   You have root access to the node.
*   The certificate authority has issued the custom certificates.
*   A {{ microshift_short }} `/etc/microshift/config.yaml` configuration file exists.

**Procedure**

1.  Copy the custom certificates you want to add to the trust root of the {{ microshift_short }} host. Ensure that the
certificate and private keys are only accessible to {{ microshift_short }}.
1.  For each custom CA that you need, add an `apiServer` section called `namedCertificates` to the `/etc/microshift/config.yaml` {{ microshift_short }} configuration file by using the following example:
    ```yaml
    apiServer:
      namedCertificates:
       - certPath: ~/certs/api_fqdn_1.crt
         keyPath:  ~/certs/api_fqdn_1.key
       - certPath: ~/certs/api_fqdn_2.crt
         keyPath:  ~/certs/api_fqdn_2.key
         names:
         - api_fqdn_1
         - *.apps.external.com
    ```

    where:

    `apiServer.namedCertificates.certPath`
    :   Add the full path to the certificate.

    `apiServer.namedCertificates.keyPath`
    :   Add the full path to the certificate key.

    `apiServer.namedCertificates.names`
    :   Optional. Add a list of explicit DNS names. Leading wildcards are allowed. If no names are listed, the implicit names are extracted from the certificates.

1.  Restart the {{ microshift_short }} to apply the certificates by running the following command:
    ```terminal
    $ systemctl microshift restart
    ```
1.  Wait a few minutes for the system to restart and apply the custom server. New `kubeconfig` files are generated in the `/var/lib/microshift/resources/kubeadmin/` directory.
1.  Copy the `kubeconfig` files to the client. If you specified wildcards for the IP address, update the `kubeconfig` to remove the public IP address of the server and replace that IP address with the specific wildcard range you want to use.
1.  From the client, use the following steps:
    1.  Specify the `kubeconfig` to use by running the following command:
        ```terminal
        $ export KUBECONFIG=~/custom-kubeconfigs/kubeconfig
        ```

        Use the location of the copied `kubeconfig` file as the path.
    1.  Check that the certificates are applied by using the following command:
        ```terminal
        $ oc --certificate-authority ~/certs/ca.ca get node
        ```
        ```terminal title="Example output"
        oc get node
        NAME                             STATUS   ROLES                         AGE   VERSION
        dhcp-1-235-195.arm.example.com   Ready    control-plane,master,worker   76m   v1.35.4
        ```
    1.  Add the new CA file to the $KUBECONFIG environment variable by running the following command:
        ```terminal
        $ oc config set clusters.microshift.certificate-authority /tmp/certificate-authority-data-new.crt
        ```
    1.  Verify that the new `kubeconfig` file contains the new CA by running the following command:
        ```terminal
        $ oc config view --flatten
        ```
        ```yaml title="Example externally generated kubeconfig file"
        apiVersion: v1
        clusters:
        - cluster:
            certificate-authority: /tmp/certificate-authority-data-new.crt
            server: https://api.ci-ln-k0gim2b-76ef8.aws-2.ci.openshift.org:6443
          name: ci-ln-k0gim2b-76ef8
        contexts:
        - context:
            cluster: ci-ln-k0gim2b-76ef8
            user:
          name:
        current-context:
        kind: Config
        preferences: {}
        ```

        where:

        `clusters.cluster.certificate-authority`
        :   The `certificate-authority-data` section is not present in externally generated `kubeconfig` files. It is added with the `oc config set` command used previously.

    1.  Verify the `subject` and `issuer` of your customized API server certificate authority by running the following command:
        ```terminal
        $ curl --cacert /tmp/caCert.pem https://${fqdn_name}:6443/healthz -v
        ```
        ```text title="Example output"
        Server certificate:
          subject: CN=kas-test-cert_server
          start date: Mar 12 11:39:46 2024 GMT
          expire date: Mar 12 11:39:46 2025 GMT
          subjectAltName: host "dhcp-1-235-3.arm.eng.rdu2.redhat.com" matched cert's "dhcp-1-235-3.arm.eng.rdu2.redhat.com"
          issuer: CN=kas-test-cert_ca
          SSL certificate verify ok.
        ```

        :::important

        Either replace the `certificate-authority-data` in the generated `kubeconfig` file with the new `rootCA` or add the `certificate-authority-data` to the trust root of the operating system. Do not use both methods.
        
        :::

    1.  Configure additional CAs in the trust root of the operating system. For example, in the RHEL Client truststore on the client system. [The system-wide truststore](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/securing_networks/using-shared-system-certificates_securing-networks#the-system-wide-trust-store_using-shared-system-certificates).
        *   Updating the certificate bundle with the configuration that contains the CA is recommended.
        *   If you do not want to configure your certificate bundles, you can alternately use the `oc login localhost:8443 --certificate-authority=/path/to/cert.crt` command, but this method is not preferred.