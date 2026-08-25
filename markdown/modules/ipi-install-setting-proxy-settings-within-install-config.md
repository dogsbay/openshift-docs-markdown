{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting proxy settings {id="ipi-install-setting-proxy-settings-within-install-config_{{ context }}"}

You can deploy an {{ product_title }} cluster while using a proxy by editing the `install-config.yaml` file. {._abstract}

**Procedure**

1.  Add proxy values under the `proxy` key mapping:
    ```yaml
    apiVersion: v1
    baseDomain: <domain>
    proxy:
      httpProxy: http://USERNAME:PASSWORD@proxy.example.com:PORT
      httpsProxy: https://USERNAME:PASSWORD@proxy.example.com:PORT
      noProxy: <WILDCARD_OF_DOMAIN>,<PROVISIONING_NETWORK/CIDR>,<BMC_ADDRESS_RANGE/CIDR>
    ```

    The following is an example of `noProxy` with values.
    ```yaml
    noProxy: .example.com,172.22.0.0/24,10.10.0.0/24
    ```
1.  With a proxy enabled, set the appropriate values of the proxy in the corresponding key/value pair.

    Key considerations:
    *   If the proxy does not have an HTTPS proxy, change the value of `httpsProxy` from `https://` to `http://`.
    *   If the cluster uses a provisioning network, include it in the `noProxy` setting, otherwise the installation program fails.
    *   Set all of the proxy settings as environment variables within the provisioner node. For example, `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY`.