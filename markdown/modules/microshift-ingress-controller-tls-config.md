{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure the TLS security profile for the ingress controller {id="microshift-ingress-controller-config_{{ context }}"}

To configure the TLS security profile for the ingress controller in {{ microshift_short }}, you can add the `spec.tlsSecurityProfile` field to the configuration YAML and set a value for the appropriate profile. To apply the changes, restart the service. {._abstract}

**Prerequisites**

*   You have root access to the {{ microshift_short }} node.

**Procedure**

1.  Add the `spec.tlsSecurityProfile` field to the {{ microshift_short }} YAML configuration file.
    ```yaml
     ...
    spec:
      tlsSecurityProfile:
        type: Custom
        custom:
          ciphers:
          - ECDHE-ECDSA-CHACHA20-POLY1305
          - ECDHE-RSA-CHACHA20-POLY1305
          - ECDHE-RSA-AES128-GCM-SHA256
          - ECDHE-ECDSA-AES128-GCM-SHA256
          minTLSVersion: VersionTLS11
     ...
    ```

    where:

    `spec.tlsSecurityProfile.type`
    :   Specifies the TLS security profile type (`Old`, `Intermediate`, or `Custom`). The default is `Intermediate`.

    `spec.tlsSecurityProfile.custom`
    :   Specifies the appropriate field for the selected type:
    *   `old: {}`
    *   `intermediate: {}`
    *   `custom:`

    `spec.tlsSecurityProfile.custom.ciphers`
    :   Specifies a list of TLS ciphers and minimum accepted TLS version.

    :::warning

    If you choose a `custom` TLS configuration, use extreme caution. Using self-signed TLS certificates can introduce security risks.
    
    :::


1.  Save the file to apply the changes.
1.  Restart {{ microshift_short }} by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```