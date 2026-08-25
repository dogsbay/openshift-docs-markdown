{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring TLS for {{ microshift_short }} {id="microshift-tls-config-proc_{{ context }}"}

You can choose to use either the TLS 1.2 or TLS 1.3 security profiles with {{ microshift_short }} for system hardening. {._abstract}

**Prerequisites**

*   You have access to the node as a root user.
*   {{ microshift_short }} has either not started for the first time, or is stopped.
*   The {{ oc_first }} is installed.
*   The certificate authority has issued the custom certificates (CAs).

**Procedure**

1.  Make a copy of the provided `config.yaml.default` file in the `/etc/microshift/` directory, renaming it `config.yaml`.
1.  Keep the new {{ microshift_short }} `config.yaml` in the `/etc/microshift/` directory. Your `config.yaml` file is read every time the {{ microshift_short }} service starts.

    :::note

    After you create it, the `config.yaml` file takes precedence over built-in settings.
    
    :::

1.  Optional: Use a configuration snippet if you are using an existing {{ microshift_short }} YAML. See "Using configuration snippets" in the Additional resources section for more information.
1.  Replace the default values in the `tls` section of the {{ microshift_short }} YAML with your valid values.
    ```yaml title="Example TLS 1.2 configuration"
    apiServer:
    # ...
      tls:
        cipherSuites:
        - <cipher_suite_1>
        - ...
        minVersion: VersionTLS12
    # ...
    ```

    where:

    `apiServer.tls.cipherSuites`
    :   Defaults to the suites of the configured `minVersion`. If `minVersion` is not configured, the default value is TLS 1.2. You can specify the cipher suites you want to use from the list of supported cipher suites. All clients connecting to the API server must support the configured cipher suites or the connections fail during the TLS handshake phase. Be sure to add the CA certificate bundle to the list of CA certificates that the TLS client or server trusts.

    `apiServer.tls.minVersion`
    :   Specify `VersionTLS12` or `VersionTLS13`.

    :::important

    When you choose TLS 1.3 as the minimum TLS version, only the default {{ microshift_short }} cipher suites can be used. Additional cipher suites are not configurable. If other cipher suites to use with TLS 1.3 are configured, those suites are ignored and overwritten by the {{ microshift_short }} defaults.
    
    :::


1.  Complete any other additional configurations that you require, then restart {{ microshift_short }} by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```