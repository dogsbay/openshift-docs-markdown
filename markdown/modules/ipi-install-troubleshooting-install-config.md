{%- set _mod_docs_content_type = "PROCEDURE" %}

# Troubleshooting `install-config.yaml` {id="ipi-install-troubleshooting-install-config_{{ context }}"}

The `install-config.yaml` configuration file represents all of the nodes that are part of the {{ product_title }} cluster. The file contains the necessary options consisting of but not limited to `apiVersion`, `baseDomain`, `imageContentSources` and virtual IP addresses.  {._abstract}

If errors occur early in the deployment of the {{ product_title }} cluster, the errors are likely in the `install-config.yaml` configuration file.

**Procedure**

1.  Use the guidelines in [YAML-tips](https://www.redhat.com/sysadmin/yaml-tips).
1.  Verify the YAML syntax is correct using [syntax-check](http://www.yamllint.com/).
1.  Verify the {{ op_system_first }} QEMU images are properly defined and accessible via the URL provided in the `install-config.yaml` by running the following command: 
    ```terminal
    $ curl -s -o /dev/null -I -w "%{http_code}\n" http://webserver.example.com:8080/rhcos-44.81.202004250133-0-qemu.<architecture>.qcow2.gz?sha256=7d884b46ee54fe87bbc3893bf2aa99af3b2d31f2e19ab5529c60636fbd0f1ce7
    ```

    If the output is `200`, there is a valid response from the webserver storing the bootstrap VM image.