{%- set _mod_docs_content_type = "PROCEDURE" %}
# Managing proxy certificates during installation {id="proxy-cert-manage-install_{{ context }}"}

Configure proxy-trusted CA certificates during {{ product_title }} installation using the `additionalTrustBundle` value in the installation program configuration. {._abstract}

The `additionalTrustBundle` value of the installation program configuration is used to specify any proxy-trusted CA certificates during installation.

**Procedure**

1.  View the installation program configuration file by running the following command:
    ```terminal
    $ cat install-config.yaml
    ```
    ```terminal title="Example output"
    ...
    proxy:
      httpProxy: http://<username:password@proxy.example.com:123/>
      httpsProxy: http://<username:password@proxy.example.com:123/>
      noProxy: <123.example.com,10.88.0.0/16>
    additionalTrustBundle: |
        -----BEGIN CERTIFICATE-----
       <MY_HTTPS_PROXY_TRUSTED_CA_CERT>
        -----END CERTIFICATE-----
    ...
    ```

    :::note

    Proxy certificates are managed by the system and not by users.
    
    :::