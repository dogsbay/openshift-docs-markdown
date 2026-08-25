{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generating additional kubeconfig files for remote access {id="microshift-kubeconfig-generating-additional-files_{{ context }}"}

To support more host names or IP addresses for remote access than the default file provides, you can generate additional `kubeconfig` files in {{ microshift_short }}. Add the entries to `apiServer.subjectAltNames` in `config.yaml` and restart the service to create the files. {._abstract}


:::important

You must restart {{ microshift_short }} for configuration changes to be implemented.

:::


**Prerequisites**

*   You have created a `config.yaml` file for {{ microshift_short }}.

**Procedure**

1.  Optional: You can show the contents of the `config.yaml`. Run the following command:
    ```terminal
    $ cat /etc/microshift/config.yaml
    ```
1.  Optional: You can show the contents of the remote-access `kubeconfig` file. Run the following command:
    ```terminal
    $ cat /var/lib/microshift/resources/kubeadmin/<hostname>/kubeconfig
    ```

    :::important

    Additional remote access `kubeconfig` files must include one of the server names listed in the {{ product_title }} `config.yaml` file. Additional `kubeconfig` files must also use the same CA for validation.
    
    :::

1.  To generate additional `kubeconfig` files for additional DNS names SANs or external IP addresses, add the entries you need to the `apiServer.subjectAltNames` field. In the following example, the DNS name used is `alt-name-1` and the IP address is `1.2.3.4`.
    ```yaml title="Example config.yaml with additional authentication values"
    dns:
      baseDomain: example.com
    node:
      hostnameOverride: "microshift-rhel9"
      nodeIP: 10.0.0.1
    apiServer:
      subjectAltNames:
      - alt-name-1
      - 1.2.3.4
    ```

    where:

    `microshift-rhel9`
    :   Specifies the hostname of the node.

    `alt-name-1`
    :   Specifies the DNS name.

    `1.2.3.4`
    :   Specifies the IP address or range.

1.  Restart {{ microshift_short }} to apply configuration changes and auto-generate the `kubeconfig` files you need by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```
1.  To check the contents of additional remote-access `kubeconfig` files, insert the name or IP address as listed in the `config.yaml` into the `cat` command. For example, `alt-name-1` is used in the following example command:
    ```terminal
    $ cat /var/lib/microshift/resources/kubeadmin/alt-name-1/kubeconfig
    ```
1.  Choose the `kubeconfig` file to use that contains the SAN or IP address you want to use to connect your node. In this example, the `kubeconfig` containing `alt-name-1` in the `clusters.cluster.server` field is the correct file.
    ```yaml title="Example contents of an additional kubeconfig file"
    clusters:
    - cluster:
        certificate-authority-data: <base64 CA>
        server: https://alt-name-1:6443
    ```
    *   The `/var/lib/microshift/resources/kubeadmin/alt-name-1/kubeconfig` file values are from the `apiServer.subjectAltNames` configuration values.

        :::note

        All parameters are included as common names (CN) and subject alternative names (SAN) in the external serving certificates for the API server.
        
        :::